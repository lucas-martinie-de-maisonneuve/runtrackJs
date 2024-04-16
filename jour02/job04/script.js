function bisextile(année) {
    if ((année % 4 === 0 && année % 100 !== 0) || année % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

const année1 = 2000;
const année2 = 2001;
const année3 = 2004;

console.log(année1, bisextile(année1));
console.log(année2, bisextile(année2));
console.log(année3, bisextile(année3));