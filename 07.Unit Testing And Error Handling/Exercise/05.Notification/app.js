function notify(message) {
  let divContent = document.getElementById("notification");
  divContent.innerText = message;
  let currentDisplayState = divContent.style.display;
  divContent.style.display = "block";
  divContent.addEventListener("click", toggleDisplayStyle);

  function toggleDisplayStyle(e) {
    let currentDisplayState = e.target.style.display;

    e.target.style.display = "none";
  };

}