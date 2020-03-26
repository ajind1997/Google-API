

//scope
let x = 1;
function add(y){
    return y + x;
}
console.log(add(3));
//let also work like var
//we can get them even if assigned in the outer environmnet

function add2(y){
    let x = 2;
    return y + x;
}
console.log(add2(3));

//hoisting
let z;
console.log(z);
z = 1;
console.log(z);