<h1 align="center">Introduction on NodeJS</h1>

This project it's just a simple library creation with a few initial concepts of NodeJS

## NodeJS

- Node it's a runtime, it has environment with commands that allows Javascript to run without been executed on the browser. The browser parse Javascript it's a native parser.

- NodeJS became a synonym of JavaScript in back-end. It's a tool of many commands, a runtime that we execute to run Javascript files outside the browser through the terminal. So with these Node commands we warn our S.O. that he can enter the node environment, run a file and then access the JS file

<br>

---

<br>

## Synchronous x Asynchronous

<b>Synchronous Code:</b>
- It happen one at a time

<b>Asynchronous:</b>
- Asynchronous operations can run multiple tasks concurrently on a single thread.
- We define a function with "async" and then we use "await" before every expression that returns a Promise.
- You can only use await within an "async" function. Otherwise you can still use "then" regularly

<br>

---
## Promise

- A Promise is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.

- A pending promise can either be fulfilled with a value or rejected with a reason (error). When either of these options happens, the associated handlers queued up by a promise's "then" method are called or if it's wrapped on a "try...catch" method the catch is called.


<br>

---

<br>

## Is there a difference between "then" and "async/await"?

Talking about syntax "then" method brought a syntax that makes more sense when we're using functional Javascript, meanwhile the "async/await" flow makes more sense to been used inside a class method


