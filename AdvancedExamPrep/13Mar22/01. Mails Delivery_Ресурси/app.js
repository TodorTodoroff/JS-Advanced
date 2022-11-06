function solve() {
    // EventsListeners section
    document.getElementById("add").addEventListener("click", createMail);
    document.getElementById("reset").addEventListener("click", resetFields);

    // Get elements
    const recepientNameElement = document.getElementById("recipientName");
    const titleElement = document.getElementById("title");
    const messageElement = document.getElementById("message");
    const allMailsSection = document.getElementById("list");
    const sentMailSection = document.querySelector('[class="sent-list"]');
    const deletedMailSection = document.querySelector('[class="delete-list"]');


    function createMail(e) {
        e.preventDefault();
        const recepientName = recepientNameElement.value;
        const title = titleElement.value;
        const message = messageElement.value;

        if (!recepientName || !title || !message) {
            return;
        }

        const mailContainer = createHTMLTemplate(recepientName, title, message);
        allMailsSection.appendChild(mailContainer);
        resetFields(e);


    }

    function resetFields(e) {
        e.preventDefault();
        recepientNameElement.value = "";
        titleElement.value = "";
        messageElement.value = ""
    }

    function createHTMLTemplate(recepient, title, message) {
        const liElement = document.createElement("li");

        const h4TitleElement = document.createElement("h4");
        h4TitleElement.textContent = `Title: ${title}`

        const h4RecepientElement = document.createElement("h4");
        h4RecepientElement.textContent = `Recipient Name: ${recepient}`;

        const spanElement = document.createElement("span");
        spanElement.textContent = message;

        const divElement = document.createElement("div");
        divElement.id = "list-action";

        const sendBtn = document.createElement("button");
        sendBtn.id = "send";
        sendBtn.textContent = "Send";
        sendBtn.type = "submit";
        sendBtn.addEventListener("click", sendMail);

        const deleteBtn = document.createElement("button");
        deleteBtn.id = "delete";
        deleteBtn.type = "submit";
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", deleteMail);

        divElement.appendChild(sendBtn);
        divElement.appendChild(deleteBtn);

        liElement.appendChild(h4TitleElement);
        liElement.appendChild(h4RecepientElement);
        liElement.appendChild(spanElement);
        liElement.appendChild(divElement);

        return liElement;
    }

    function deleteMail(e) {
        const currentMail = e.target.parentElement.parentElement;
        const btnDiv = e.target.parentElement;

        if (currentMail.children[0].textContent.substring(0, 3) == "To:") {
            // comes from sent email section
            const li = btnDiv.parentElement;
            li.children[2].remove();
            deletedMailSection.appendChild(li);
            
        } else if (currentMail.children[0].textContent.substring(0, 6) == "Title:") {
            // comes from list emails section
            const li = createSentMailHTMLTemplate(currentMail, e.target);
            li.children[2].remove();
            deletedMailSection.appendChild(li);
            
        }
        currentMail.remove();
    }


    function sendMail(e) {
        const currentMail = e.target.parentElement.parentElement;
        const deleteBtn = e.target.parentElement.children[1];

        const container = createSentMailHTMLTemplate(currentMail, deleteBtn);
        sentMailSection.appendChild(container);

        currentMail.remove();

    }

    function createSentMailHTMLTemplate(currentMail, deleteBtn) {
        const liElement = document.createElement("li");
        const spanToElement = document.createElement("span");
        spanToElement.textContent = `To: ${currentMail.children[1].textContent.split(": ")[1]}`;
        const spanTitleElement = document.createElement("span");
        spanTitleElement.textContent = currentMail.children[0].textContent;
        const divBtnElement = document.createElement("div");
        divBtnElement.classList.add("btn");
        divBtnElement.appendChild(deleteBtn);
        liElement.appendChild(spanToElement);
        liElement.appendChild(spanTitleElement);
        liElement.appendChild(divBtnElement);

        return liElement;
    }
}
solve()