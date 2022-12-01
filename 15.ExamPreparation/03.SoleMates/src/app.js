import {page,render} from './lib.js'
import { getUserData } from './util.js';
import { showCatalog } from './views/catalog.js';
import { showCreate } from './views/create.js';
import { showHome } from './views/home.js';
import { showLogin } from './views/login.js';
import { updateNav } from './views/nav.js';
import { showRegister } from './views/register.js';


const main = document.getElementById('main-content');

page(decorateContext);
page('/',  showHome);
page('/home', showHome);
page('/catalog', showCatalog);
page('/details/:id', () => console.log("show details"));
page('/search', () => console.log("show search"));
page('/create', showCreate);
page('/login', showLogin);
page('/register', showRegister);



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



