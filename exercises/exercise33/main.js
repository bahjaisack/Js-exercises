function changeContent() {
  const text = document.querySelector(".text");
  text.textContent = "Welcome";
  const p = document.querySelector(".p");
  p.innerHTML = "changed the content";
}
