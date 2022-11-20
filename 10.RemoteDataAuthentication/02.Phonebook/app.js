function attachEvents() {
    document.getElementById("btnLoad").addEventListener("click", onLoadAllRecords);
    document.getElementById("btnCreate").addEventListener("click", handleCreateRecord);
}

function handleCreateRecord(){
    const person = document.getElementById("person").value;
    const phone = document.getElementById("phone").value;

    onCreateRecord(person,phone);
    person = "";
    phone = "";
}

function renderRecord(data) {
    const ul = document.getElementById("phonebook");
    ul.innerHTML = "";
    Object.values(data).forEach(rec => {
        const li = document.createElement("li");
        li.textContent = `${rec.person}: ${rec.phone}`;
        li.setAttribute("data-id", rec._id);

        const btn = document.createElement("button");
        btn.textContent = "Delete";
        btn.addEventListener("click", handleDelete);
        li.appendChild(btn);
        ul.appendChild(li);

    });
}

function handleDelete(e) {
    onDeleteRecord(e.target.parentElement.getAttribute("data-id"));
    e.target.parentElement.remove();
}


async function onLoadAllRecords() {
    const url = "http://localhost:3030/jsonstore/phonebook";
    const response = await fetch(url);
    const data = await response.json();

    return renderRecord(data);
}


async function onCreateRecord(person, phone) {
    const url = "http://localhost:3030/jsonstore/phonebook";
    const body = {
        person,
        phone
    };
    const header = getHeader("POST", body);
    const response = await fetch(url, header);

    const data = await response.json();
    onLoadAllRecords();
    return data;

}

async function onDeleteRecord(id) {
    const url = `http://localhost:3030/jsonstore/phonebook/${id}`;
    const headers = getHeader("DELETE", null)
    const response = await fetch(url, headers);

    const data = await response.json();

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

attachEvents();