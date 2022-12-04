function solve() {
    document.querySelector('form').addEventListener('submit', onSubmit);
    const fname = document.getElementById('fname');
    const lname = document.getElementById('lname');
    const email = document.getElementById('email');
    const birth = document.getElementById('birth');
    const position = document.getElementById('position');
    const salary = document.getElementById('salary');
    const tbody = document.getElementById('tbody');
    const budget = document.getElementById('sum');

    function onSubmit(e) {
        e.preventDefault();
        if ([fname.value, lname.value, email.value, birth.value, position.value, salary.value].some(x => x != '')) {
            addWorker();
            clearFields();
        }
    }

    function addWorker(){

        const container = createHTMLTeamplate();
    }

    function createHTMLTeamplate(){
        const tr = elementTemplate('tr');
        elementTemplate('td', fname.value, tr);
        elementTemplate('td', lname.value, tr);
        elementTemplate('td', email.value, tr);
        elementTemplate('td', birth.value, tr);
        elementTemplate('td', position.value, tr);
        elementTemplate('td', salary.value, tr);

        budget.textContent = (Number(budget.textContent) + Number(salary.value)).toFixed(2);
        
        const btnTd = elementTemplate('td');
        const firedBtn = elementTemplate('button', 'Fired');
        firedBtn.classList.add('fired');
        firedBtn.addEventListener('click', onFire);

        const editBtn = elementTemplate('button', 'Edit');
        editBtn.classList.add('edit');
        editBtn.addEventListener('click', onEdit);

        btnTd.appendChild(firedBtn);
        btnTd.appendChild(editBtn);
        tr.appendChild(btnTd);
        tbody.appendChild(tr);
    }

    function onFire(e){
        e.preventDefault();
        let record = e.target.parentElement.parentElement;
        record.remove();


        budget.textContent = (Number(budget.textContent) - Number(salary.value)).toFixed(2);
    }

    function onEdit(e){

    }

    function clearFields() {
        fname.value = '';
        lname.value = '';
        email.value = '';
        birth.value = '';
        position.value = '';
        salary.value = '';
    }

    function elementTemplate(type, content, parent) {
        const element = document.createElement(type);
        element.textContent = content;

        if (parent) {
            parent.appendChild(element);
        }
        return element;
    }

}
solve()