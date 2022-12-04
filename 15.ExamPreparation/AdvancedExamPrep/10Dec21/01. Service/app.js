window.addEventListener("load", solve);


function solve() {
    document.querySelector("button[type='submit']").addEventListener("click", getInputData);
    document.querySelector("button[class='clear-btn']").addEventListener("click", clearCompletedOrders);

    const typeProductSection = document.getElementById("type-product");
    const descriptionSection = document.getElementById("description");
    const clientNameSection = document.getElementById("client-name");
    const phoneNumberSection = document.getElementById("client-phone");
    const receivedOrderSection = document.getElementById("received-orders");
    const completedOrderSection = document.getElementById("completed-orders");


    function getInputData(event) {
        event.preventDefault();
        const typeProductSectionValue = typeProductSection.value;
        const descriptionSectionValue = descriptionSection.value;
        const clientNameSectionValue = clientNameSection.value;
        const phoneNumberSectionValue = phoneNumberSection.value;

        if (!descriptionSectionValue ||
            !clientNameSectionValue ||
            !phoneNumberSectionValue ||
            (typeProductSectionValue !== "Computer"
                && typeProductSectionValue !== "Phone")) {
            return;
        };

        const container = createHTMLTemplate(typeProductSectionValue, descriptionSectionValue, clientNameSectionValue, phoneNumberSectionValue);
        receivedOrderSection.appendChild(container);
        clearInputFields();

    }
    function clearInputFields() {
        descriptionSection.value = "";
        clientNameSection.value = "";
        phoneNumberSection.value = "";
    }

    function createHTMLTemplate(type, description, client, phone) {

        const container = document.createElement("div");
        container.classList.add("container");

        const h2 = document.createElement("h2");
        h2.textContent = `Product type for repair: ${type}`;

        const h3 = document.createElement("h3");
        h3.textContent = `Client information: ${client}, ${phone}`;

        const h4 = document.createElement("h4");
        h4.textContent = `Description of the problem: ${description}`;

        const startBtn = document.createElement("button");
        startBtn.classList.add("start-btn");
        startBtn.textContent = "Start repair";
        startBtn.addEventListener("click", startRepair);

        const finishBtn = document.createElement("button");
        finishBtn.classList.add("finish-btn");
        finishBtn.textContent = "Finish Repair";
        finishBtn.disabled = true;
        finishBtn.addEventListener("click", finishRepair);

        container.appendChild(h2);
        container.appendChild(h3);
        container.appendChild(h4);
        container.appendChild(startBtn);
        container.appendChild(finishBtn);

        return container;
    }

    function startRepair(event) {
        const finishBtn = event.target.parentElement.children[4];
        const startBtn = event.target;

        finishBtn.disabled = false;
        startBtn.disabled = true;
    }

    function finishRepair(e) {
        const container = e.target.parentElement;
        Array.from(container.querySelectorAll("button")).forEach(button => button.remove());
        completedOrderSection.appendChild(container);

    }

    function clearCompletedOrders(e) {
        Array.from(completedOrderSection.children).forEach(task => {
            if (task.classList.value == "container") {
                task.remove();
            }
        });
    }

}

