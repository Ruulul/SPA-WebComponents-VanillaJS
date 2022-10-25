let index = await fetch('pages/blog/index.json').then(r=>r.json());
let css = await fetch('pages/blog/index.css').then(r=>r.text());

let { posts } = index;
for (let post of posts) {
    post.content = await fetch('pages/blog/' + post.path).then(r=>r.text());
}
export const render = ({path})=>{
    let content;
    let post = posts.find(p=>p.path === path);
    switch (path) {
        case '':
        case 'posts':
            content = `
            <ul>Blog posts:
            ${posts.map(({path, title})=>
                `<go-to page=${'blog/' + path}><li>${title}</li></go-to>`).join('')
            }
            </ul>
            `;
            break;
        default:
            content = post.content;
            content+= `<br><go-to page=blog>Back to posts</go-to>`
    }
    return {
        title: post.title || "Blog",
        content,
        css
    }
} 