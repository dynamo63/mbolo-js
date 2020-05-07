/**
 * Demande à l’utilisateur trois nombres et affiche la moyenne de ces nombres en alerte
 */
export default function  average () {
    // On demande 3 nombre a l'utilisateur
    const firstNum = parseInt(prompt('Saisissez le premier nombre: '))
    const secoondNum = parseInt(prompt('Saisissez le deuxieme nombre: '))
    const thirdNum = parseInt(prompt('Saisissez le troisieme nombre: '))

    // On affiche la moyenne 
    alert(`La moyenne de ses nombres est : ${(firstNum + secoondNum + thirdNum) / 3}`)
}