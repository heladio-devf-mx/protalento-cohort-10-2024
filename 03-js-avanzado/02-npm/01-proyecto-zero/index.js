const cowsay = require("cowsay");

console.log(cowsay.say({
    text : "I'm a moooodule of Protalento",
    e : "&O",
    T : "U "
}));

function firstFunction() {
    console.log("First function called!");
    secondFunction();
}

function secondFunction() {
    console.log("Second function called!");
}

const thirdFunction = function() {
    console.log("Third function called!");
}

function asyncTimeoutFunction() {
    setTimeout(function() {
        console.log("Within the async function! :O");
    }, 3000);
}

firstFunction();
asyncTimeoutFunction();
setTimeout(function() {
    console.log("SetTimeout call! :O");
}, 3000);
// asyncTimeoutFunction();
thirdFunction();