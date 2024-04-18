document.addEventListener("DOMContentLoaded", function () {

    document.getElementById('button').addEventListener('click', function () {
        fetch('expression.txt')
            .then(response => response.text())
            .then(data => {
                const expression = document.createElement('p');
                expression.textContent = data;
                document.getElementById('content').appendChild(expression);
            })
    });

});