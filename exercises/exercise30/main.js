function operate(a,b, callback){
    return callback(a,b);
}

function multiply(a,b){
    return(a*b);
}

function divide(a,b){
    return(a/b);
}

console.log("multiply: ", operate(2, 4, multiply));
console.log("divide", operate(6,3, divide));