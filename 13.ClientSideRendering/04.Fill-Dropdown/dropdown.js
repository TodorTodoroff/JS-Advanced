import { html, render } from './node_modules/lit-html/lit-html.js'
const dropDownMenuContainer = document.getElementById("menu");
const form = document.querySelector("form");
form.addEventListener("submit", onSubmit);
const url = "http://localhost:3030/jsonstore/advanced/dropdown";

obtainInitialData();
async function obtainInitialData() {
    const response = await fetch(url);
    const data = await response.json()

    const result = Object.values(data).map(x => createDropdownTemplate(x));
    render(result, dropDownMenuContainer);
}

function createDropdownTemplate(option) {
    return html`
        <option value="${option._id}">${option.text}</option>
`;
}

function onSubmit(e){
    e.preventDefault();
    const item = document.getElementById("itemText").value;
    item && addItem(item);
}

async function addItem(data) {
    const response = await fetch(url,{
        method: "POST",
        headers: {
            "Content-type": "Application/json"
        },
        body: JSON.stringify({text: data})
    })
    obtainInitialData();
    form.reset();
}

