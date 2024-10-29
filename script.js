document.addEventListener("DOMContentLoaded", () => {
    const feed = document.getElementById("feed");
    const postBtn = document.getElementById("postBtn");
    const postContent = document.getElementById("postContent");
    const addFriendBtn = document.getElementById("addFriendBtn");
    const connectionsList = document.getElementById("connectionsList");
    const notificationsList = document.getElementById("notificationsList");
  
    // Posting content to the feed
    postBtn.addEventListener("click", () => {
      const content = postContent.value.trim();
      if (content) {
        const post = document.createElement("div");
        post.className = "post";
        post.innerHTML = `<p>${content}</p>`;
        feed.appendChild(post);
        postContent.value = "";
      }
    });
  
    // Adding friend connection
    addFriendBtn.addEventListener("click", () => {
      const newFriend = document.createElement("li");
      newFriend.innerText = "New Friend";
      connectionsList.appendChild(newFriend);
  
      const notification = document.createElement("li");
      notification.innerText = "You have a new friend connection!";
      notificationsList.appendChild(notification);
    });
  });
  