// create HTML for this section
function createHome() {
    const pageId = 'home';
    const $home = document.createElement('div');
    $home.setAttribute('id', pageId);

    return $home;
}
function render() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createHome());
}
export { render as renderPageHome }