/**
 * Demande le nom de l’utilisateur et son sexe et affiche Bonjour monsieur <nom> ou Bonjour madame <nom>.
 * Où <nom> est le nom saisi par l’utilisateur
 */
export default function greet () {
    // 1: On demande le nom et son sexe
    const name = prompt("Comment vous appelez vous ?");
    let sexe = prompt('Quel est votre sexe (H ou F)');

    // On cree le message informatif et un expression reguliere
    const message = "Le sexe saisi n'est pas valide,Tapez soit H ou F\n";
    const regex = /^(H|F)$/;

    // 2: Verification : si le sexe donne est different de H ou F ,on l'informe et on lui demande de saisir a nouveau
    while (!regex.test(sexe)) {
        sexe = prompt(`${message}Votre Genre ?`);
    }

    // 3: Si le sexe vaut H alors c'est monsieur sinon c'est madame
    const gender = sexe === 'H' ? 'monsieur':'madame';
    alert(`Bonjour ${gender} ${name}`)
}