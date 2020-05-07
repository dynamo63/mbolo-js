/**
 *Demande à l'utilisateur un nombre et affiche son double en alerte
 */
export default function getDouble () {
    const number = parseInt(prompt('Tapez un nombre: ')) //On demande un nombre
    alert(`Son double est : ${number * 2}`) //On affiche son double
}