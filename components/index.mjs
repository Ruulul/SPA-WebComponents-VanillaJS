import { intents } from "../sam/actions.mjs";

class LinkComponent extends HTMLElement {
    constructor () {
        super();
        this.onclick = ()=>intents.goto(this.attributes.page.value);
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