document.getElementById("login-form").addEventListener("submit", loginHandler);
document.querySelectorAll("a").forEach(el => el.classList.remove("active"));
document.getElementById("login").classList.add("active");

function loginHandler(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const { email, password } = Object.fromEntries(formData);

    onLogin(email, password);

}

async function onLogin(email, password) {
    const url = `http://localhost:3030/users/login`;

    const body = {
        email,
        password
    };

    const header = getHeader("POST", body);
    const response = await fetch(url, header);
    const data = await response.json();

    sessionStorage.setItem("email", data.email);
    sessionStorage.setItem( "accessToken", data.accessToken);

    window.location = "./index.html";
    
    return data;
}

function getHeader(method, body) {
    return {
        method: `${method}`,
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(body)
    }
}