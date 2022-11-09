let css = await fetch('pages/pratt-parser/index.css').then(r=>r.text());
import { parse, evalTree } from "./parser.mjs";

window.parser = {
    parse,
    evalTree,
}

export const render = ({data: {tree, stream}})=>{
    return {
        title: "Pratt Parser",
        content: `
        It does not has support for parenthesis yet, and you also need to put spaces around the operators, otherwise doesnt work. :P
        <div class=row>
            <div class=col-6>
                Tree:
                <div class=row>
                    ${renderTree(tree)}
                </div>
            </div>
            <div class=col-6>
                ${inputStream(stream || '')}
                <div class=row>
                    = ${tree ? evalTree(tree) : 'Type something!'}
                </div>
            </div>
        </div>
        `,
        css,
    }
}

function renderTree ({left, token, right} = {}) {
    return `
        <div class=row>
            <div class="row center">
                ${token}
            </div>
            <div class=col-6>
                ${left ? renderTree(left) : ''}
            </div>
            <div class=col-6>
                ${right ? renderTree(right) : ''}
            </div>
        </div>
    `
}

function inputStream(stream) {
    return `
        <form onsubmit="
            let stream = event.target.elements.stream.value;
            push_data({ tree: parser.parse(stream), stream });
            return false;
        ">
            <input name=stream value="${stream}">
            <input type=submit value=Parse>
        </form>
    `
}