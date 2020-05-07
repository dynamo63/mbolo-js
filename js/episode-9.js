/**
 * Demande la moyenne d’un élève et affiche sa mention (Passable, Assez-Bien, Bien, Très bien, Excellent)
 */
export default function getMention () {
    // On demande la note de l'eleve 
    const message = "Cet programme determine votre mention en fonction de votre moyenne\n";
    const note = parseFloat(prompt(`${message}Quel est votre moyenne ?`));

    // Si elle est comprise entre 10 et 20, on indique sa mention
    if (note >= 10 && note <= 20) {
        if (note < 12) {
            alert('Passable');
        } else {
            if (note < 15) {
                alert('Assez Bien!!');
            } else {
                if (note < 18) {
                    alert('Bien');
                } else {
                    if (note < 20) {
                        alert('Tres Bien');
                    } else {
                        alert('Excellent !!\nVous etes un champion !!');
                    }
                }
            }
        }
    } else {
        alert('Aucune mention pour cette note! ');
    }
}