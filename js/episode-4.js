// On initialise nos 2 variables
let x = 12;
let y = 24;

// Affichage des valeurs du debut
console.log(`Debut: x = ${x} et y = ${y}`);
[x, y] = [y, x]; // echange des valeurs
console.log(`Fin: x = ${x} et y = ${y}`); 