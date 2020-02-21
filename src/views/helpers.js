export async function  getViewByUrl(url) {
    let hashIndex = url.indexOf("#");
    let viewPath = url.substr(hashIndex + 1);

    return import (`./${viewPath}.js`);
}
