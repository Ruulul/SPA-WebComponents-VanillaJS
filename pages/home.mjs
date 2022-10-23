import css from "./home.css" assert { type: "css" };

export const render = () => {
    return {
        title: "Home page",
        content: `
            Home page
        `,
        css,
    }
}