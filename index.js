//==========================================
//  THE DATA (STATE)
//  Added 'isLiked' to the data so the app
//  remembers the state of every post.
//==========================================
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

// Select the main container
const feedEl = document.getElementById("feed");

//==========================================
//  THE RENDER FUNCTION
//  Draws the HTML based on the current state
//  of the 'posts' array.
//==========================================
function renderPosts() {
  // Use .map() to transform data into HTML strings, then .join() them
  feedEl.innerHTML = posts
    .map((post, index) => {
      // Determine which heart icon to show
      const heartIcon = post.isLiked
        ? "images/icon-heart-filled.png"
        : "images/icon-heart.png";

      // Use data-index on elements we need to identify later
      return `
            <section class="post">
                <div class="post-header">
                    <img src="${post.avatar}" class="avatar" alt="Avatar of ${post.name}">
                    <div class="post-info">
                        <span class="username-bold">${post.name}</span>
                        <span class="location">${post.location}</span>
                    </div>
                </div>

                <div class="post-image-container">
                    <img src="${post.post}" 
                         class="post-image" 
                         alt="Post by ${post.name}"
                         data-index="${index}"> </div>
                
                <div class="post-bottom">
                    <div class="icons">
                        <button class="icon-btn" data-like-btn="${index}" aria-label="Like post">
                            <img src="${heartIcon}" class="icon" alt="heart icon">
                        </button>
                        <button class="icon-btn" aria-label="Comment">
                            <img src="images/icon-comment.png" class="icon" alt="comment icon">
                        </button>
                        <button class="icon-btn" aria-label="Share">
                            <img src="images/icon-dm.png" class="icon" alt="share icon">
                        </button>
                    </div>
                    <p class="likes"><span class="bold">${post.likes} likes</span></p>
                    <p class="caption"><span class="bold">${post.username}</span> ${post.comment}</p>
                </div>
            </section>
        `;
    })
    .join("");
}

//==========================================
//  LOGIC & STATE MANAGEMENT
//  Updates the data when an interaction happens.
//==========================================

function handleLike(index, isFromImage) {
  const post = posts[index];

  // LOGIC: If double-clicked on image, ONLY like (don't unlike)
  if (isFromImage) {
    if (!post.isLiked) {
      post.isLiked = true;
      post.likes++;
    }
    // If already liked, do nothing
  }
  // LOGIC: If heart button clicked, TOGGLE (like/unlike)
  else {
    post.isLiked = !post.isLiked;
    if (post.isLiked) {
      post.likes++;
    } else {
      post.likes--;
    }
  }

  // Re-draw the app with new data
  renderPosts();
}

//==========================================
//  EVENT LISTENERS (Event Delegation)
//  Attach listeners to the 'feedEl' parent
//  to catch events from children.
//==========================================

// Listener 1: Single Clicks (Heart Button)
feedEl.addEventListener("click", function (e) {
  // Look for the closest element with the 'data-like-btn' attribute
  const likeBtn = e.target.closest("[data-like-btn]");

  if (likeBtn) {
    const index = likeBtn.dataset.likeBtn;
    handleLike(index, false); // false means "not from image"
  }
});

// Listener 2: Double Clicks (Post Image)
feedEl.addEventListener("dblclick", function (e) {
  // Check if the clicked element has the class 'post-image'
  if (e.target.classList.contains("post-image")) {
    const index = e.target.dataset.index;
    handleLike(index, true); // true means "is from image"
  }
});

renderPosts();
