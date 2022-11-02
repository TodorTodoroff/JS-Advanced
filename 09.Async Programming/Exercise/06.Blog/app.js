function attachEvents() {
    document
      .getElementById("btnLoadPosts")
      .addEventListener("click", createOptions);
    document.getElementById("btnViewPost").addEventListener("click", getComments);
    let select = document.getElementById("posts");
    let postTitle = document.getElementById("post-title");
    let postBody = document.getElementById("post-body");
    let postCommentUl = document.getElementById("post-comments");
   
    async function createOptions() {
      let postRes = await fetch("http://localhost:3030/jsonstore/blog/posts");
      let postData = await postRes.json();
      let entries = Object.entries(postData);
   
      const firstItem = entries[0];
   
      postTitle.textContent = firstItem[1].title;
      postBody.textContent = firstItem[1].body;
      let commRes = await fetch("http://localhost:3030/jsonstore/blog/comments");
      let commData = await commRes.json();
      let commEntries = Object.entries(commData);
   
      select.innerHTML = "";
      postCommentUl.innerHTML = "";
   
      entries.forEach((curr, i) => {
        let currOption = document.createElement("option");
        currOption.setAttribute("value", curr[0]);
        currOption.textContent = curr[1].title;
        select.appendChild(currOption);
      });
   
      commEntries.forEach((element) => {
        if (element[1].postId === firstItem[0]) {
          let li = document.createElement("li");
          li.textContent = element[1].text;
          postCommentUl.appendChild(li);
        }
      });
    }
    async function getComments() {
      postCommentUl.innerHTML = "";
      let currId = select.value;
      let res = await fetch(
        `http://localhost:3030/jsonstore/blog/posts/${currId}`
      );
      let data = await res.json();
   
      postTitle.textContent = data[1].title;
      postBody.textContent = data[1].body;
      let commRes = await fetch("http://localhost:3030/jsonstore/blog/comments");
      let commData = await commRes.json();
      let commEntries = Object.entries(commData);
      commEntries.forEach((element) => {
        if (element[1].postId === currId) {
          let li = document.createElement("li");
          li.textContent = element[1].text;
          postCommentUl.appendChild(li);
        }
      });
    }
  }
  attachEvents();