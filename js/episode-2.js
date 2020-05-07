/**
 * Cette fonction salut l'utilisateur qui renseigne son nom
 */
export default function greet () {
    const name = prompt('Quel est votre nom ?'); //On demande le nom
    alert(`Bonjour ${name}`) //On salut l'utilisateur
}