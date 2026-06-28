let numbers = [1,2,3];
let allnumbers = [...numbers, 4, 5];
console.log(allnumbers); // spread
//rest
function multiply(...number){
    return number.reduce((total, num) => total * num, 1);
}
console.log(multiply(1,2,3));