function makeComponent (template_id) {
    return class extends HTMLElement {
        constructor () {
            super();
            let { content: template } = document.getElementById(template_id);
            const shadow = this.attachShadow({ mode: "open" });
            shadow.appendChild(template.cloneNode(true));
        }
    }
}