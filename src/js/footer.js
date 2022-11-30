import {createHtmlElements} from "./utils"

function render(){
    const $footer = createHtmlElements('footer','footer',null,null,'© 2022 edesgrée');

    return $footer
}

export {render as renderFooter}