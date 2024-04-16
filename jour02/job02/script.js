function showhide() {
    var article = document.querySelector("article");

    if (article.style.display === "block" || article.style.display === "") {
        article.style.display = "none";
    } else {
        article.style.display = "block";
    }
}