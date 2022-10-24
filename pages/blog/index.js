import index from './index.json' assert { type: "json" };
import css from './index.css' assert { type: "css" };

let { posts } = index;
for (let post of posts) {
    post.content = await fetch(
        post.path.replace('.', 
            import.meta.url.slice(0, import.meta.url.lastIndexOf('/')) //import.meta.url gives to us the path with the filename, so this slicing gives the dir
        )
    ).then(r=>r.text());
}
export const render = ({path})=>{
    let content;
    switch (path) {
        case '':
        case 'posts':
            content = `
            <ul>Blog posts:
                ${posts.map(({path, title})=>`<go-to page=${path.replace('.', 'blog')}><li>${title}</li></go-to>`).join('')}
            </ul>
            `;
            break;
        default:
            content = posts.find(p=>p.path === './' + path).content;
            content+= `<br><go-to page=blog>Back to posts</go-to>`
    }
    return {
        title: "Blog",
        content,
        css
    }
} 