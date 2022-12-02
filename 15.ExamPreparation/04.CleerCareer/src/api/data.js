import { del, get, post, put } from "./api.js";

export async function getAll(){
    return get('/data/offers?sortBy=_createdOn%20desc');
}

export async function createOffer(data){
    return post('/data/offers', data);
}

export async function getById(id){
    return get('/data/offers/' + id);
}

export async function deleteById(id){
    return del('/data/offers/' + id);
}

export async function editById(id, data){
    return put('/data/offers/' + id, data);
}

export async function applyById(id){
    return post('/data/applications', id);
}

export async function getAllApplicationCount(offerId){
    return get(`/data/applications?where=offerId%3D%22${offerId}%22&distinct=_ownerId&count`);
}

export async function getCountCurrentUser(offerId, userId){
    return get(`/data/applications?where=offerId%3D%22${offerId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
}