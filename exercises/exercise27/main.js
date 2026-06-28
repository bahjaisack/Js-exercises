function fetchdata(){
    return new Promise((resolve, reject)=>{
     setTimeout(() => {
         const success = false;
        if(success){
            resolve("fetched data successfully");
        }
        else{
            reject("failed to fetch data");
        }
    })
     }, 2000);
}
fetchdata()
.then((data)=> console.log(data))
.catch((err)=> console.log(err));

