let css = await fetch('pages/curriculum.css').then(r=>r.text());

export const render = ({path}) => {
    return {
        title: 'About Me',
        content: `
            <div class=row>
                <div class=col-12>Work on progress...</div>
                <button onclick=history.back()>Click here to go back</button>
        `,
        css
    }
};