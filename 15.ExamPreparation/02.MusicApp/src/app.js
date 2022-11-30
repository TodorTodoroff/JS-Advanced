import {page, render} from './lib.js'
import { getUserData } from './util.js';
import { showCatalog } from './views/catalog.js';
import { showDetails } from './views/details.js';
import { showEdit } from './views/edit.js';
import { showHome } from './views/home.js';
import { showLogin } from './views/login.js';
import { updateNav } from './views/nav.js';
import { showRegister } from './views/register.js';


// get main element from index.html
const main = document.getElementById("main-content");

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
page('/', showHome);
page('/home', showHome);
page('/login', showLogin );
page('/register', showRegister);
page('/catalog', showCatalog);
page('/create', () => console.log('showCreateView'));
page('/details/:id', showDetails);
page('/edit/:id', showEdit);
page('/search', () => console.log('showSearchView'));


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



