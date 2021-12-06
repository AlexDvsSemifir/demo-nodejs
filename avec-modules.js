//utilisation du module externe
require('colors');
// idem mais un récupère l'objet
const uuid = require('uuid')
// les dépendances sont "tree shakables" : on peut secouer l'arvre des dépendences pour faire tonber la fonction utile
const {v4} = require('uuid') 
// Comme exrire "import {v4} from uuid"

// affichage des arguments passés à node
console.log(process.argv);

console.log("hello world".yellow.bold, `${process.argv[2]}`.red.italic.bold);

console.log("UUID :", uuid.v4());

// Appel du module"mon_module.js"
const sayHello = require('./mon_module');
sayHello('Michel')