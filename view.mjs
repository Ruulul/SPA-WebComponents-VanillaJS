import { intents } from "./sam/actions.mjs";
import { render as home } from "./pages/home.mjs";
import { render as about } from "./pages/about.mjs";

const routes = {
    home, 
    about,
};

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
        let { title, content } = routes[model.page](model)

        document.title = title;
        document.querySelector("h1").innerHTML = title;
        document.querySelector("main").innerHTML = content;
    },
}