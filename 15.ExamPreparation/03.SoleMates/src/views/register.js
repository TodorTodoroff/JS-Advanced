import { register } from '../api/user.js';
import { html } from '../lib.js'
import { createSubmitHandler } from '../util.js';
import { updateNav } from './nav.js';

const registerTemplate = (onRegister) => html`
        <section id="register">
            <div class="form" @submit=${onRegister}>
                <h2>Register</h2>
                <form class="login-form">
                    <input type="text" name="email" id="register-email" placeholder="email" />
                    <input type="password" name="password" id="register-password" placeholder="password" />
                    <input type="password" name="re-password" id="repeat-password" placeholder="repeat password" />
                    <button type="submit">login</button>
                    <p class="message">Already registered? <a href="/login">Login</a></p>
                </form>
            </div>
        </section>`;


export function showRegister(ctx){
    ctx.render(registerTemplate(createSubmitHandler(onRegister)));

    async function onRegister(data){
        if([data.email, data.password, data['re-password']].some(x => x == '')){
            return alert('All fields are required!');
        }
        if(data.password != data['re-password']){
            return alert('Passwords must match!');
        }

        await register(data.email, data.password);
        updateNav();
        ctx.page.redirect('/catalog');
    }
}