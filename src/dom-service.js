import morphdom from '../node_modules/morphdom/dist/morphdom-esm.js' ;

export function updateDOM(html) {
    morphdom(document.documentElement, html);
}