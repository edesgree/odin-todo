require('./sass/style.scss');

import { renderHeader } from "./js/header";
import { renderNav } from "./js/nav";
import { renderFooter } from "./js/footer";
import { renderPageHome } from "./js/home";
import Logo from './images/logo.svg';


function createMain() {
    const $main = document.createElement('main');
    $main.setAttribute("id", "main");
    //$main.appendChild(renderNav());
    console.log('main:',$main)
    console.log(renderNav())
    return $main;
}

function initWebsite() {
    const $content = document.getElementById('content');
    const $main = document.getElementById('main');
    $content.innerHTML = "";
    $content.appendChild(renderHeader());
    $content.appendChild(createMain());
    
    
    $content.appendChild(renderFooter());

    // set active btn
    renderPageHome();
    renderNav()
    
}
// start App
initWebsite();

