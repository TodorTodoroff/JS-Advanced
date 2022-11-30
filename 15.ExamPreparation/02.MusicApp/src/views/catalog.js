import { getAll } from '../api/data.js';
import { html } from '../lib.js'

const createCatalogTemplate = (albums) => html`
        <section id="catalogPage">
            <h1>All Albums</h1>
        ${albums.length == 0 ? html`
            <!--No albums in catalog-->
            <p>No Albums in Catalog!</p>`
            : albums.map(createCardTemaplate)
        }
        </section>`;

const createCardTemaplate = (album) => html`
            <div class="card-box">
                <img src=${album.imgUrl}>
                <div>
                    <div class="text-center">
                        <p class="name">Name: ${album.name}</p>
                        <p class="artist">Artist: ${album.artist}</p>
                        <p class="genre">Genre: ${album.genre}</p>
                        <p class="price">Price: $${album.price}</p>
                        <p class="date">Release Date: ${album.releaseDate}</p>
                    </div>
                    <div class="btn-group">
                        <a href="/details/${album._id}" id="details">Details</a>
                    </div>
                </div>
            </div>`;



export async function showCatalog(ctx) {
    const albums = await getAll();

    ctx.render(createCatalogTemplate(albums));
}