# Fast Food

Démonstration du traitement asynchrone bloquant / non-bloquant en JavaScript avec Callback, Promise et Async / Await.

Le programme démontre le traitement d'opérations asynchrones, chacun de durée différente, de 2 façons : 
- bloquante (avec _await_),
- non bloquante, sans _await_).

La durée du traitement d'une commande correspond au nombre d'hamburgers contenus, multiplié par 100ms (ex : le traitrement d'une commande de 6 hamburgers prendra 600ms).

- Dans le 1er cas (commandes "A"), toutes les opérations sont traitéee dans le même fil d'exécution (processus unique) de façon bloquante. Tant qu'une opération n'est pas résolue (ex: 1A), la suivante n'est pas entamée (ex: 2B).
- Dans le second cas (commandes "B"), chaque opération est traitée de façon parallèle (non concurrente) et non bloquante par des sous-processus. Chaque opératin est mise dans la boucle d'événements de Node.js ("Event Loop"). Lorsqu'une opération est traitée, son callback est appelé. L'ordre de résolution dépend donc de la durée de chaque opération. Les opérations les plus courtes sont résolues en premières.

Exemple de résultat obtenu :
```
-- Traitement de commandes de façon bloquante / séquentielle (avec "await") :

13:26:07:189 => Commande #1A -> Prise de commande -> 💰💰💰💰💰
13:26:07:693 => Commande #1A -> Commande servie -> 🍔🍔🍔🍔🍔
13:26:07:694 => Commande #2A -> Prise de commande -> 💰💰💰
13:26:07:995 => Commande #2A -> Commande servie -> 🍔🍔🍔
13:26:07:995 => Commande #3A -> Prise de commande -> 💰💰💰
13:26:08:297 => Commande #3A -> Commande servie -> 🍔🍔🍔
13:26:08:297 => Commande #4A -> Prise de commande -> 💰💰💰
13:26:08:598 => Commande #4A -> Commande servie -> 🍔🍔🍔

-- Traitement de commandes de façon non-bloquante / parallèle (sans "await") :

13:26:08:599 => Commande #1B -> Prise de commande -> 💰💰💰💰💰
13:26:08:600 => Commande #2B -> Prise de commande -> 💰💰💰💰💰
13:26:08:600 => Commande #3B -> Prise de commande -> 💰💰
13:26:08:601 => Commande #4B -> Prise de commande -> 💰💰💰
13:26:08:801 => Commande #3B -> Commande servie -> 🍔🍔
13:26:08:901 => Commande #4B -> Commande servie -> 🍔🍔🍔
13:26:09:101 => Commande #1B -> Commande servie -> 🍔🍔🍔🍔🍔
13:26:09:102 => Commande #2B -> Commande servie -> 🍔🍔🍔🍔🍔
```
--

<img src="https://sherpa.one/images/sherpa-logotype.png" width="120px">

__Alexandre Leroux__

_Enseignant / Formateur_<br>
_Développeur logiciel web & mobile_

Nancy (Grand Est, France)

https://sherpa.one
