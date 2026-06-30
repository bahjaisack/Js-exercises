function changeImage() {
  const Image = document.querySelector("#image");

  const url = prompt("enter Image url");
  const borderColor = prompt("enter border color");
  const width = prompt("enter a width");
  const height = prompt("enter a height");
  const borderRadius = prompt("enter border radius");

  Image.setAttribute("src", url);
  Image.style.border = `2px solid ${borderColor}`;
  Image.style.width = `${width}px`;
  Image.style.height = `${height}px`;
  Image.style.borderRadius = `${borderRadius}px`;
  // Image.style.border = `2px solid ${borderColor}`
  // Image.style.border = `2px solid ${borderColor}`
  // Image.style.border = `2px solid ${borderColor}`
}
