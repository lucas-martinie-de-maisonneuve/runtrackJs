$(document).ready(function () {
    var imagesClicked = 0;
    var imagesInOrder = ["arc1", "arc2", "arc3", "arc4", "arc5", "arc6"];
    var clickedImages = [];

    function melanger() {
        var images = $("#arc-en-ciel img").get();
        images.sort(function () { return 0.5 - Math.random(); });
        $("#arc-en-ciel").empty().append(images);

        $("#arc-en-ciel img").show();
        $("#spacer img").hide(); $("#win").hide(); $("#lose").hide()
        imagesClicked = 0;
        clickedImages = [];
    }

    melanger();

    $("#melanger").click(function () {
        melanger();
    });

    $("#arc-en-ciel").on("click", "img", function () {
        var nextPosition = $("#spacer img:not(:visible)").first();

        $(nextPosition).attr("src", $(this).attr("src")).show();
        $(this).hide();

        clickedImages.push($(this).attr("id"));

        imagesClicked++;

        if (imagesClicked === 6) { 
            checkOrder();
        }
    });

    function checkOrder() {
        var isCorrectOrder = true;
        for (var i = 0; i < imagesInOrder.length; i++) {
            if (imagesInOrder[i] !== clickedImages[i]) {
                isCorrectOrder = false;
                break;
            }
        }
        if (isCorrectOrder) {
            $("#win").show();
        } else {
            $("#lose").show();
        }
    }
});
