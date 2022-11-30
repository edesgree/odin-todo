// import images from a folder
function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

// helper to create html elements
function createHtmlElements(type, id, dataset, classes, content) {
    const element = document.createElement(type);
    if (id) element.id = id;
    if (content) element.innerText = content;
    if (classes) {
        let arrayClasses = classes.split(' ');
        arrayClasses.forEach((myClass) => element.classList.add(myClass));
    }
    if (dataset) element.setAttribute('data-action',dataset);
    return element
}

export {createHtmlElements,importAll}