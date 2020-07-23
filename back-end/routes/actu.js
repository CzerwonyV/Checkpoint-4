const express = require('express');
const connection = require('../server/db.js');

const router = express.Router();

/* ----- GET all actus ----- */

router.get('/',(req, res) =>{
    connection.query('SELECT * from actu', (err, results) => {
      if (err) {
        res.status(500).send('Erreur lors de la récupération des coffrets');
      } else {
        res.status(200).json(results);
      }
    });
});

/* ----- GET actu by ID ----- */

router.get('/:id', (req, res) => {
    const idactus = req.params.id;
    connection.query('SELECT * from actu WHERE id = ?', [idactus], (err, results) => {
      if (err) {
        res.status(500).send(`Erreur lors de la récupération d'une actu`);
      } 
      if (results.length === 0) {
        return res.status(404).send('actu non trouvée');
      } else {
        res.json(results[0]);
      }
    });
});

/* ----- POST actu ----- */

router.post('/add', (req, res) => {
    const formData = req.body;
    if (formData.text == null || formData.text === '') {
      res.status(400).send("Le text de l'actu est mal renseigné");
    } else {
      connection.query('INSERT INTO actu SET ?', formData, (err, results) => {
        if (err) {
          console.log(err);
          res.status(500).send("Erreur lors de la sauvegarde d'un text");
        } else {
          res.status(201).send({...formData});
        }
      });
    }
});

/* ----- PUT actu by ID ----- */

router.put('/:id', (req, res) => {
    const idCategory = req.params.id;
    const formData = req.body;
    if (formData.text == null || formData.text === '') {
      res.status(400).send("Les données sont mal renseigné");
    } else {
      connection.query('UPDATE actu SET ? WHERE id=?' , [formData, idCategory], (err, results) => {
        if (err) {
          console.log(err);
          res.status(500).send("Erreur lors de la sauvegarde d'une catégorie");
        } else {
          res.status(200).send({...formData});
        }
      });
    }
});

/* ----- DELETE a actu ----- */

router.delete('/:id', (req, res) => {
    const idactus = req.params.id;
    connection.query('DELETE FROM actu WHERE id = ?', idactus, err => {
      if (err) {
        res.status(500).send(`Erreur lors de la suppression d'une actu`);
      } else {
        res.status(204);
      }
    });
});

module.exports = router;