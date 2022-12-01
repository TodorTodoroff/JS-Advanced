import {page,render} from './lib.js'
import { getUserData } from './util.js';
import { showHome } from './views/home.js';
import { showLogin } from './views/login.js';
import { updateNav } from './views/nav.js';



const main = document.getElementById('main-content');

/**
 * Create page routing
 * 
 * 

page('/', showHome);
page('/catalog', showCatalog);
page('/catalog/:id', showDetails);
page('/edit/:id', showEdit);
page('/create', showCreate);
page('/login', showLogin);
page('/register', showRegister);
 * 
 */
page(decorateContext);
page('/',  showHome);
page('/home', showHome);
page('/catalog', () => console.log("show catalog"));
page('/search', () => console.log("show search"));
page('/create', () => console.log("show create"));
page('/login', showLogin);
page('/register', () => console.log("show register"));



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



