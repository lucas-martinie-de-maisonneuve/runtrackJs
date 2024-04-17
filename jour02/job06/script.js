const body = document.body;

body.classList.add('hidden');


const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

function checkKonamiCode(event) {
    const key = event.key;

    if (key === konamiSequence[konamiIndex]) {
        konamiIndex++;

        if (konamiIndex === konamiSequence.length) {
            body.classList.remove('hidden');
        }
    } else {
        konamiIndex = 0;
    }
}

document.addEventListener('keydown', checkKonamiCode);