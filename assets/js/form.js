const blogForm = document.getElementById('blogForm');

blogForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  const usernameInput = document.getElementById('username');
  const titleInput = document.getElementById('title');
  const contentInput = document.getElementById('content');

  // Gets values from input fields
  const username = usernameInput.value;
  const title = titleInput.value;
  const content = contentInput.value;

  // Checks if any field is empty
  if (!username || !title || !content) {
    alert('Please complete all fields.');
    return;
  }

  // Create a data object for the blog post
  const postData = {
    username,
    title,
    content
  };

  // Retrieve existing posts from localStorage or initialize an empty array
  let posts = JSON.parse(localStorage.getItem('posts')) || [];

  // Adds the new post data to the posts array
  posts.push(postData);

  // Saves the updated posts array back to localStorage
  localStorage.setItem('posts', JSON.stringify(posts));

  // Resets the form fields
  blogForm.reset();

  // Alerts the user that the blog post was submitted successfully
  alert('Blog post submitted!');

  // Redirect to blog.html after submission
  window.location.href = 'blog.html';
});