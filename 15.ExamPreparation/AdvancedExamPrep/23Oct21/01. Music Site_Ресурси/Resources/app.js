window.addEventListener('load', solve);

function solve() {
    document.getElementById("add-btn").addEventListener('click', onSubmit);
    const genre = document.getElementById('genre');
    const name = document.getElementById('name');
    const author = document.getElementById('author');
    const date = document.getElementById('date');

    const allHits = document.querySelector('.all-hits-container');
    const saved = document.querySelector('.saved-container');
    const likes = document.querySelector('.likes p');


    function onSubmit(e) {
        e.preventDefault();

        if ([author.value, date.value, genre.value, name.value].some(x => x != '')) {
            addSong(author.value, date.value, genre.value, name.value);
            clearFormData();
        }
    }

    function addSong(author, date, genre, name) {
        const div = createHTMLElements('div', null, null, 'hits-info');
        const img = createHTMLElements('img');
        img.setAttribute('src', './static/img/img.png');
        div.appendChild(img);

        createHTMLElements('h2', `Genre: ${genre}`, div);
        createHTMLElements('h2', `Name: ${name}`, div);
        createHTMLElements('h2', `Author: ${author}`, div);
        createHTMLElements('h3', `Date: ${date}`, div);
        createHTMLElements('button', 'Save song', div, 'save-btn');
        createHTMLElements('button', 'Like song', div, 'like-btn');
        createHTMLElements('button', 'Delete', div, 'delete-btn');

        allHits.appendChild(div);

        document.querySelector(".save-btn").addEventListener("click", onSave);
        document.querySelector('.like-btn').addEventListener('click', onLike);
        document.querySelector('.delete-btn').addEventListener('click', onDelete);
    }

    function onSave(e) {
        e.preventDefault();
        const el = e.target.parentElement;
        Array.from(el.querySelectorAll('button')).forEach(x =>
            x.textContent != 'Delete' ? x.remove() : '');
        saved.appendChild(el);
    }

    function onLike(e) {
        e.preventDefault();
        let likeText = likes.textContent.split(": ");
        likeText[1] = Number(likeText[1]) + 1;
        likes.textContent = likeText.join(': ');
        e.target.parentElement.querySelector('.like-btn').disabled = true;
    }

    function onDelete(e) {
        e.preventDefault();
        e.target.parentElement.remove();
    }

    function createHTMLElements(type, data, parent, clasz) {
        let el = document.createElement(type);

        if (data != undefined && data != null) {
            el.textContent = data;
        }
        if (clasz != undefined && clasz != null) {
            el.classList.add(clasz);
        }
        if (parent != undefined && parent != null) {
            parent.appendChild(el);
        }

        return el;
    }

    function clearFormData() {
        genre.value = '';
        name.value = '';
        author.value = '';
        date.value = '';
    }
}