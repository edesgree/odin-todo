function createNav() {
  const id = "main-nav";
  const $nav = document.createElement("nav");
  $nav.setAttribute("id", id);
  console.log($nav);
  return $nav;
}
function render() {
  const main = document.getElementById("main");

  //main.appendChild(createNav());
}
export { render as renderNav };
