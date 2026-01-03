const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

const feed = document.getElementById("feed");

function renderPosts() {
  let feedHtml = "";

  for (i = 0; i < posts.length; i++) {
    const post = posts[i];

    feedHtml += `
    <section class="post">
      <div class="post-header">
        <img src="${post.avatar}" class="avatar" alt="${post.name}">
        <div class="post-info">
            <span class="username-bold">${post.name}</span>
            <span class="location">${post.location}</span>
        </div>
      </div>

      <img src="${post.post}" class="post-image" alt="Post by "${post.name}">
      
      <div class="post-bottom>
        <div class="icons">
          <img src="images/icon-heart.png" class="icon" alt="Heart icon for liking posts"
          <img src="images/icon-comment.png" class="icon" alt="Comment icon for leaving comments on posts"
          <img src="images/icon-dm.png" class="icon" alt="Direct message icon for chatting with the author of the post"
        </div>
        <p class="likes"><span class="bold">${post.likes} likes</span></p>
        <p class="caption"><span class="bold">${post.name}</span>${post.comment}</p>
      </div>
    </section>
    `;
  }
  feed.innerHTML = feedHtml;
}

renderPosts();
