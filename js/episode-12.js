/*Ce programme affiche la somme des 10 premiers nombres entiers à partir de 1 */
const tabNumber = [...Array(11).keys()]; // On cree un tableau de nombre allant de 0 a 10
const sum = tabNumber.reduce((a, b) => a + b); //On calcule la somme des nombres allant de 1 a 10

console.log(`La somme des nombres allant de 1 a 10 vaut : ${sum}`);