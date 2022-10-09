function validate() {
    let input = document.getElementById("email");
    input.addEventListener("change", onChange);

    function onChange(e) {
        let email = e.target.value;
        let validEmailPattern = /^[a-z]+@[a-z]+\.[a-z]+/g;
        if (validEmailPattern.test(email)) {
            e.target.classList.remove("error");
        } else {
            e.target.classList.add("error");
        }
    }
}