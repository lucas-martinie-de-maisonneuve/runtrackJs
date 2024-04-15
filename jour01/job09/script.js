function tri(numbers = [], order) {
    if (order === "asc") {
        numbers = numbers.sort((a, b) => a - b);
    } 

    else if (order === "desc") {
        numbers = numbers.sort((a, b) => b - a);
    }
    
    console.log(numbers); 
    return numbers; 
}

// Exemple d'utilisation
tri([80, 9, 70, 40, 1, 5, 200], "asc");
tri([80, 9, 70, 40, 1, 5, 200], "desc");
