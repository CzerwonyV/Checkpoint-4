const express = require('express');
const connection = require('../server/db.js');

const router = express.Router();

/* ----- GET all sitecards ----- */

router.get('/',(req, res) =>{
    connection.query('SELECT * from sitecard', (err, results) => {
      if (err) {
        res.status(500).send('Erreur lors de la récupération des sites');
      } else {
        res.status(200).json(results);
      }
    });
});

/* ----- GET sitecard by ID ----- */

router.get('/:id', (req, res) => {
    const idsitecards = req.params.id;
    connection.query('SELECT * from sitecard WHERE id = ?', [idsitecards], (err, results) => {
      if (err) {
        res.status(500).send(`Erreur lors de la récupération d'un site`);
      } 
      if (results.length === 0) {
        return res.status(404).send('site non trouvée');
      } else {
        res.json(results[0]);
      }
    });
});

/* ----- POST sitecard ----- */

router.post('/add', (req, res) => {
    const formData = req.body;
    if ((formData.imgurl == null || formData.imgurl === '') || (formData.name == null || formData.name === '') || (formData.textexplication == null || formData.textexplication === '') || (formData.urlsite == null || formData.urlsite === '') || (formData.urlgithub == null || formData.urlgithub === '')) {
      res.status(400).send("Les données de sitecard sont mal renseigné");
    } else {
      connection.query('INSERT INTO sitecard SET ?', formData, (err, results) => {
        if (err) {
          console.log(err);
          res.status(500).send("Erreur lors de la sauvegarde d'un site");
        } else {
          res.status(201).send({...formData});
        }
      });
    }
});

/* ----- PUT sitecard by ID ----- */

router.put('/:id', (req, res) => {
    const idCategory = req.params.id;
    const formData = req.body;
    if (formData.text == null || formData.text === '') {
      res.status(400).send("Les données sont mal renseigné");
    } else {
      connection.query('UPDATE sitecard SET ? WHERE id=?' , [formData, idCategory], (err, results) => {
        if (err) {
          console.log(err);
          res.status(500).send("Erreur lors de la sauvegarde d'un site");
        } else {
          res.status(200).send({...formData});
        }
      });
    }
});

/* ----- DELETE a sitecard ----- */

router.delete('/:id', (req, res) => {
    const idsitecards = req.params.id;
    connection.query('DELETE FROM sitecard WHERE id = ?', idsitecards, err => {
      if (err) {
        res.status(500).send(`Erreur lors de la suppression d'un site`);
      } else {
        res.status(204);
      }
    });
});

module.exports = router;