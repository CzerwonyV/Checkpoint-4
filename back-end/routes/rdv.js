const express = require('express');
const connection = require('../server/db.js');

const router = express.Router();

/* ----- GET all rdvs ----- */

router.get('/',(req, res) =>{
    connection.query('SELECT * from rdv', (err, results) => {
      if (err) {
        res.status(500).send('Erreur lors de la récupération des rendez-vous');
      } else {
        res.status(200).json(results);
      }
    });
});

/* ----- GET rdv by ID ----- */

router.get('/:id', (req, res) => {
    const idrdvs = req.params.id;
    connection.query('SELECT * from rdv WHERE id = ?', [idrdvs], (err, results) => {
      if (err) {
        res.status(500).send(`Erreur lors de la récupération d'un rendez-vous`);
      } 
      if (results.length === 0) {
        return res.status(404).send('rdv non trouvée');
      } else {
        res.json(results[0]);
      }
    });
});

/* ----- POST rdv ----- */

router.post('/', (req, res) => {
    const formData = req.body;
    if (formData.text == null || formData.text === '') {
      res.status(400).send("Le text de le rendez-vous est mal renseigné");
    } else {
      connection.query('INSERT INTO rdv SET ?', formData, (err, results) => {
        if (err) {
          console.log(err);
          res.status(500).send("Erreur lors de la sauvegarde d'un rendez-vous");
        } else {
          res.status(201).send({...formData});
        }
      });
    }
});

/* ----- PUT rdv by ID ----- */

router.put('/:id', (req, res) => {
    const idCategory = req.params.id;
    const formData = req.body;
    if (formData.text == null || formData.text === '') {
      res.status(400).send("Les données du rendez-vous sont mal renseigné");
    } else {
      connection.query('UPDATE rdv SET ? WHERE id=?' , [formData, idCategory], (err, results) => {
        if (err) {
          console.log(err);
          res.status(500).send("Erreur lors de la sauvegarde d'un rendez-vous");
        } else {
          res.status(200).send({...formData});
        }
      });
    }
});

/* ----- DELETE a rdv ----- */

router.delete('/:id', (req, res) => {
    const idrdvs = req.params.id;
    connection.query('DELETE FROM rdv WHERE id = ?', idrdvs, err => {
      if (err) {
        res.status(500).send(`Erreur lors de la suppression d'un rendez-vous`);
      } else {
        res.status(204);
      }
    });
});

module.exports = router;