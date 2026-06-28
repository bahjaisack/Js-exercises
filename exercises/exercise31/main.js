async function getdata() {
  try {
    console.log("getting data");
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new error(`https error! status: ${response.status}`);
    }
    const user = await response.json();
    console.log("list of users", user);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
getdata();
