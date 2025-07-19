//string templates
let name2 = "phu";
let message = "Welcome " + name2 + " to ES6 and TypeScript";
console.log(message);//Welcome phu to ES6 and TypeScript

let message1 = `Welcome ${name2} to ES6 and TypeScript`;
console.log(message1);//Welcome phu to ES6 and TypeScript

let message2 = `
    Welcome ${name2} to ES6 and TypeScript.
    This is tutorial series for ES6 and TypeScript
`;
console.log(message2);
/* Welcome phu to ES6 and TypeScript.
This is tutorial series for ES6 and TypeScript*/