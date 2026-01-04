const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
    isLiked: false,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
    isLiked: false,
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
    isLiked: false,
  },
];

const feed = document.getElementById("feed");

function renderPosts() {
  let feedHtml = "";

  for (let i = 0; i < posts.length; i++) {
    let heartIcon = posts[i].isLiked
      ? "images/icon-heart-filled.png"
      : "images/icon-heart.png";
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

      <img src="${post.post}" class="post-image like-btn" data-index="${i}" alt="Post by ${post.name}">
      
      <div class="post-bottom">
        <div class="icons">
          <button class="icon-btn"><img src="${heartIcon}" class="like-btn" data-index="${i}" alt="Heart icon"></button>
          <button class="icon-btn"><img src="images/icon-comment.png" alt="Comment icon"></button>
          <button class="icon-btn"><img src="images/icon-dm.png" alt="DM icon"></button>
        </div>
        <p class="likes" id="likes-${i}"><span class="bold">${post.likes} likes</span></p>
        <p class="caption"><span class="bold">${post.name}</span> ${post.comment}</p>
      </div>
    </section>
    `;
  }

  feed.innerHTML = feedHtml;

  posts.forEach((post, index) => {
    let isLiked = false;

    document
      .getElementById(`heart-${index}`)
      .addEventListener("click", addLikes);
    document
      .getElementById(`postImg-${index}`)
      .addEventListener("dblclick", addLikes);

    function addLikes() {
      if (isLiked) {
        posts[index].likes--;
        document.getElementById(
          `likes-${index}`
        ).innerHTML = `<span class="bold">${posts[index].likes} likes</span>`;
        isLiked = false;
        document.getElementById(`heart-${index}`).src = "images/icon-heart.png";
        return;
      }

      posts[index].likes++;
      document.getElementById(
        `likes-${index}`
      ).innerHTML = `<span class="bold">${posts[index].likes} likes</span>`;

      document.getElementById(`heart-${index}`).src =
        "images/icon-heart-filled.png";

      isLiked = true;
    }
  });
}

renderPosts();
