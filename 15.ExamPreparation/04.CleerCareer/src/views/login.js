import { login } from "../api/user.js";
import { html } from "../lib.js";
import { createSubmitHandler } from "../util.js";
import { updateNav } from "./nav.js";

const loginTemplate = (onLogin) => html`
        <section id="login">
            <div class="form" @submit=${onLogin}>
                <h2>Login</h2>
                <form class="login-form">
                    <input type="text" name="email" id="email" placeholder="email" />
                    <input type="password" name="password" id="password" placeholder="password" />
                    <button type="submit">login</button>
                    <p class="message">
                        Not registered? <a href="/register">Create an account</a>
                    </p>
                </form>
            </div>
        </section>`;


export function showLogin(ctx) {
    ctx.render(loginTemplate(createSubmitHandler(onLogin)));

    async function onLogin({ email, password }) {
        await login(email, password);
        updateNav();
        ctx.page.redirect('/catalog');
    }
}