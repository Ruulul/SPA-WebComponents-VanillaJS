let css = await fetch('pages/curriculum.css').then(r=>r.text());

export const render = ({path}) => {
    return {
        title: 'About Me',
        content: `
        `,
        css
    }
};