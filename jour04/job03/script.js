async function filtrerPokemon() {
    const id = document.getElementById('id').value;
    const nom = document.getElementById('nom').value;
    const type = document.getElementById('type').value;

    const response = await fetch('pokemon.json');
        const data = await response.json();

        const filteredData = data.filter(pokemon => {
            if (id && pokemon.id != id) return false;
            if (nom && pokemon.name.french.toLowerCase() !== nom.toLowerCase()) return false;
            if (type && (!pokemon.type || !pokemon.type.includes(type))) return false;
            return true;
        });

        afficherResultat(filteredData);
}

function afficherResultat(data) {
    const resultat = document.getElementById('result');
    resultat.innerHTML = '';

    const ul = document.createElement('ul');
    data.forEach(pokemon => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="titre">ID:</span> ${pokemon.id}, 
            <span class="titre">Nom:</span> ${pokemon.name.french}, 
            <span class="titre">Types:</span> ${pokemon.type}
        `;
        ul.appendChild(li);
    });
    resultat.appendChild(ul);
}