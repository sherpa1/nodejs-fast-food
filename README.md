# Fast Food

Démonstration du traitement asynchrone bloquant / non-bloquant en JavaScript avec Callback, Promise et Async / Await.

Le programme démontre le traitement d'opérations asynchrones, chacun de durée différente, de 2 façons : 
- bloquante (avec _await_),
- non bloquante, sans _await_).

La durée du traitement d'une commande correspond au nombre d'hamburgers contenus, multiplié par 500ms (ex : le traitrement d'une commande de 6 hamburgers prendra 3000ms).

- Dans le 1er cas (commandes "A"), toutes les opérations sont traitéee dans le même fil d'exécution (processus unique) de façon bloquante. Tant qu'une opération n'est pas résolue (ex: 1A), la suivante n'est pas entamée (ex: 2B).
- Dans le second cas (commandes "B"), chaque opération est traitée de façon parallèle (non concurrente) et non bloquante par des sous-processus. Chaque opératin est mise dans la boucle d'événements de Node.js ("Event Loop"). Lorsqu'une opération est traitée, son callback est appelé. L'ordre de résolution dépend donc de la durée de chaque opération. Les opérations les plus courtes sont résolues en premières.

Exemple de résultat obtenu :
```
-- Traitement de commandes de façon bloquante (avec "await") :

09:52:05:288 => Commande #1A -> Prise de commande -> 💰💰
09:52:06:291 => Commande #1A -> Commande servie -> 🍔🍔
09:52:06:291 => Commande #2A -> Prise de commande -> 💰
09:52:06:793 => Commande #2A -> Commande servie -> 🍔
09:52:06:793 => Commande #3A -> Prise de commande -> 💰💰💰
09:52:08:295 => Commande #3A -> Commande servie -> 🍔🍔🍔
09:52:08:296 => Commande #4A -> Prise de commande -> 💰💰💰
09:52:09:797 => Commande #4A -> Commande servie -> 🍔🍔🍔

-- Traitement de commandes de façon non-bloquante (sans "await") :

09:52:09:799 => Commande #1B -> Prise de commande -> 💰💰💰💰
09:52:09:799 => Commande #2B -> Prise de commande -> 💰💰
09:52:09:799 => Commande #3B -> Prise de commande -> 💰💰
09:52:09:800 => Commande #4B -> Prise de commande -> 💰💰💰💰💰💰

09:52:10:801 => Commande #2B -> Commande servie -> 🍔🍔
09:52:10:802 => Commande #3B -> Commande servie -> 🍔🍔
09:52:11:800 => Commande #1B -> Commande servie -> 🍔🍔🍔🍔
09:52:12:801 => Commande #4B -> Commande servie -> 🍔🍔🍔🍔🍔🍔
```
--

<img src="https://sherpa.one/images/sherpa-logotype.png" width="120px">

__Alexandre Leroux__

_Enseignant / Formateur_<br>
_Développeur logiciel web & mobile_

Nancy (Grand Est, France)

https://sherpa.one
