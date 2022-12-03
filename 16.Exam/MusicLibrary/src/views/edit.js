import { getById, updateById } from "../api/data.js";
import { html } from "../lib.js";
import { createSubmitHandler } from "../util.js";


const editTemplate = (album, onEdit) => html`
    <section id="edit">
        <div class="form" @submit=${onEdit}>
            <h2>Edit Album</h2>
            <form class="edit-form">
                <input type="text" name="singer" id="album-singer" placeholder="Singer/Band" value=${album.singer} />
                <input type="text" name="album" id="album-album" placeholder="Album" value=${album.album} />
                <input type="text" name="imageUrl" id="album-img" placeholder="Image url" value=${album.imageUrl} />
                <input type="text" name="release" id="album-release" placeholder="Release date" value=${album.release} />
                <input type="text" name="label" id="album-label" placeholder="Label" value=${album.label} />
                <input type="text" name="sales" id="album-sales" placeholder="Sales" value=${album.sales} />
    
                <button type="submit">post</button>
            </form>
        </div>
    </section>`;


export async function showEdit(ctx) {
    const albumId = ctx.params.id;
    const album = await getById(albumId);

    ctx.render(editTemplate(album, createSubmitHandler(onEdit)));

    async function onEdit({ singer, album, imageUrl, release, label, sales }) {
        if ([singer, album, imageUrl, release, label, sales].some(x => x == '')) {
            return alert('All fields are rquired!');
        }

        await updateById(albumId, { singer, album, imageUrl, release, label, sales });
        ctx.page.redirect('/details/' + albumId);

    }
}