import {updateDOM} from "./dom-service.js";
import {getViewByUrl} from "./views/helpers.js";


let worker = new Worker('./src/client-server.js', {
    type: 'module'
});

document.addEventListener("click", (event) => {
    if (event.target.tagName.toLowerCase() === "a") {
        if (event.target.href.indexOf(window.location.hostname)) {
            worker.postMessage(event.target.href);
        }
    }
});


worker.onmessage = (response) => {
    updateDOM(response.data)
};

async function start() {
    let view = await getViewByUrl(window.location.href);

    view.default();
    updateDOM(view.default());
}

start();


