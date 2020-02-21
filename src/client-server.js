import {getViewByUrl} from "./views/helpers.js";


function controller(request) {
    getViewByUrl(request.data).then(view => {
        let response = view.default();

        postMessage(response);
    });
}

onmessage = controller;