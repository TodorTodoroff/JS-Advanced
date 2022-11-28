import {render} from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';

import { catalogView } from "./view/catalog.js";
import { createView } from "./view/create.js";
import { detailsView } from "./view/details.js";
import { editView } from "./view/edit.js";
import { loginView } from "./view/login.js";
import { myFurnitureView } from "./view/myFurniture.js";
import { registerView } from "./view/register.js";

const root = document.querySelector(".container");

page("/", renderMiddleware , catalogView);
page("/catalog", renderMiddleware, catalogView);
page("/create", renderMiddleware, createView);
page("/details/:id", renderMiddleware, detailsView);
page("/edit/:id", renderMiddleware, editView);
page("/login", renderMiddleware, loginView);
page("/register", renderMiddleware, registerView);
page("/my-furniture", renderMiddleware, myFurnitureView);
page("*", catalogView);

page.start();
updateNav();

function updateNav(){
    const userSection = document.getElementById("user");
    const guestSection = document.getElementById("guest");
    const userData = JSON.parse(sessionStorage.getItem("userData"));

    if(userData){
        userSection.style.display = "inline-block";
        guestSection.style.display = "none";
    } else {
        userSection.style.display = "none";
        guestSection.style.display = "inline-block";
    }

}

function renderMiddleware(ctx, next){
    ctx.render = (content) => render(content, root);
    ctx.updateNav = updateNav;
    next();
}


