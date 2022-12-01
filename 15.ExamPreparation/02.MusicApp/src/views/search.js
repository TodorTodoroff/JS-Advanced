import { searchAlbum } from '../api/data.js';
import { html, nothing, render } from '../lib.js'


const searchTemplate = (onSearch) => html`
        <section id="searchPage">
            <h1>Search by Name</h1>
        
            <div class="search">
                <input id="search-input" type="text" name="search" placeholder="Enter desired albums's name">
                <button @click=${onSearch} class="button-list">Search</button>
            </div>
            <h2>Results:</h2>
            <!--Show after click Search button-->
            <div class="search-result">
            </div>
        </section>`;


const resultTemplate = (albums, isLogged) => html`

                <!--If have matches-->
            ${albums.length == 0 ? html`
                <p class="no-result">No result.</p>` 
            : albums.map(x => cardTemplate(x, isLogged))}`




const cardTemplate = (album, isLogged) => html`
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
                    ${isLogged ? html`
                    <div class="btn-group">
                        <a href="/details/${album._id}" id="details">Details</a>
                    </div>` : nothing}
                </div>
            </div>`;


export function showSearch(ctx) {
    const albums = [];
    const isLogged = Boolean(ctx.user);
    ctx.render(searchTemplate(onSearch));
   
    async function onSearch(event){

        event.preventDefault();
        const albumName = event.target.parentElement.children[0].value;

        if(albumName == ''){
            return alert('Field is required!');
        }

        const albums = await searchAlbum(albumName);
        const field = document.querySelector('.search-result');
        
        render(resultTemplate(albums,isLogged), field); 
    }

}





