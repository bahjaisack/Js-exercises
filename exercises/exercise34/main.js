function addItem() {
  const items = document.querySelector(".items");
  const currenItem = document.querySelectorAll("li").length;
  const newItem = document.createElement("li");
  newItem.textContent = `Item ${currenItem + 1}`;
  items.appendChild(newItem);
}

function removeItem() {
  const items = document.querySelector(".items");
  if (items.lastChild) {
    items.removeChild(items.lastChild);
  } else {
    alert("nothing to delete");
  }
}
