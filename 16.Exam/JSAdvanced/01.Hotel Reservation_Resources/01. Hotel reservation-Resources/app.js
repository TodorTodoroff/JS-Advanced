window.addEventListener('load', solve);

function solve() {
    let reservationSection = document.querySelector(".info-list");
    let confrmSection = document.querySelector(".confirm-list");
    let verificationSection = document.getElementById("verification");

    let fname = document.getElementById("first-name");
    let lname = document.getElementById("last-name");
    let dateIn = document.getElementById("date-in");
    let dateOut = document.getElementById("date-out");
    let guests = document.getElementById("people-count");

    let nextBtn = document.getElementById("next-btn");
    nextBtn.addEventListener("click", onSubmit);

    function onSubmit(e) {
        e.preventDefault();


        if (!fname.value || !lname.value || !dateIn.value || !dateOut.value || !guests.value) {
            return;
        }

        let dateInD = new Date(dateIn.value);
        let deteOutD = new Date(dateOut.value);

        if (dateInD.getTime() > deteOutD.getTime()) {
            return;
        }


        createReservation(fname.value, lname.value, dateIn.value, dateOut.value, guests.value);
        clearFields();

    }

    function createReservation(fnameV, lnameV, dateInV, dateOutV, guestsV) {
        let li = createHTMLElelements("li");
        li.classList.add("reservation-content");

        let article = createHTMLElelements("article");

        createHTMLElelements("h3", `Name: ${fnameV} ${lnameV}`, article);
        createHTMLElelements("p", `From date: ${dateInV}`, article);
        createHTMLElelements("p", `To date: ${dateOutV}`, article);
        createHTMLElelements("p", `For ${guestsV} people`, article);

        li.appendChild(article);

        let editBtn = createHTMLElelements("button", "Edit", li);
        editBtn.classList.add("edit-btn");
        editBtn.addEventListener("click", onEdit);

        let contBtn = createHTMLElelements("button", "Continue", li);
        contBtn.classList.add("continue-btn");
        contBtn.addEventListener("click", onContinue);

        reservationSection.appendChild(li);
        nextBtn.disabled = true;
    }

    function onEdit(e) {
        nextBtn.disabled = false;
        let infoL = e.target.parentElement;
        let articleChildren = infoL.children[0].children;
        let names = articleChildren[0].textContent.split(" ");

        fname.value = names[1];
        lname.value = names[2];
        dateIn.value = articleChildren[1].textContent.split(": ")[1];
        dateOut.value = articleChildren[2].textContent.split(": ")[1];
        guests.value = articleChildren[3].textContent.split(" ")[1];

        infoL.remove();
    }

    function onContinue(e) {
        let reserv = e.target.parentElement;
        reserv.children[2].remove();
        reserv.children[1].remove();

        let confirmBtn = createHTMLElelements("button", "Confirm", reserv);
        confirmBtn.classList.add("confirm-btn");
        confirmBtn.addEventListener("click", onConfirm);

        let canclBtn = createHTMLElelements("button", "Cancel", reserv);
        canclBtn.classList.add("cancel-btn");
        canclBtn.addEventListener("click", onCancel);

        confrmSection.appendChild(reserv);

    }

    function onConfirm(e) {
        e.target.parentElement.remove();
        nextBtn.disabled = false;
        verificationSection.classList.add("reservation-confirmed");
        verificationSection.textContent = "Confirmed.";
    }

    function onCancel(e) {
        e.target.parentElement.remove();
        nextBtn.disabled = false;
        verificationSection.classList.add("reservation-cancelled");
        verificationSection.textContent = "Cancelled.";
    }

    function createHTMLElelements(type, content, parent) {
        let el = document.createElement(type);

        if (content != undefined && content != null) {
            el.textContent = content;
        }

        if (parent != undefined && parent != null) {
            parent.appendChild(el);
        }

        return el;
    }

    function clearFields() {
        fname.value = "";
        lname.value = "";
        dateIn.value = "";
        dateOut.value = "";
        guests.value = "";
    }

}





