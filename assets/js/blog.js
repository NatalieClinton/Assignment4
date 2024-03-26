document.addEventListener('DOMContentLoaded', function() {
    const postList = document.getElementById('postList');
  
    let posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts.forEach(function(post) {
      const postElement = document.createElement('div');
      postElement.innerHTML = `
        <h2>${post.title}</h2>
        <p><strong>Author:</strong> ${post.username}</p>
        <p>${post.content}</p>
      `;
      postList.appendChild(postElement);
    });
  });
  