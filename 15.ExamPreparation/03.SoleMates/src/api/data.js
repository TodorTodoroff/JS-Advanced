import { del, get, post, put } from "./api.js";

export async function getAll(){
    return get('/data/shoes?sortBy=_createdOn%20desc');
}