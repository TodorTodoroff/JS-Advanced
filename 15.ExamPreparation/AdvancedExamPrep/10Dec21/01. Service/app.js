window.addEventListener("load", solve);

function solve() {

    let receivedSection = document.getElementById("received-orders");
    let completedSection = document.getElementById("completed-orders");

    document.querySelector("button[type='submit']").addEventListener("click", onSubmit);
    document.querySelector(".clear-btn").addEventListener("click", (e) => {
        Array.from(completedSection.children).forEach(x => x.classList.value == 'container' ? x.remove() : "");
    });

    let product = document.getElementById("type-product");
    let description = document.getElementById("description");
    let client = document.getElementById("client-name");
    let phone = document.getElementById("client-phone");


    function onSubmit(e) {
        e.preventDefault();
        let [productV, descriptionV, clientV, phoneV] = [product.value, description.value, client.value, phone.value];

        if (!descriptionV || !clientV || !phoneV || (productV != 'Phone' && productV != 'Computer')) {
            return;
        }

        createOrder(descriptionV, clientV, phoneV, productV);
        clearFields();

    }

    function createOrder(desc, client, phone, product) {
        let div = createHTMLElements("div");
        div.classList.add("container");

        createHTMLElements("h2", `Product type for repair: ${product}`, div);
        createHTMLElements("h3", `Client information: ${client}, ${phone}`, div);
        createHTMLElements("h4", `Description of the problem: ${desc}`, div);

        let startBtn = createHTMLElements("button", "Start repair", div);
        startBtn.classList.add("start-btn");
        startBtn.addEventListener("click", () => {
            startBtn.disabled = true;
            finishBtn.disabled = false;
        });

        let finishBtn = createHTMLElements("button", "Finish repair", div);
        finishBtn.classList.add("finish-btn");
        finishBtn.disabled = true;
        finishBtn.addEventListener("click", onFinish);

        receivedSection.appendChild(div);
    }

    function onFinish(e) {
        let container = e.target.parentElement;
        Array.from(container.getElementsByTagName("button")).forEach(x => x.remove());
        completedSection.appendChild(container);
    }


    function createHTMLElements(type, text, parent) {
        let el = document.createElement(type);

        if (text != null && text != undefined) {
            el.textContent = text;
        }

        if (parent != undefined && parent != null) {
            parent.appendChild(el);
        }
        return el;
    }

    function clearFields() {
        product.value = '';
        description.value = '';
        client.value = '';
        phone.value = '';
    }

}