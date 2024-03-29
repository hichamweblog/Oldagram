import { posts } from '/src/js/posts.js';
function init() {
	const postsEl = document.querySelector('.posts');
	posts.forEach((post) => {
		const postEl = document.createElement('article');
		postEl.classList.add('post');

		postEl.innerHTML = `
      <header class="post__header">
        <img src="${post.avatar}" alt="${post.name}" class="post__user-avatar">
        <div class="post__user-info">
          <h2 class="user-full-name">${post.name}</h2>
          <p class="user-location">${post.location}</p>
        </div>
      </header>
      <img src="${post.post}" alt="${post.name}" class="post__image">
      <div class="post__interactions">
        <div class="interactions-icons">
          <img src="/icon-heart.png" alt="icon" class="icon">
          <img src="/icon-comment.png" alt="icon" class="icon">
          <img src="/icon-dm.png" alt="icon" class="icon">
        </div>
        <p class="likes-count">${post.likes} likes</p>
        <p class="caption"><span class="user-name">${post.username}</span> ${post.comment}</p>
      </div>
    `;
		postsEl.appendChild(postEl);
	});
}

// Call the init function to populate the posts
init();
