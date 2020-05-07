/**
 * Demande l'âge de l’utilisateur et affiche : Vous êtes mineur ou Vous êtes majeur
 */
export default function majorOrMinor () {
    const age = parseInt(prompt('Quel age avez vous ?'))
    if (age >= 18) { //Si son age est superieur ou egal a 18
        alert('Vous êtes majeur')
    } else {
        alert('Vous êtes mineur')
    }
}