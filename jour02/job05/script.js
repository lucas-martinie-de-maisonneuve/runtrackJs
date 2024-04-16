window.addEventListener('scroll', function () {
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    const scrollTop = window.scrollY;
    const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;

    const footer = document.getElementById('footer');
    if (scrollPercentage <= 25) {
        footer.style.backgroundColor = '#ff5a00';
    } else if (scrollPercentage <= 50) {
        footer.style.backgroundColor = '#ff9a00';
    } else if (scrollPercentage <= 75) {
        footer.style.backgroundColor = '#ffce00';
    } else {
        footer.style.backgroundColor = '#f0ff00';
    }
});