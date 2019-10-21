---
title: async/await
sidebar_label: async/await
---
##  前言
async/await建立在Promises上，并且与所有现有的基于Promise的API兼容。


### async—声明一个异步函数

- 自动将常规函数转换成Promise，返回值也是一个Promise对象
- 只有async函数内部的异步操作执行完，才会执行then方法指定的回调函数

### await—暂停异步的功能执行

- 放置在Promise调用之前，await强制其他代码等待，直到Promise完成并返回结果
- 只能与Promise一起使用，不适用于回调async 函数的几种使用形式

## 语法：

1. async 函数的几种使用形式
```js
// 函数表达式
const foo = async function () {}

// 对象方法
const obj = { async foo () {} }
obj.foo().then(() => {console.log('balabala')})

// 箭头函数
const foo = async () => {}

// class 方法
class Storage {
 constructor () {
   this.cachePromise = caches.open('avatars')
 }
 async getAvatar (name) {
   const cache = await this.cachePromise
   return cache.match(`/avatars/${name}.jpg/`)
 }
}

const storage = new Storage()
storgae.getAvatar('jack').then(...)
```

2、await的使用规则：
- await后需要的是一个Promise对象，如果不是则会被转成Promise对象。
- 如果存在一个await后的Promise转为rejected状态，那么整个async函数都会中断操作。
- 如果状态是resolve，那么他的返回值则会变成then里面的参数，如下：

```js
async function f () {
 return await 123;
}

f().then(v => console.log(v)) // 123
```

**注意：**

*容错：* 由于await后面的promise运行结果可能是rejected，最好把await放入try-catch中

*性能：* await后的异步操作，如果彼此没有依赖关系最好同时触发，在下面会有介绍
- **只能在async函数内部使用，如果在普通函数中，会报错**

async函数完全可以看作多个异步操作，包装成的一个 Promise 对象，而await命令就是内部then命令的语法糖。

## 容错：

之前也谈到了Promise对错误处理的一些局限性，这里主要看看 await/asyc 对错误处理要注意的一些问题。


### 方法一：try…catch

最标准的方法是使用 try…catch 语句。在调用 await 函数时，如果出现非正常状况就会跑出异常。

```js
class BookModel {
 fetchAll() {
   return new Promise((resolve, reject) => {
     window.setTimeout(() => { reject({'error': 400}) }, 1000);
   });
 }
}
// async/await
async getBooksByAuthorWithAwait(authorId) {
try {
 const books = await bookModel.fetchAll();
} catch (error) {
 console.log(error);    // { "error": 400 }
}
```

在捕捉到异常之后，在catch根据需要有几种方法来处理它：


- **直接处理异常**，并返回一个正常值。（不在 catch 块中使用任何 return 语句相当于使用 return undefined，undefined 也是一个正常值。）
- **抛出异常**，如果你想让调用者来处理它，就将它抛出。可以直接抛出错误对象
  - **直接抛出**：比如 throw error，这样就可以在 promise 链中使用 await getBooksByAuthorWithAwait() 函数（也就是像 getBooksByAuthorWithAwait().then(...).catch(error => …) 这样调用它）。
  - **加工一下再抛出**：包装成 Error 对象，比如 throw new Error(error)，那么在控制台中显示这个错误时它将给出完整的堆栈跟踪信息。
- **拒绝它**，比如 return Promise.reject(error)。这相当于 throw error，因此不推荐使用。


这种方法也有一个缺陷。


1. 由于 try...catch 会捕获代码块中的每个异常，所以通常不会被 promise 捕获的异常也会被捕获到。比如：

```js
class BookModel {
 fetchAll() {
   cb();    // note `cb` is undefined and will result an exception
   return fetch('/books');
 }
}
try {
 bookModel.fetchAll();
} catch(error) {
 console.log(error);  // This will print "cb is not defined"
}
```

运行此代码，你将会在控制台看到“ReferenceError：cb is not defined”错误，消息的颜色是黑色的。错误消息是通过 console.log() 输出的，而不是 JavaScript 本身。有时候这可能是致命的：如果 BookModel 被包含在一系列函数调用中，并且其中一个调用把错误吞噬掉了，那么找到这样的 undefined 错误将非常困难。

2. 如果是多个异步请求且每个请求的错误处理逻辑是不一样的，将他们都包裹成一个try-catch显然是不行的，如果为它们写多个不同的try-catch，代码会显得很冗余。可以试试下面介绍的两种方法。

### 方法二：使用.catch

```js
let books = await fetchData()
 .catch((error) => { console.log(error); }); // return undefined if error happens
```

注意：在catch里面不要直接将error返回，如果 fetchData 返回 resolve 正确结果时，data 是我们要的结果，如果是 reject 了，发生错误了，那么 data 是error，这不是我们想要的，可以返回undefined。


这种方法有两个小问题：

- 它是和 promise 的混合体。你仍然需要了解 promise 的工作原理才能看懂这段代码。
- 错误处理出现在普通代码逻辑之中，这样不直观。

### 方法三：让函数返回两个值


错误处理的另一种方式是受到了 Go 语言启发，它允许异步函数返回错误和结果，这样即可使error和data分为两个变量，更加明确：

```js
// 抽离成公共方法
const awaitWrap = promise => {
 return promise
          .then(data => [null, data])
          .catch(err => [err, null])
}

const [err, data] = await awaitWrap(fetchData);
```
### 性能

await语法糖明显的缺点，就是多个异步代码不经过特别优化会很容易“串行化”，想要避免这样低效的代码，又要写一些“恶心”的不太容易阅读的代码去优化它。
```js

a(() => {
 a1();
});

b(() => {
 b1();
});
```
如果写成下面的方式，虽然一定能保证功能一致，但变成了最低效的执行方式：
```js
await a();
await a1();
await b();
await b1();
```
因为翻译成回调，就变成了：
```js
a(() => {
 a1(() => {
   b(() => {
     b1();
   });
 });
});
```

然而我们发现，原始代码中，函数 b 可以与 a 同时执行，但 async/await 语法会让我们倾向于在 a1 执行完后，再执行 b。所以当我们意识到这一点，可以优化一下性能：

```js
const resA = a();
const resB = b();  // 先让a和b两个异步请求同时发送出去
await resA;
a1();
await resB;
b1(); // b1的执行依赖了a要先完成，这是不好的
```

但其实这个逻辑也无法达到回调的效果，虽然 a 与 b 同时执行了，但 b1 原本只要等待 b 执行完，现在如果 a 执行时间比 b 长，就变成了:

```js
a(() => {
 b1();
});
```

**看来只有完全隔离成两个函数：**

```js
(async () => {
 await a();
 a1();
})();

(async () => {
 await b();
 b1();
})();
```

或者利用 Promise.all:

```js
async function A() {
 await a();
 a1();
}

async function B() {
 await B();
 b1();
}

Promise.all([A(), B()]);
```

**比较常用的一个场景：同时发送多个请求都结束后才执行某个操作，且多个请求之间没有依赖关系。那就干脆就别用**
async/await:

```js
Promise.all([a(), b()]).then(() => {
 a1();
 a2();
});

```
对比 async/await 版:

```js
const resA = a();
const resB = b();
await resA;
await resB;
a1();
a2();
```

回调方式这么简单的代码，换成 async/await 居然写完还要反思一下，再反推着去优化性能，这付出的代价恐怕比回调地狱还要更多。


而且大部分场景代码是非常复杂的，同步与 await 混杂在一起，想捋清楚其中的脉络，并正确优化性能往往是很困难的。但是我们为什么要自己挖坑再填坑呢？很多时候还会导致忘了填。


决定代码质量的是思维，而非框架或语法，async/await 虽好，但也要适度。

## async...await优点

### 优点一：更可读的串行代码
```js
fetchA()
 .then(resA => fetchB(resA))
 .then(resB => fetchC(resB))
 .then(resC => fetchD(resC))
 .then(resD => ...)
 .catch(error => ...)
```

我们将逻辑分装在一个async函数里。这样我们就可以直接对promise使用await了，也就规避了写then回调。

```js
try {
 const resA = fetchA();
 const resB = fetchB(resA);
 const resC = fetchC(resB);
 const resD = fetchD(resC);
 ...
} catch(error) {
 ...
}
```

这样比较看上去代码差不多，但是要注意，`.then(resA => fetchB(resA))`，then里面的回调函数的处理逻辑可能更为复杂，**而这些代码在await/async代码中将会显得很“同步”**，没有那么多回调函数，也没有一层层的then，代码顺序执行即可。

优点二：调试方便

在函数入口设置断点并执行跳过 await 行之后，调试器会在 `bookModel.fetchAll()` 执行时暂停一会儿，然后移动到下一行（也就是.filter）！这比使用 promise 要容易调试得多，因为你必须在.filter 这一行设置另一个断点。

<div align="center">
    <img width="550" src="https://cosmos-x.oss-cn-hangzhou.aliyuncs.com/01SLkN.png" />
</div>
优点三：返回值统一

async关键字，尽管看起来不是很明显。它声明 `getBooksByAuthorWithAwait()` 函数的返回值是一个 promise，因此调用者可以安全地调用 `getBooksByAuthorWithAwait().then(…)` 或 `await getBooksByAuthorWithAwait()`。比如像下面这段代码：
```js
getBooksByAuthorWithPromise(authorId) {
 if (!authorId) {
   return null;
 }
 return bookModel.fetchAll()
   .then(books => books.filter(b => b.authorId === authorId));
 }
}
```

在上面的代码中，`getBooksByAuthorWithPromise` 可能返回一个 promise（正常情况）或 null（异常情况），在这种情况下，调用者无法安全地调用.then()。而如果使用 async 声明，则不会出现这种情况。
