## How to handle asynchronous operations using async/await over callback/promise TypeScript.

When you're building apps, there are many tasks that take time to complete, such as loading data from an API or reading a file from your computer. These tasks are called **asynchronous** operations. Asynchronous operations allow your app to keep running while waiting for these tasks to finish, so your users don’t experience delays or freezes.

In TypeScript (and JavaScript), there are a few ways to handle these tasks: **callbacks**, **promises**, and the modern **`async/await`** syntax. In this blog, we will talk about why `async/await` is often the best way to handle asynchronous operations, especially in TypeScript.

### 1. What is Asynchronous Code?

Normally, when your app runs, it follows a set of instructions in order. It waits for one instruction to finish before moving on to the next one. But some tasks, like fetching data from the internet, can take a long time. If your app waits for these tasks to finish before moving on, it can slow down or even freeze.

That’s where **asynchronous code** comes in. Asynchronous code lets your app continue running while waiting for a task to finish. This is done by running these tasks in the background and notifying your app when they're done.

### 2. How We Used to Handle Asynchronous Code

### **Callbacks**

One of the earliest ways to handle asynchronous operations in JavaScript was with **callbacks**. A callback is simply a function that gets called after a task is completed. 

For example, you might call a function to fetch some data, and when that data is ready, the function you passed (the callback) is executed. While this method works, it can get messy if you need to do a lot of things after each task is completed. This leads to what is called **callback hell**.

**Callback Hell:** When you have many nested callbacks, your code can become hard to read and manage. It looks like a pyramid of code, which can be confusing and error-prone.

### **Promises: A Step Up**

To make things clearer, JavaScript introduced **promises**. A promise is an object that represents the result of an asynchronous operation. When you use promises, you don’t have to nest functions inside each other. Instead, you can handle the result using `.then()` for success and `.catch()` for errors.

Promises are an improvement over callbacks because they avoid callback hell, but they can still become hard to manage if you need to chain a lot of operations or handle errors in complex ways.

### 3. The Modern Way: `async/await`

### **What is `async/await`?**

`async/await` is the most modern and clean way to work with asynchronous code in JavaScript and TypeScript. It was introduced to make working with promises easier and more like normal, synchronous code.

With `async/await`, you can write asynchronous code that looks and behaves like normal code. This makes it much easier to read, understand, and maintain. It also makes error handling more straightforward.

- **`async` functions**: When you define a function as `async`, it automatically returns a promise, and you can use `await` inside it.
- **`await`**: The `await` keyword pauses the execution of an `async` function until the promise resolves (either successfully or with an error). This means you don’t need to chain `.then()` or `.catch()` anymore.

### **Why is `async/await` Better?**

#### **1. Simpler to Read and Write**

With `async/await`, the code looks like normal, synchronous code. This makes it easier to read and understand, especially when you have multiple operations happening one after another.

Instead of dealing with `.then()` and `.catch()`, you can just use `await` to wait for the result of an operation. This keeps your code clean and straightforward.

#### **2. Easier Error Handling**

When using `async/await`, you can handle errors using a `try/catch` block, just like you would with regular code. This is a simpler and more reliable way to manage errors compared to handling them in multiple `.catch()` methods.

#### **3. Better for Complex Operations**

If you have many asynchronous operations, such as fetching data from multiple sources, `async/await` makes it much easier to deal with them. You can write each operation one after another without getting lost in callbacks or chaining `.then()`.

#### **4. Works Great with TypeScript**

TypeScript works beautifully with `async/await`. It provides better type-checking and helps catch errors during development. This is especially useful when you are dealing with complex data or making API calls where you need to ensure the data is correctly structured.

### 4. When to Use `async/await`

While `async/await` is generally the easiest and most efficient way to handle asynchronous code, there are some situations where you might want to use promises or callbacks. 

- **Use `async/await`** when you need to deal with multiple asynchronous tasks in a clear and readable way, and when handling errors is important.
- **Use promises** when you need to work with multiple independent asynchronous tasks at the same time, and you need to chain them together (though `Promise.all` can help with that too in `async/await`).
- **Use callbacks** only when working with older code or libraries that require them.

### Example: Simple Asynchronous Task with `async/await`

Here’s how simple it can be to handle an asynchronous task using `async/await`:

```typescript
async function fetchData() {
  // Simulating fetching data from a server
  return new Promise((resolve) => {
    setTimeout(() => resolve('Data fetched successfully!'), 2000);
  });
}

async function displayData() {
  try {
    const data = await fetchData(); // Wait for the fetchData to finish
    console.log(data); // Once it's done, log the data
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

displayData();
