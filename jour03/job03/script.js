$(document).ready(function () {
    initializeGame();

    $('#restartButton').click(function () {
        initializeGame();
    });
});

function initializeGame() {
    $('#victoryMessage').hide();
    const taquin = $('#taquin');
    taquin.empty();
    let tiles = [];
    for (let i = 1; i <= 8; i++) {
        tiles.push($(`<div class="tile"><img id="img${i}" src="assets/logo${i}.PNG" alt="Image ${i}"></div>`));
    }
    tiles.push($('<div class="tile empty"></div>'));
    tiles.sort(() => Math.random() - 0.5);

    tiles.forEach(tile => {
        taquin.append(tile);
    });

    $('.tile:not(.empty)').click(function () {
        moveTile(this);
    });
}

function moveTile(tile) {
    const emptyTile = $('.empty');
    const tileIndex = $(tile).index();
    const emptyIndex = $(emptyTile).index();

    const isAdjacent = (Math.abs(tileIndex - emptyIndex) === 1 && Math.floor(tileIndex / 3) === Math.floor(emptyIndex / 3)) ||
        (Math.abs(tileIndex - emptyIndex) === 3 && Math.floor(tileIndex / 3) !== Math.floor(emptyIndex / 3));

    if (isAdjacent) {
        const tileImg = $(tile).children('img').detach();
        $(emptyTile).append(tileImg);
        $(emptyTile).removeClass('empty');
        $(tile).addClass('empty');

        $('.tile:not(.empty)').off('click').click(function () {
            moveTile(this);
        });

        checkVictory();
    }
}

function checkVictory() {
    const expectedOrder = '14725836';
    const currentOrder = $('#taquin .tile:not(.empty) img').toArray().map(img => $(img).attr('src').match(/logo(\d)\.PNG$/)[1]).join('');

    const emptyIndex = $('.empty').index();
    const isBottomRight = emptyIndex === 8;

    if (currentOrder === expectedOrder && isBottomRight) {
        $('#victoryMessage').text('Bravo ! Vous avez gagné.').css('color', 'green').show();
    }
}
