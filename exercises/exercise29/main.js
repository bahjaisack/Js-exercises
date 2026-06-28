async function fetchingdata(){
    const response = await fetch('data.json');
    const data = await response.json();
    console.log(data);
}
fetchingdata();