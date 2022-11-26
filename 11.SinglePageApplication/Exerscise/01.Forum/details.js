
const section = document.getElementById("detailsView");
const main = document.getElementsByTagName("main")[0];

section.remove();

export async function showDetails(e) {
    let id;
    if (e.target.tagName === 'H2') {
        id = e.target.parentElement.id;
    } else {
        id = e.target.id;
    }

    const topic = loadTopic(id);
    // const comments = loadComment(id);
    // const result = topicTemplate(topic, comments); //tbd
    // section.replaceChildren(result);
    main.replaceChildren(section);
}

function topicTemplate(topic, comments){

}

async function loadTopic(id){
    const url = `http://localhost:3030/jsonstore/collections/myboard/posts/${id}`;

    const response = await fetch(url);
    const data = await response.json();

    return data;
}

