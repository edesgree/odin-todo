import { createHtmlElements } from "./utils"

function renderNavLinks() {
    const navItems = ['home', 'page1', 'page2',]
    const $tabs = createHtmlElements('nav', null, null, 'tabs', null);

    navItems.forEach((item) => {
        let navItem = createHtmlElements('span', null, 'data-link', 'tab', item);
        navItem.setAttribute('data-link', item);
        $tabs.appendChild(navItem);
    })

    return $tabs;
}
function render() {
    const myNav = renderNavLinks();
    const header = document.createElement('header');
    const logo = document.createElement('div');
    logo.classList.add('logo');
    logo.innerText = "My Todo";
    header.appendChild(logo);
    header.appendChild(myNav);
    return header;
}
export { render as renderHeader }