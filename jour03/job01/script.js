$(document).ready(function () {
    $("p").hide();
    $("#hide").click(function () {
        $("html").hide();
    });

    $("#show").click(function () {
        $("p").show();
    });
});
