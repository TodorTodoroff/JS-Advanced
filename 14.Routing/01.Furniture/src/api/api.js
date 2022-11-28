const host = "http://localhost:3030/";

async function request(url, options) {
    try {
        const response = await fetch(url);
        if (!response) {
            const error = await response.json();
            throw new Error(err.message);
        }
        try {
            const data = response.json();
            return data;
        } catch (error) {
            alert(error.message);
            return error;
        }

    } catch (e) {
        alert(error.message);
        return error;
    }
}


function getOption(method, body){
    const options = {
        method,
        headers: {}
    };

    const user = JSON.parse(localStorage.getItem("userData"));
    const token = user.token;

    if(token){
        options.headers["X-Authorization"] = token;
    }

    if(body){
        options.headers["Content-type"] = "Application/json";
        options.body = JSON.stringify(body);
    }

    return options;
}



export async function get(url){
    return await request( url , getOption("GET"));
}

export async function post(url, data){
    return await request( url , getOption("POST", data));
}


export async function put(url, data){
    return await request( url , getOption("PUT", data));
}


export async function del(url){
    return await request( url , getOption("DELETE"));
}