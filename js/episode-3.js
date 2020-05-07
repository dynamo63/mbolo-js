/**
 * Demande à l'utilisateur deux nombres et affiche leur somme en alerte
 */
export default function Add () {
    const firstNumber = parseInt(prompt('Saississez un nombre: ')); // On demande de saisir un nombre 
    const secondNumber = parseInt(prompt('Saisissez un second nombre: '));
    alert(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`); // On affiche la somme
}