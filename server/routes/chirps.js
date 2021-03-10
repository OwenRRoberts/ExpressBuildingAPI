const express = require('express');
const chirpstore = require('../chirpstore')

let router = express.Router();

router.get('/:id', (req, res) => {
    let id = req.params.id;
    res.send('chirps');
    if (id) {
        res.send(chirpstore.GetChirp(id));
    } else {
        res.send(chirpstore.GetChirp());
    }
})

router.post('/', (req, res) => {
    let chirp = req.body;
    chirpstore.CreateChirp(chirp);
    res.send('You done added a CHIRP!');
})

router.put('/:id', (req, res) => {
    let id = req.params.id;
    let editedChirp = req.body;
    chirpstore.UpdateChirp(id, editedChirp);
    res.send('I guess you changed your mind and wanted everyone to know.  Chirp edited!');
})

router.delete('/:id', (req, res) => {
    let id = req.params.id;
    chirpstore.DeleteChirp(id);
    res.send("Maybe you shouldn't post everything that comes to your mind.  Chirp deleted!");
})

module.exports = router;