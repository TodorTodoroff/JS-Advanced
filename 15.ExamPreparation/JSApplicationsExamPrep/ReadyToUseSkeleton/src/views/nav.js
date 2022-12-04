import { logout } from '../api/user.js';
import { html, render, page } from '../lib.js'
import { getUserData } from '../util.js';


const nav = document.querySelector( ; // get the nav container -> usually header


const navTemplate = (hasUser) => ;

export function updateNav() {
    const user = getUserData();

    render(navTemplate(user), nav);
}

function onLogout() {
    logout();
    updateNav();
    page.redirect('/');
}