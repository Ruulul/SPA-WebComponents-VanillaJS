import css from './about.css' assert { type: "css" };

export const render = () => {
    return {
        title: "About",
        content: `
            About
        `,
        css,
    }
}