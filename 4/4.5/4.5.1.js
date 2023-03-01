let template = {};

function A() {
    return template;
}
function B() {
    return template;
}

let a = new A();
let b = new B();

console.log( a == b );