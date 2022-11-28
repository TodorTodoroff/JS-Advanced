import {page, render} from './lib.js'


page('/', () => console.log("home"));
page('/catalog', () => console.log("catalog"));
page('/catalog/:id', () => console.log("details"));
page('/edit/:id', () => console.log("edit"));
page('/create', () => console.log("create"));
page('/login', () => console.log("login"));
page('/register', () => console.log("register"));


page.start();