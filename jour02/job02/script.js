var article = null;

function showhide() {
    if (!article) {
        article = document.querySelector("article");
        if (!article) return;
    }
    if (article.parentNode === document.body) {
        document.body.removeChild(article);
    } else {
        document.body.appendChild(article);
    }
}
