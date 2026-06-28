const person = [
    { name: "Alice", age: 25, city: "Wonderland" },
    { name: "Bob", age: 30, city: "Builderland" },
    { name: "charlie", age: 35, city: "Chocolate Factory" }
];
    console.log("Properties and Value of each Person")

for(let p of person){
    console.log("---")
    for(let key in p){
           console.log(key + ": " +p[key]);
    }
}