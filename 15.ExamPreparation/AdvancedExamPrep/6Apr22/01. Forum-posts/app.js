window.addEventListener("load", solve);

function solve() {
    let reviewEl = document.getElementById("review-list");
    let publishEl = document.getElementById("published-list");
    document.getElementById("clear-btn").addEventListener("click", onClear);

    let titleEl = document.getElementById("post-title");
    let categoryEl = document.getElementById("post-category");
    let contentEl = document.getElementById("post-content");

    document.getElementById("publish-btn").addEventListener("click", onSubmit);

    function onSubmit() {
        let titleV = titleEl.value;
        let categoryV = categoryEl.value;
        let contentV = contentEl.value;

        if (!titleV || !categoryV || !contentV) {
            return;
        };

        createHTMLElements(titleV, categoryV, contentV);
        clearFields();
    }


    function createHTMLElements(title, category, content) {
        let li = document.createElement("li");
        li.classList.add("rpost");

        let articleE = document.createElement("article");

        let h4E = document.createElement("h4");
        h4E.textContent = title;

        let pCat = document.createElement("p");
        pCat.textContent = `Category: ${category}`;

        let pCont = document.createElement("p");
        pCont.textContent = `Content: ${content}`;

        let editBtn = document.createElement("button");
        editBtn.classList.add("action-btn");
        editBtn.classList.add("edit");
        editBtn.textContent = "Edit";
        editBtn.addEventListener("click", onEdit);

        let approveBtn = document.createElement("button");
        approveBtn.classList.add("action-btn");
        approveBtn.classList.add("approve");
        approveBtn.textContent = "Approve";
        approveBtn.addEventListener("click", onApprove);

        articleE.appendChild(h4E);
        articleE.appendChild(pCat);
        articleE.appendChild(pCont);
        li.appendChild(articleE);
        li.appendChild(editBtn);
        li.appendChild(approveBtn);

        reviewEl.appendChild(li);
    }

    function onApprove(e) {
        let rpost = e.target.parentElement;
        Array.from(rpost.querySelectorAll("button")).forEach(x => x.remove());

        publishEl.appendChild(rpost);
    }

    function onEdit(e) {
        let currentPost = e.target.parentElement;
        let articleChildren = currentPost.children[0].children;

        titleEl.value = articleChildren[0].textContent;
        categoryEl.value = articleChildren[1].textContent.split(": ")[1];
        contentEl.value = articleChildren[2].textContent.split(": ")[1];

        currentPost.remove();
    }

    function onClear(e){
        Array.from(publishEl.children).forEach(x => x.remove());
    }

    function clearFields() {
        titleEl.value = "";
        categoryEl.value = "";
        contentEl.value = "";
    }
}