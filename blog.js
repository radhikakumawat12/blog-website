// Function to navigate to the blog page
function navigateToBlogs() {
    // Hide landing page and show blog page
    document.querySelector('.landing-page').style.display = 'none';
    document.querySelector('.blog-page').style.display = 'block';
}
// mmmmmm
function navigateTolandingpage() {
    // Hide landing page and show blog page
    document.querySelector('.blog-page').style.display = 'none';
    document.querySelector('.landing-page').style.display = 'block';
}


// Open modal form
function openBlogForm() {
    document.getElementById('blogFormModal').style.display = 'flex';
}

// Close modal form
function closeBlogForm() {
    document.getElementById('blogFormModal').style.display = 'none';
}

// Submit new blog
function submitBlog() {
    const title = document.getElementById('blogTitle').value;
    const imageUrl = document.getElementById('blogImage').value;
    const description = document.getElementById('blogDescription').value;

    if (title && imageUrl && description) {
        const blogContainer = document.querySelector('.blog-container');

        // Create new blog card
        const newBlog = document.createElement('div');
        newBlog.className = 'blog-card';
        newBlog.innerHTML = `
            <img src="${imageUrl}" alt="${title}">
            <h2>${title}</h2>
            <p>${description}</p>
            <button onclick="alert('Viewing full content of ${title}')">Read More</button>
            <button class="delete-btn" onclick="deleteBlog(this)">Delete</button>
        `
            
        ;

        blogContainer.appendChild(newBlog);

        // Close the modal and reset form
        closeBlogForm();
        document.getElementById('blogForm').reset();
    } else {
        alert('Please fill out all fields');
    }
}
function deleteBlog(deleteButton) {
    const blogCard = deleteButton.closest('.blog-card');
    if (blogCard) {
        blogCard.remove();  // This removes the blog card from the DOM
    }
}

        // Expand or collapse blog content
        function toggleContent(blogCard) {
            blogCard.classList.toggle('expanded'); 
            const button = blogCard.querySelector('.toggle-content'); 
            const fullContent = blogCard.querySelector('.full-content');
          
            if (blogCard.classList.contains('expanded')) {
              button.textContent = 'Show Less';
              fullContent.style.display = 'block'; 
            } else {
              button.textContent = 'Read More';
              fullContent.style.display = 'none'; 
            }
          }
