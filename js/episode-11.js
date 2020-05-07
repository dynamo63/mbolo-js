/**
 * Demande un nombre à l’utilisateur et affiche la table de multiplication de ce nombre jusqu’à 10
 */
export default function getMultiplicationTable () {
    // On demande le nombre a multiplier a l'utilisateur
    const message = "Ce programme demande un nombre et affiche sa table de multiplication jusqu’à 10\n";
    const number = parseInt(prompt(`${message}Saisissez un nombre: `));
    let multiplicationTable = ''; // On declare une variable dans laquelle on va stocke la table de multiplication

    for (let i = 0; i < 11; i++) {
        /* A chaque tour de boucle , on stocke un ligne de la table,
        Ex:Pour le premier tour et pour number = 7, on stocke: 0 x 7 = 0 */
        multiplicationTable += `${i} x ${number} = ${number * i}\n`
    }

    alert(multiplicationTable) //On affiche la table
}