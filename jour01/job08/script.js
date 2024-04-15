function nbrPremier(nbr) {
    for(var i = 2; i < nbr; i++)
        if(nbr%i === 0)
            return false;
    return nbr > 1;
  }

function sommeNombresPremiers(a, b){
    if (nbrPremier(a) && nbrPremier(b))
        console.log(a+b)
    
    else
        console.log("false")
        return false
    
}

sommeNombresPremiers(10, 9)
sommeNombresPremiers(11, 13)