let name = "Monisha";

let message = `Hello, ${name}! Welcome to JavaScript.`;
console.log(message);


let upperName = name.toUpperCase();
console.log("Uppercase Name:", upperName);


let isLong = message.length > 10;
console.log("Message has more than 10 characters:", isLong);


let containsJS = message.includes("JavaScript");
console.log("Contains 'JavaScript':", containsJS);
