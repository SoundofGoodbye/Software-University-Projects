isLiked = true;
function likeButton() {
    var likeButton = document.getElementById("likeButton");
    if(isLiked) {
        likeButton.innerHTML = "Unlike";
    } else {
        likeButton.innerHTML = "Like";
    }
    isLiked = !isLiked;
}