"use strict";

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

const DUREE_PREPARATION_HAMBURGER = 100;

async function traiter_commande(numero_commande, nombre_hamburgers) {
    //opération asynchrone simulée à l'aide de setTimeout

    const result = [];

    if (numero_commande < 10) numero_commande = "0" + numero_commande;

    let i = 0;
    let message = "Prise de commande -> ";
    while (i < nombre_hamburgers) {
        message += "💰";
        i++;
    }

    const prise_de_commande = `${hh_mm_ss_mls()} => Commande #${numero_commande} -> ${message}`;

    result.push(prise_de_commande);

    console.log(prise_de_commande);


    return new Promise((resolve) => {
        //la durée de traitement d'une commande est proportionnelle au nombre d'hamburgers commandés
        return setTimeout(() => {
            let i = 0;
            let message = "";
            while (i < nombre_hamburgers) {
                message += "🍔";
                i++;
            }

            const commande_traitee = `${hh_mm_ss_mls()} => Commande #${numero_commande} -> Commande servie -> ${message}`;

            result.push(commande_traitee);

            console.log(commande_traitee);

            resolve();

        }, nombre_hamburgers * DUREE_PREPARATION_HAMBURGER);
    });
}

async function main() {

    let i = 0;
    console.log('\n-- Traitement de commandes de façon bloquante / séquentielle (avec "await") :\n');


    while (i < 4) {
        let nombre_hamburgers = Math.floor(1 + Math.random() * 6);//nombre d'hamburgers entre 1 et 6
        await traiter_commande(`${i + 1}A`, nombre_hamburgers);
        i++;
    }

    let j = 0;
    console.log('\n-- Traitement de commandes de façon non-bloquante / parallèle (sans "await") :\n');

    while (j < 4) {
        let nombre_hamburgers = Math.floor(1 + Math.random() * 6);//nombre d'hamburgers entre 1 et 6
        traiter_commande(`${j + 1}B`, nombre_hamburgers);
        j++;
    }

}

main();
