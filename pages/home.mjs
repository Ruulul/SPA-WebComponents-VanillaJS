let css = await fetch('pages/home.css').then(r=>r.text());

export const render = () => {
    return {
        title: "Home page",
        content: `
            Home page
        `,
        css,
    }
}