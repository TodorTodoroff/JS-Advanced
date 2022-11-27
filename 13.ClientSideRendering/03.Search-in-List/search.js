import { render, html } from './node_modules/lit-html/lit-html.js'
import { towns } from './towns.js'

const townsContainer = document.getElementById("towns");
const resultContainer = document.getElementById("result");
const searchButtn = document.querySelector("button");
searchButtn.addEventListener("click", search);

function searchTemplate(towns, textToSearch) {
   const ul = html`
   <ul>
      ${towns.map(town => createLiTemplate(town, textToSearch))}
   </ul>
   `;

   return ul;
}


function createLiTemplate(town, textToSearch) {
   return html`
   <li class="${textToSearch && town.includes(textToSearch) ? "active" : ""}">
      ${town}
   </li>
   `;
}

function update(textToSearch) {
   const ul = searchTemplate(towns, textToSearch);
   render(ul, townsContainer);
}

update();

function search() {
   const textToSearch = document.getElementById("searchText");
   update(textToSearch.value);
   textToSearch.value = "";
   updateCount();
}

function updateCount(){
   const count = document.querySelectorAll(".active").length;
   const match = count ? html`<p>${count} matches found</p>` : "";

   render(match, resultContainer);
}
