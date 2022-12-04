window.addEventListener("load", solve);

function solve() {
  document.getElementById("form-btn").addEventListener("click", createInProgressTask);
  document.getElementById("clear-btn").addEventListener("click", clearCompletedTasks);

  const inProgressSection = document.getElementById("in-progress");
  const inProgressCounter = document.getElementById("progress-count");
  const finishedSection = document.getElementById("finished");

  const firstName = document.getElementById("first-name");
  const lastName = document.getElementById("last-name");
  const age = document.getElementById("age");
  const gender = document.getElementById("genderSelect");
  const description = document.getElementById("task");
  let counter = 0;


  function createInProgressTask() {
    const firstNameValue = firstName.value;
    const lastNameValue = lastName.value;
    const genderValue = gender.value;
    const ageValue = Number(age.value);
    const descriptionValue = description.value;

    if (!firstNameValue || !lastNameValue || !ageValue || !descriptionValue || !genderValue) {
      return;
    }

    const liElement = createHTMLTemplate(firstNameValue, lastNameValue, genderValue, ageValue, descriptionValue);

    inProgressSection.appendChild(liElement);
    counter++;
    inProgressCounter.textContent = counter.toString();

    clearInputFields();

  }


  function clearInputFields() {
    firstName.value = "";
    lastName.value = "";
    gender.value = "Male";
    age.value = "";
    description.value = "";
  }


  function createHTMLTemplate(firstN, lastN, gender, age, desc) {

    const li = document.createElement("li");
    li.classList.add("each-line");

    const article = document.createElement("article");

    const h4FullName = document.createElement("h4");
    h4FullName.textContent = `${firstN} ${lastN}`;

    const pGenderAge = document.createElement("p");
    pGenderAge.textContent = `${gender}, ${age}`

    const pDescription = document.createElement("p");
    pDescription.textContent = `Dish description: ${desc}`;

    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-btn");
    editBtn.textContent = "Edit";
    editBtn.addEventListener("click", editTask);

    const completeBtn = document.createElement("button");
    completeBtn.classList.add("complete-btn");
    completeBtn.textContent = "Mark as complete";
    completeBtn.addEventListener("click", completeTask);

    
    article.appendChild(h4FullName);
    article.appendChild(pGenderAge);
    article.appendChild(pDescription);
  
    li.appendChild(article);
    li.appendChild(editBtn);
    li.appendChild(completeBtn);
    
    return li;
  }


  function completeTask(e) {
    const container = e.target.parentElement;
    Array.from(container.querySelectorAll("button")).forEach(b => b.remove());

    finishedSection.appendChild(container);

    counter--;
    inProgressCounter.textContent = counter.toString();
  }


  function editTask(e) {
    const currentTask = e.target.parentElement;
    const fullName = currentTask.children[0].children[0].textContent.split(" ");
    const genderAge = currentTask.children[0].children[1].textContent.split(", ");

    firstName.value = fullName[0];
    lastName.value = fullName[1];
    gender.value = genderAge[0];
    age.value = genderAge[1];
    description.value = currentTask.children[0].children[2].textContent.split(": ")[1];

    currentTask.remove();

    counter--;
    inProgressCounter.textContent = counter.toString();
  }


  function clearCompletedTasks(e){
    Array.from(finishedSection.children).forEach(t => t.remove());
  }

}


