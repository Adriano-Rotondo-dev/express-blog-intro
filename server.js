const express = require('express');
const app = express();
const port = 5000;
//TODO: rimuovi il commento per gli asset statici da visualizzare
// app.use(express.static('public'))
app.listen(port, () => {
  console.log(`Your server is running on http://localhost:${port}`);
});

app.get('/', (req, res) => {
  res.send('Server del mio blog');
});
//*creo array con 5 post di cui delineo il contenuto ->riferimenti in reaadme
//TODO: RIEMPI I CAMPI
const foodArray = [
  {
    titolo: "Ciambellone",
    contenuto: "",
    immagine: `http://localhost:${port}/images/ciambellone.jpeg`,
    tags: ["dolce", "colazione", "tradizionale", "soffice", "uova"],
  },
  {
    titolo: "Cracker alla barbabietola",
    contenuto:
      "Un dolce soffice e genuino, perfetto per la colazione o la merenda.",
    immagine: `http://localhost:${port}/images/cracker_barbabietola.jpeg`,
    tags: ["salato", "snack", "barbabietola", "vegetariano"],
  },
  {
    titolo: "Pane fritto dolce",
    contenuto: "Cracker croccanti e colorati, ideali come snack salutare.",
    immagine: `http://localhost:${port}/images/pane_fritto_dolce.jpeg`,
    tags: ["dolce", "fritto", "merenda", "pane"],
  },
  {
    titolo: "Pasta alla barbabietola",
    contenuto:
      "Fette di pane immerse nell'uovo e fritte, spolverate con zucchero.",
    immagine: `http://localhost:${port}/images/pasta_barbabietola.jpeg`,
    tags: ["primo", "barbabietola", "vegetariano", "colorato"],
  },
  {
    titolo: "Torta Paesana",
    contenuto:
      "Pasta dal colore vivace grazie alla barbabietola, gustosa e originale.",
    immagine: `http://localhost:${port}/images/torta_paesana.jpeg`,
    tags: ["dolce", "tradizionale", "pane", "cacao"],
  },
];

//TODO:Crea rotto /api/posts per restituire oggetto json con lista dei post

//*configura gli asset statici [vedi sopra] per assicurartene la visualizzazione in postman

//TODO: testa il tuo applicativo
