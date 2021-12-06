// Import du module filesystem : fs
// le module est présent sous l'appellation 'fs' 
// On peut récupérer des classes, des fonctions, des variables ...
// FS est fortement typé
const fs = require('fs')

// Ecrire dans un fichier
// fs.writeFileSync('nom-fichier', "texte")
fs.writeFileSync('./fichierTest.txt', "Un truc écrit avec fs.writeFileSync")


//En utf-8 dans le console.log
const fileContent = fs.readFileSync('./fichierTest.txt');
console.log(fileContent.toString('utf-8'))