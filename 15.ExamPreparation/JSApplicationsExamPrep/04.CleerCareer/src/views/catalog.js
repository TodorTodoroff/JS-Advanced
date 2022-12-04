import { getAll } from "../api/data.js";
import { html } from "../lib.js";


const catalogTemplate = (jobs) => html`
        <section id="dashboard">
            <h2>Job Offers</h2>
            ${jobs.length == 0 ? 
                html`
            <h2>No offers yet.</h2>`

        : jobs.map(cardTemplate)}
        </section>`;


const cardTemplate = (job) => html`
            <div class="offer">
                <img src=${job.imageUrl} alt="./images/example3.png" />
                <p>
                    <strong>Title: </strong><span class="title">${job.title}</span>
                </p>
                <p><strong>Salary:</strong><span class="salary">${job.salary}</span></p>
                <a class="details-btn" href="/details/${job._id}">Details</a>
            </div>`;


export async function showCatalog(ctx) {

    const jobs = await getAll();
    ctx.render(catalogTemplate(jobs));
}