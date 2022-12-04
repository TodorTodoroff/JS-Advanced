window.addEventListener("load", solve);

function solve() {
    document.getElementById("publish-btn").addEventListener("click", createPost);
    document.getElementById("clear-btn").addEventListener("click", clearPublishedList);

    let title = document.getElementById("post-title");
    let category = document.getElementById("post-category");
    let content = document.getElementById("post-content");
    let reviewSection = document.getElementById("review-list");
    let approveSection = document.getElementById("published-list");

    function createPost(event) {
        let titleValue = title.value;
        let categoryValue = category.value;
        let contentValue = content.value;

        if (!titleValue || !categoryValue || !contentValue) {
            return;
        };

        createDOMElements(titleValue, categoryValue, contentValue);
        clearFormFields();
    }

    function clearFormFields() {
        title.value = "";
        category.value = "";
        content.value = "";
    }

    function createDOMElements(title, category, content) {

        let li = document.createElement("li");
        li.classList.add("rpost");

        let article = createArticle(title, category, content);

        let editBtn = document.createElement("button");
        editBtn.classList.add("action-btn");
        editBtn.classList.add("edit");
        editBtn.textContent = "Edit";
        editBtn.addEventListener("click", editPost);

        let approveBtn = document.createElement("button");
        approveBtn.classList.add("action-btn");
        approveBtn.classList.add("approve");
        approveBtn.textContent = "Approve";
        approveBtn.addEventListener("click", approvePost);

        li.appendChild(article);
        li.appendChild(editBtn);
        li.appendChild(approveBtn);

        reviewSection.appendChild(li);

    }

    function createArticle(title, category, content) {
        let article = document.createElement("article");
        let h = document.createElement("h4");
        h.textContent = title;

        let categoryP = document.createElement("p");
        categoryP.textContent = `Category: ${category}`;

        let contentP = document.createElement("p");
        contentP.textContent = `Content: ${content}`;

        article.appendChild(h);
        article.appendChild(categoryP);
        article.appendChild(contentP);

        return article;
    }

    function editPost(e) {
        let currentPost = e.target.parentElement;
        let articleContent = currentPost.getElementsByTagName("article")[0].children;

        let titleValue = articleContent[0].textContent;
        let categoryValue = articleContent[1].textContent;
        let contentValue = articleContent[2].textContent;

        title.value = titleValue;
        category.value = categoryValue.split(": ")[1];
        content.value = contentValue.split(": ")[1];

        currentPost.remove();
    }

    function approvePost(e) {
        let currentPost = e.target.parentElement;
        Array.from(currentPost.querySelectorAll("button")).forEach(button => button.remove());
        approveSection.appendChild(currentPost);
    }

    function clearPublishedList(e) {
        Array.from(approveSection.children).forEach(c => c.remove());
    }
}


