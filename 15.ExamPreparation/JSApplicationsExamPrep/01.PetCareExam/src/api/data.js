import { del, get, post, put } from "./api.js";

export async function getAll() {
    return get('/data/pets?sortBy=_createdOn%20desc&distinct=name');
}


export async function getById(id) {
    return get('/data/pets/' + id);
}

export async function deleteById(id) {
    return del('/data/pets/' + id);
}

export async function editPet(id, {name, breed, age, weight, image}){
    return put('/data/pets/' + id, {name, breed, age, weight, image});
}

export async function createPet( {name, breed, age, weight, image}){
    return post('/data/pets',  {name, breed, age, weight, image});
}