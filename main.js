function hh_mm_ss_mls() {
    //formate l'heure courante

    const date = new Date();
    let heures = date.getHours();
    if (heures < 10) heures = "0" + heures;

    let minutes = date.getMinutes();
    if (minutes < 10) minutes = "0" + minutes;

    let secondes = date.getSeconds();
    if (secondes < 10) secondes = "0" + secondes;

    return heures + ":" + date.getMinutes() + ":"
        + secondes + ":" + date.getMilliseconds();
}

async function traiter_commande(numero_commande, nb_hamburgers) {
    //opération asynchrone simulée à l'aide de setTimeout

    if (numero_commande < 10) numero_commande = "0" + numero_commande;

    let i = 0;
    let message = "Prise de commande -> ";
    while (i < nb_hamburgers) {
        message += "💰";
        i++;
    }

    console.log(`${hh_mm_ss_mls()} => Commande #${numero_commande} -> ${message}`);

    return new Promise((resolve) => {
        //la durée de traitement d'une commande est proportionnelle au nombre d'hamburgers commandés
        return setTimeout(() => {
            let i = 0;
            let message = "";
            while (i < nb_hamburgers) {
                message += "🍔";
                i++;
            }

            resolve(`${hh_mm_ss_mls()} => Commande #${numero_commande} -> Commande servie -> ${message}`);

        }, nb_hamburgers * 500);
    });
}

async function main() {

    let i = 0;
    console.log("-- Traitement de commandes de façon bloquante (avec 'await') :\n");

    while (i < 4) {
        let nb_hamburgers = Math.floor(1 + Math.random() * 6);//nombre d'hamburgers entre 1 et 6
        await traiter_commande(`${i + 1}A`, nb_hamburgers).then(result => console.log(result));
        i++;
    }
    console.log('\n');

    let j = 0;
    console.log("-- Traitement de commandes de façon non-bloquante (sans 'await') :\n");

    while (j < 4) {
        let nb_hamburgers = Math.floor(1 + Math.random() * 6);//nombre d'hamburgers entre 1 et 6
        traiter_commande(`${j + 1}B`, nb_hamburgers).then(result => console.log(result));
        j++;
    }
    console.log('\n');
}

main();
