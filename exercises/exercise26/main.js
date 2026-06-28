// blocking
function blocking(){
    alert("fetching user data");
    return("mission completed");
}
console.log("starting")
console.log(blocking());
console.log("the bolocked message");

// non-blocking
 console.log("non blocking section")
function nonblocking(callback){
    setTimeout(()=>{
        console.log("non-blocking message")
    },2000);
}
console.log(" message");
nonblocking((callback)=>{
    console.log(callback);
})