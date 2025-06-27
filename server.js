import chalk from 'chalk'
import axios from 'axios'
const express = require('express')
const app = express()
const port = 5000;
//TODO: rimuovi il commento per gli asset statici da visualizzare
// app.use(express.static('public'))
app.listen(port, () => {
    console.log(chalk.yellow(`Your server is running on http://localhost:${port}`))
})

app.get('/', (req, res) =>{
    res.send('Server del mio blog')
})
//*creo array con 5 post di cui delineo il contenuto ->riferimenti in reaadme
//TODO: RIEMPI I CAMPI
// const foodArray = [
//     {
//         titolo:,
//         contenuto:,
//         immagine:,
//         tags = {}
//     },
//     {
//         titolo:,
//         contenuto:,
//         immagine:,
//         tags = {}
//     },
//     {
//         titolo:,
//         contenuto:,
//         immagine:,
//         tags = {}
//     },
//     {
//         titolo:,
//         contenuto:,
//         immagine:,
//         tags = {}
//     },
//     {
//         titolo:,
//         contenuto:,
//         immagine:,
//         tags = {}
//     },
    
// ]


//TODO:Crea rotto /api/posts per restituire oggetto json con lista dei post

//*configura gli asset statici [vedi sopra] per assicurartene la visualizzazione in postman

//TODO: testa il tuo applicativo
