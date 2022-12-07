require('./sass/style.scss');

import { renderHeader } from "./js/header";
import { renderFooter } from "./js/footer";
import { renderPageHome } from "./js/home";
import Logo from './images/logo.svg';


function createMain() {
    const $main = document.createElement('main');
    $main.setAttribute("id", "main");
    return $main;
}

function initWebsite() {
    const $content = document.getElementById('content');
    $content.innerHTML = "";
    $content.appendChild(renderHeader());
    $content.appendChild(createMain());
    $content.appendChild(renderFooter());

    // set active btn
    renderPageHome();
}
// start App
initWebsite();

