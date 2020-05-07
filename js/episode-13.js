/**
 * Retourne un nombre aleartoirement compris entre min et max inclus
 * @param {Number} min - valeur minimale
 * @param {Number} max - valeur maximale
 * @returns {Number} - nombre aleartoire
 */
function getRandomInt (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Demande sans cesse à l'utilisateur de renseigner la bonne réponse d’une opération
 * aleartoire
 */
export default function getRandomArithmetic () {
    const message = "Renseigner la bonne réponse\n";
    const tabOperator = ['*','+','-']; // On cree un tableau d'operateur 

    // On choisit aleartoirement 2 nombres dans des intervalles differents ...
    const firstNumber = getRandomInt(0,200);
    const secondNumber = getRandomInt(1,200);

    // On cree l'operation que l'on stocke sous forme de chaine de caractere 
    const surgery = `${firstNumber} ${tabOperator[getRandomInt(0,2)]} ${secondNumber}`;

    // On evalue le code (l'operation) et on la reponse
    const response = eval(surgery);

    // On demande a l'utilisateur de saisir la bonne reponse ...
    let responseUser = parseInt(prompt(`${message}Combien vaut ${surgery} ?`))

    while (responseUser !== response) { //Tant que la reponse est incorrecte ,on redemande
        responseUser = parseInt(prompt(`Recommencez ! Combien vaut ${surgery} ?`))
    }

    alert('Bravo !!')
}