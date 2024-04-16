document.addEventListener("DOMContentLoaded", function() {
    var Clics = 0;

    function addOne() {
        Clics++;
        document.getElementById("compteur").textContent = Clics;
    }

    document.getElementById("button").addEventListener("click", addOne);
});
