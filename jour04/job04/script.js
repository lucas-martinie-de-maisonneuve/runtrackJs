document.addEventListener('DOMContentLoaded', function () {
    function updateTable() {
        fetch('utilisateur.json')
            .then(response => response.json())
            .then(data => {
                const table = document.querySelector('#tableau');
                table.innerHTML = '<tr><th>ID</th><th>Nom</th><th>Prénom</th><th>Email</th></tr>';

                data.forEach(user => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                <td>${user.id}</td>
                <td>${user.nom}</td>
                <td>${user.prenom}</td>
                <td>${user.email}</td>`;
                    table.appendChild(row);
                });
            })

    }

    updateTable();
    document.querySelector('#update').addEventListener('click', updateTable);
});
