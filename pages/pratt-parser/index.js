let css = await fetch('pages/pratt-parser/index.css').then(r=>r.text());

export const render = ()=>{
    return {
        title: "Pratt Parser",
        content: `
        <div class=row>
            <div class=col-6>
                <ul>
                    <li>
                        Symbol:     <span>+</span>
                        Notation:   <span>Infix</span>
                        Precedence: <span>0</span>
                    </li>
                    <li>
                        Symbol:     <span>-</span>
                        Notation:   <span>Infix</span>
                        Precedence: <span>0</span>
                    </li>
                    <li>
                        Symbol:     <span>*</span>
                        Notation:   <span>Infix</span>
                        Precedence: <span>10</span>
                    </li>
                    <li>
                        Symbol:     <span>/</span>
                        Notation:   <span>Infix</span>
                        Precedence: <span>10</span>
                    </li>
                </ul>
            </div>
            <div class=col-6>
                <form onsubmit="parse();return false">
                    <input>
                    <input type=submit value=Parse>
                </form>
            </div>
        </div>
        `,
        css,
    }
}