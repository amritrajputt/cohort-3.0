// A promise in js is an object that represents the eventual completion or failure of an
// asyncrounous operation and its resulting value.
//  it is used to handle asyncrounous operation more effectively than traditional callbacks function

// callback:A callback is just a function passed as an argument to another function
//  and that function is called later (back) when something happens or a task finishes.

// Q.1>> Write a function greet(name, callback) that prints "Hello <name>",
// and then calls a callback to print "Welcome to the callback world!" after that.

function greet(name, cb) {
    console.log(`hello ${name}`);
    cb()
}

const ans = greet("amrit", () => console.log("welocome to the callback world"));

console.log(ans);


// Q2>> Create a function calculate(a, b, operation)
// where operation is a callback that performs addition, subtraction, etc.


function add(a, b) {
    return a + b;
}
function sub(a, b) {
    return a - b;
}
function mul(a, b) {
    return a * b;
}
function div(a, b) {
    return a / b;
}
function calculate(a, b, operation) {
    const result = operation(a, b)
    console.log("ans:", result);
}

setTimeout(() => calculate(5, 3, add), 1000)
setTimeout(() => calculate(5, 3, sub), 2000)
setTimeout(() => calculate(5, 3, mul), 3000)
setTimeout(() => calculate(5, 3, div), 4000)



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


// Q4>> Write a function sayHello(name, callback) that prints 
// "Hello <name>" after 2 seconds,
//  and then calls the callback to print .

function sayHello(name,cb){
  console.log(`hello ${name}`);
  cb()
}
const cb = ()=>{
  console.log("How are you?");
}
sayHello("amrit",cb)


// Q5>>Write a function checkNumber(num, callback) that checks if a number is even or odd.

// If even, callback prints "Even number"; if odd, "Odd number".


const checkNumber = (num,check)=>{
  check(num)
}
const check = (num) =>{
  if(num%2 == 0){
    console.log("even");
  }else{
    console.log("odd");
    
  }
}
checkNumber(3,check)


// Q6>> Create a function timer(seconds, callback) that waits
//  for the given seconds and then calls the callback function.


const timer = (seconds,cb)=>{
    setTimeout(() => {
      cb()
    }, seconds*1000);
}
function cb(){
  console.log("times up!");
}

timer(5,cb)


// Q7>> User Authentication Flow

// Simulate logging in a user:

// “Checking username…” (2s)
// “Checking password…” (2s)
// “Login successful!” (1s)

// Use nested callbacks to ensure order.


const checkingUsername = (nextStep)=>{
    setTimeout(()=>{
        console.log("Checking username…");
        nextStep()
    },2000)
}

const checkingPassword = (nextStep)=>{
  setTimeout(() => {
    console.log("Checking password…");
    nextStep()
  }, 2000);
}

const loggedinStatus = ()=>{
  setTimeout(()=>{
    console.log("Login successful!");
  },1000)
}

checkingUsername(()=>{
  checkingPassword(()=>{
    loggedinStatus()
  })
})


// Q8>> Simulate online order flow:

// “Order received…” (1s)
// “Packing order…” (2s)
// “Shipped…” (2s)
// “Delivered!” (1s)

const ordering = (nextStep)=>{
    setTimeout(()=>{
        console.log("Order received…");
        nextStep()
    },1000)
}

const packingOrder = (nextStep)=>{
  setTimeout(() => {
    console.log("Packing order…");
    nextStep()
  }, 2000);
}

const shippedStatus = (nextStep)=>{
  setTimeout(()=>{
    console.log("shipped...");
    nextStep()
  },2000)
}
const deliveredStatus = ()=>{
  setTimeout(()=>{
    console.log("Delivered...");
  },1000)
}

ordering(()=>{
  packingOrder(()=>{
    shippedStatus(()=>{
      deliveredStatus()
    })
  })
})


// Q9>> Movie Ticket Booking Flow

// Steps:

// “Checking seat availability…” (2s)
// “Booking seat…” (3s)
// “Processing payment…” (2s)
// “Sending confirmation…” (1s)

// Use nested callbacks.

const checkingSeats = (nextStep)=>{
    setTimeout(()=>{
        console.log("Checking seat availability…");
        nextStep()
    },2000)
}

const bookingSeat = (nextStep)=>{
  setTimeout(() => {
    console.log("Booking seat…");
    nextStep()
  }, 3000);
}

const processingPayments = (nextStep)=>{
  setTimeout(()=>{
    console.log("Processing payment…");
    nextStep()
  },2000)
}
const sendingConfirmation = ()=>{
  setTimeout(()=>{
    console.log("Sending confirmation…");
  },1000)
}

checkingSeats(()=>{
  bookingSeat(()=>{
    processingPayments(()=>{
      sendingConfirmation()
    })
  })
})
