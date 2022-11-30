/**
 *  Import Views
 */
import {page} from './lib.js'
import { getUserData } from './util.js';
import { updateNav } from './views/nav.js';


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
page('/', () => console.log('showHomeView'));
page('/home', () => console.log('showHomeView'));
page('/login', () => console.log('showLoginView'));
page('/register', () => console.log('showRegisterView'));
page('/catalog', () => console.log('showCatalogView'));
page('/create', () => console.log('showCreateView'));
page('/detail/:id', () => console.log('showDetailView'));
page('/edit/:id', () => console.log('showEditView'));


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



