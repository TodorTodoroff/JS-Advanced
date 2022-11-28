const host = "http://localhost:3030/";

async function request(url, options) {
    try {
        const response = await fetch(host + url, options);
        if (!response) {
            const error = await response.json();
            throw new Error(err.message);
        }
        try {
            const data = await response.json();
            return data;
        } catch (error) {
            alert(error.message);
            return error;
        }

    } catch (error) {
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
    
    if(user){
        const token = user.accessToken;
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