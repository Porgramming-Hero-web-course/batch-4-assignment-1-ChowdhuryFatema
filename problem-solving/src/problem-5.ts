

const person = {
    name: "Alice",
    age: 30
};

const getProperty = <T, K extends keyof T>(obj: T, value: K): T[K] => {
    return obj[value];
} 


