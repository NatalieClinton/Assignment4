document.addEventListener('DOMContentLoaded', function() {
  const postList = document.getElementById('postList');

  // Retrieve posts from localStorage or initialize an empty array
  let posts = JSON.parse(localStorage.getItem('posts')) || [];

  // Creates an HTML element for each post
  posts.forEach(function(post) {
    const postElement = document.createElement('div');
    postElement.innerHTML = `
      <h2>${post.title}</h2>
      <p>${post.content}</p>
      <p>Posted by: ${post.username}</p>
    `;

  // Appends the post to the postList
  postList.appendChild(postElement);

  // Adds blog post styling from CSS
  postElement.classList.add('post-with-border');

  });
});