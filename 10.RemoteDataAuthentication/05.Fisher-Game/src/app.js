window.addEventListener("DOMContentLoaded", onLoadHTML);

document.getElementById("logout").addEventListener("click", onLogout);

async function onLogout() {
    const url = "http://localhost:3030/users/logout";

    const header = getHeader("GET", null);
    const response = await fetch(url, header);

    sessionStorage.clear();
    onLoadHTML();
}

function onLoadHTML() {
    const token = sessionStorage.getItem("accessToken");
    const greatName = document.querySelector("p.email span");

    if (token) {
        document.getElementById("guest").style.display = "none";
        document.getElementById("user").style.display = "inline-block";
        greatName.innerHTML = sessionStorage.getItem("email");
    } else {
        document.getElementById("guest").style.display = "inline-block";
        document.getElementById("user").style.display = "none";
        greatName.innerHTML = "guest";
    }
}



function getHeader(method, body) {
    const token = sessionStorage.getItem("accessToken");
    const header = {
        method: `${method}`,
        headers: {
            "Content-type": "application/json",
            "X-Authorization": token
        },
    }
    if (body) {
        header.body = JSON.stringify(body);
    }
    return header;
}