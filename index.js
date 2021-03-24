var a = 1 * 1000, b = 2 * 1000;

function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}
function increment(a) {
    return ++a;
}
function decrement(b) {
    return --b;
}
function makeInt(a = 'a') {
    return parseInt(a, 10); 
}
function preserveDecimal(a = '2.222') {
    return parseFloat(a, 10);
}

