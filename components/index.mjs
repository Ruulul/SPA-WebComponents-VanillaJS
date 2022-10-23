import { intents } from "../sam/actions.mjs";

class LinkComponent extends HTMLElement {
    constructor () {
        super();
        //let shadow = this.attachShadow({ mode: "open" });
        let page = this.attributes.page.value;
        //let link = document.createElement("a");
        //link.innerHTML = this.innerHTML;
        //link.onclick = ()=>intents.goto(page);
        //shadow.appendChild(link);
        this.onclick = ()=>intents.goto(page);
    }
}
customElements.define('go-to', LinkComponent);

function makeComponentFromTemplate (template_id) {
    return class extends HTMLElement {
        constructor () {
            super();
            let { content: template } = document.getElementById(template_id);
            const shadow = this.attachShadow({ mode: "open" });
            shadow.appendChild(template.cloneNode(true));
        }
    }
}