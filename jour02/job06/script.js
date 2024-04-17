document.addEventListener("DOMContentLoaded", function () {

    const konami = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let i = 0;

    function konamiCode(event) {
        const key = event.key;

        if (key === konami[i]) {
            i++;

            if (i === konami.length) {
                document.body.classList.add('color');
            }
        } else {
            i = 0;
        }
    }

    document.addEventListener('keydown', konamiCode);
});
