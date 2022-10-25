import { intents } from "./sam/actions.mjs";
import routes from "./pages/index.mjs";

export const view = {
    init() {
        for (let [intent, action] of Object.entries(intents)) window[intent] = action;
        let page = new URLSearchParams(window.location.search).get("path")
        intents.goto(page || 'home');
        window.onpopstate = ()=>{
            let path = new URLSearchParams(window.location.search).get("path")
            intents.goto(path)
        }
    },
    render(model) {
        let { title, content, css } = routes[model.page](model)

        document.title = title;
        document.querySelector("h1").innerHTML = title;
        document.querySelector("main").innerHTML = content;
        document.querySelector("style").innerHTML = css;
    },
}