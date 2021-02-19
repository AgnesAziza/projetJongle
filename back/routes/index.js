const express = require('express');
const router = express.Router();
const Article = require('../models/Article');

//TODO verifier le CRUD
//TODO utiliser res.send ou res.json 
//TODO revoir notion de req et res
//TODO methode patch à la place de put??
//TODO s'occuper de la gstion des erreurs
// pourquoi ({_id: req.params.id}) sauf dans patch

router.get('/articles', async (req, res) => {
  const articles = await Article.find()
  res.send(articles)
});

router.post('/articles', async (req, res) => {
  const article = new Article({
    title: req.body.title, 
    content: req.body.content,
  })
  await article.save(
  res.send(article)
  )
});

router.get('/articles/:id', async(req, res) => {
  try {
    const article = await Article.findById({_id: req.params.id})
    res.send (article)
  } catch {
    res.status(404)
    res.send({erreur: "cet article n'existe pas"})
  }
});

router.patch('/articles/:id', async(req, res) => {
  try {
    const article = await Article.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.send(article)
  } catch {
    res.status(404)
    res.send({erreur: "L'article à modifier n'existe pas"})
  }
}); 

router.delete('/articles/:id', async(req, res) => {
  try {
    await Article.deleteOne({_id: req.params.id})
    res.status(204).send()
  } catch {
    res.status(204)
    res.send({erreur: "L'article n'a pas été supprimé"})
  }
})

module.exports = router;
