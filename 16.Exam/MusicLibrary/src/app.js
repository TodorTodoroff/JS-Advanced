import { updateNav } from "./views/nav.js";
import { page, render } from "./lib.js";
import { getUserData } from "./util.js";
import { showHome } from "./views/home.js";
import { showLogin } from "./views/login.js";
import { showRegister } from "./views/register.js";
import { showCatalog } from "./views/catalog.js";
import { showCreate } from "./views/create.js";



const main = document.getElementById('main-container');

page(decorateContext);
page('/', showHome);
page('/home', showHome);
page('/login', showLogin);
page('/register', showRegister);
page('/catalog', showCatalog);
page('/create', showCreate);
page('/edit/:id', () => console.log('show edit'));
page('/details/:id', () => console.log('show details'));



updateNav();
page.start();

function decorateContext(ctx, next) {
    ctx.render = renderMain;
    ctx.updateNav = updateNav;

    const user = getUserData();
    if(user){
        ctx.user = user;
    }

    next();
}

function renderMain(content) {
    render(content, main);
}



