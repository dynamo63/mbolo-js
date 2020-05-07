/**
 * Demande le montant d’une facture et affiche le total à payer après avoir appliqué une remise de 10% 
 * Si le montant de la facture dépasse 40.000 F
 */
export default function getAmount () {
    // On demande le montant a l'utilisateur
    const message = "Ce programme affiche le montant total à payer après avoir appliqué une remise de 10% si le montant de la facture dépasse 40.000 F\n";
    let amount = parseInt(prompt(`${message}Saisissez le montant : `));

    while (amount < 0) { // On demande tant que le montant est negatif
        amount = parseInt(prompt('Saisissez un montant valide: '));
    }

    // Si c'est superieur a 40.000 , on lui fait la remise sinon montantTotal = montant
    const totalAmount = amount > 40000 ? amount - (amount / 10) : amount; 
    alert(`Le montant de votre facture est ${totalAmount}`); //On affiche le montant total
}