let css = await fetch('pages/home.css').then(r=>r.text());

export const render = () => {
    return {
        title: "Home page",
        content: `
                <p class=row>
                    <span class=col-6>
                    This site is a small showcase, or if you prefer, toy project,
                    where I can show what I can do.
                    </span>
                </p>
                <p class=row>
                    <span class=col-6>
                    This site was made without any framework, because after a 
                    really bad year, I figured out that web frameworks have much bloat,
                    to offer stuff that we can already do with <a href=http://vanilla-js.com>VanillaJS</a>.
                    </span>
                </p>
                
        `,
        css,
    }
}