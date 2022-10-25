let css = await fetch('pages/about.css').then(r=>r.text());

export const render = () => {
    return {
        title: "About",
        content: `
            About
        `,
        css,
    }
}