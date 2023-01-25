const { traiter_commande } = require("./hamburger");

async function main() {
  if (process.env.NODE_ENV === "development")
    console.log(
      '\n-- Traitement de commandes de façon bloquante / séquentielle (avec "await") :\n'
    );

  let i = 0;
  while (i < 4) {
    try {
      const nombre_hamburgers = Math.floor(1 + Math.random() * 6); // entre 1 et 6
      await traiter_commande(`${i + 1}A`, nombre_hamburgers);
      i += 1;
    } catch (error) {
      console.error(error);
    }
  }

  let j = 0;

  if (process.env.NODE_ENV === "development")
    console.log(
      '\n-- Traitement de commandes de façon non-bloquante / parallèle (sans "await") :\n'
    );

  while (j < 4) {
    try {
      const nombre_hamburgers = Math.floor(1 + Math.random() * 6); // nombre d'hamburgers entre 1 et 6
      traiter_commande(`${j + 1}B`, nombre_hamburgers);
      j += 1;
    } catch (error) {
      console.error(error);
    }
  }
}

main();
