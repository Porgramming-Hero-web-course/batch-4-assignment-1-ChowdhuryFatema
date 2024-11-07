# Making Asynchronous Code Simpler in TypeScript with `async/await`

When building apps, we often need to do tasks like fetching data from the internet or reading a file. These tasks take time and shouldn’t stop the rest of the app from running. To handle this, we use **asynchronous** code. In JavaScript and TypeScript, there are a few ways to work with async code: **callbacks**, **promises**, and the modern **`async/await`**.

## 1. Callbacks: Hard to Manage

A **callback** is a function that runs after an operation is done. But when we use lots of callbacks inside each other, the code becomes messy and hard to read. This is called **callback hell**.

Example:

```typescript
fetchData((data) => {
  processData(data, (result) => {
    saveData(result, (response) => {
      console.log(response);
    });
  });
});
2. Promises: A Better Way
Promises make things cleaner by letting you chain operations using .then() for success and .catch() for errors. But when there are many steps, it can still get messy.

Example:

typescript
Copy code
fetchData()
  .then((data) => processData(data))
  .then((result) => saveData(result))
  .catch((error) => console.error(error));
3. async/await: The Easiest Way
async/await is the newest way to handle async code. It makes async code look like normal code, which is easier to read. You can also handle errors easily using try/catch.

Example:

typescript
Copy code
async function fetchData() {
  return 'Data fetched';
}

async function main() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

main();
4. Why Choose async/await?
Easier to Read: async/await makes the code look simple and clear.
Simple Error Handling: You can use try/catch, which is easy to understand.
TypeScript Helps: TypeScript works better with async/await, giving you fewer errors and making your code safer.
5. Conclusion
While callbacks and promises work, async/await is the easiest way to write and manage asynchronous code in TypeScript. It makes your code cleaner and helps you avoid mistakes.