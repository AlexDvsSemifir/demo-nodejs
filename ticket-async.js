console.log('hello world');


const fs = require('fs')

// Lambda json content file : 
const commande = {
    nomProduit: "Kores, White board cleaner",
    prix: 15.75,
    client: "2iTech"
}

console.log('Ecriture du ticket')
// Ecrit en string le contenu de la const json
fs.writeFile('./fichierTest.txt', JSON.stringify(commande), (err) => console.log("Ticket Ecrit"))
// Ectrit dans un fichier x, ceci, et ensuite tu fais ça.

//Lit le contenu
const fileContent = fs.readFile('./fichierTest.txt', {encoding: 'utf-8'}, (err, data) => {
    if (err) console.error(err);
    console.log({data})
});