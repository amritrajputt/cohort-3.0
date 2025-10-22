// A promise in js is an object that represents the eventual completion or failure of an
// asyncrounous operation and its resulting value.
//  it is used to handle asyncrounous operation more effectively than traditional callbacks function

// callback:A callback is just a function passed as an argument to another function
//  and that function is called later (back) when something happens or a task finishes.

// Q.1>> Write a function greet(name, callback) that prints "Hello <name>",
// and then calls a callback to print "Welcome to the callback world!" after that.

// function greet(name, cb) {
//     console.log(`hello ${name}`);
//     cb()
// }



// const ans = greet("amrit", () => console.log("welocome to the callback world"));

// console.log(ans);


// Q2>> Create a function calculate(a, b, operation)
// where operation is a callback that performs addition, subtraction, etc.


// function add(a, b) {
//     return a + b;
// }
// function sub(a, b) {
//     return a - b;
// }
// function mul(a, b) {
//     return a * b;
// }
// function div(a, b) {
//     return a / b;
// }
// function calculate(a, b, operation) {
//     const result = operation(a, b)
//     console.log("ans:", result);
// }

// setTimeout(() => calculate(5, 3, add), 1000)
// setTimeout(() => calculate(5, 3, sub), 2000)
// setTimeout(() => calculate(5, 3, mul), 3000)
// setTimeout(() => calculate(5, 3, div), 4000)



// Q3>> Full Callback Hell
// 6️⃣ Make your own “YouTube upload flow”

// Using only setTimeout and callbacks:

// “Uploading video…” (3s)
// “Processing video…” (2s)
// “Video ready to watch!” (1s)

// You must chain them with nested callbacks, so output happens in proper order.

function uploading(nextStep) {
  setTimeout(() => {
    console.log("Uploading video...");
    nextStep();
  }, 3000);
}

function processing(nextStep) {
  setTimeout(() => {
    console.log("Processing video...");
    nextStep(); 
  }, 2000);
}

function videoReady() {
  setTimeout(() => {
    console.log("Video ready to watch!");
  }, 1000);
}
uploading(() => {
  processing(() => {
    videoReady();
  });
});