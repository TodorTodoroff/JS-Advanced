import { updateNav } from "./views/nav.js";
import { page, render } from "./lib.js";
import { getUserData } from "./util.js";
import { showHome } from "./views/home.js";

const main = document.getElementById('main-element');


page(decorateContext);
page('/', showHome);
page('/home', showHome);
page('/catalog', () => console.log('show catalog'));
page('/login', () => console.log('show login'));
page('/register', () => console.log('show register'));
page('/edit/:id', () => console.log('show edit'));
page('/create', () => console.log('show create'));


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



