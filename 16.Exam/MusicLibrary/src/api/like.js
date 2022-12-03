import { del, get, post, put } from "./api.js";

export async function getAllLikeCount(albumId){
    return get(`/data/likes?where=albumId%3D%22${albumId}%22&distinct=_ownerId&count`);
}

export async function likeAlbum(albumId){
    return post('/data/likes', albumId);
}

export async function getLikeCountUser(albumId, userId){
    return get(`/data/likes?where=albumId%3D%22${albumId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
}