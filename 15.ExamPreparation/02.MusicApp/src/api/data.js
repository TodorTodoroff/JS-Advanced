import { del, get, post, put } from "./api.js";

export async function getAll() {
    return get('/data/albums?sortBy=_createdOn%20desc&distinct=name');
}

export async function getById(id) {
    return get('/data/albums/' + id);
}

export async function deleteById(id){
    return del('/data/albums/' + id);
}

export async function updateAlbum(id, {name, imgUrl, price, releaseDate, artist, genre, description} ){
    return put(`/data/albums/${id}`, {name, imgUrl, price, releaseDate, artist, genre, description});
}

export async function createAlbum(data){
    return post('/data/albums', data);
}