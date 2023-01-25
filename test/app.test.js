const { traiter_commande } = require("../hamburger");

test("traiter_commande doit retourner un array", async () => {
  const result = await traiter_commande("1", 2);
  expect(result).toBeInstanceOf(Array);
});

test("traiter_commande doit retourner un array avec 2 valeurs", async () => {
  const result = await traiter_commande("1", 2);
  expect(result).toHaveLength(2);
});

test("traiter_commande doit retourner un array avec 2 valeurs (prise de commande et service de commande)", async () => {
  const result = await traiter_commande("1", 2);

  expect(result[0]).toMatch("=> Commande #01 -> Prise de commande -> 💰💰");
  expect(result[1]).toMatch("=> Commande #01 -> Commande servie -> 🍔🍔");
});
