function hh_mm_ss_mls() {
  // formate l'heure courante

  const date = new Date();
  let heures = date.getHours();
  if (heures < 10) heures = `0${heures}`;

  let minutes = date.getMinutes();
  if (minutes < 10) minutes = `0${minutes}`;

  let secondes = date.getSeconds();
  if (secondes < 10) secondes = `0${secondes}`;

  return `${heures}:${date.getMinutes()}:${secondes}:${date.getMilliseconds()}`;
}

const DUREE_PREPARATION_HAMBURGER = 100;

async function traiter_commande(numero_commande, nombre_hamburgers) {
  // opération asynchrone simulée à l'aide de setTimeout

  const result = [];

  if (numero_commande < 10) numero_commande = `0${numero_commande}`;

  let i = 0;
  let message_prise_de_commande = "Prise de commande -> ";
  while (i < nombre_hamburgers) {
    message_prise_de_commande += "💰";
    i += 1;
  }

  const prise_de_commande = `${hh_mm_ss_mls()} => Commande #${numero_commande} -> ${message_prise_de_commande}`;

  result.push(prise_de_commande);

  if (process.env.NODE_ENV === "development") console.log(prise_de_commande);

  return new Promise((resolve) =>
    // la durée de traitement d'une commande est proportionnelle au nombre d'hamburgers commandés
    setTimeout(() => {
      let j = 0;
      let message_commande_traitee = "";
      while (j < nombre_hamburgers) {
        message_commande_traitee += "🍔";
        j += 1;
      }

      const commande_traitee = `${hh_mm_ss_mls()} => Commande #${numero_commande} -> Commande servie -> ${message_commande_traitee}`;

      result.push(commande_traitee);

      if (process.env.NODE_ENV === "development") console.log(commande_traitee);

      resolve(result);
    }, nombre_hamburgers * DUREE_PREPARATION_HAMBURGER)
  );
}

module.exports = { traiter_commande, hh_mm_ss_mls };
