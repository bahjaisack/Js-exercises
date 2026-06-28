function fetchdata(){
    return new Promise((resolve, reject)=>{
     setTimeout(() => {
         const success = true;
        if(success){
            resolve("fetched data successfully");
        }
        else{
            reject("failed to fetch data");
        }
    })
     }, 2000);
}

async function datafetch(){
    try{
        const data = await fetchdata();
        console.log(data);
    }
    catch(err) {
        console.log(err);
    }
}
datafetch();

