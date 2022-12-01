import { del, get, post, put } from "./api.js";

export async function getAll() {
    return get('/data/shoes?sortBy=_createdOn%20desc');
}

export async function createShoes(data) {
    return post('/data/shoes', data);
}

export async function getById(id) {
    return get('/data/shoes/' + id);
}

export async function deleteById(id) {
    return del('/data/shoes/' + id);
}

export async function editShoes(id, data) {
    return put('/data/shoes/' + id, data);
}