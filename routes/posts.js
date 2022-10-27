const express = require('express');
const { put } = require('.');
const router = express.Router();

/* GET posts index /posts */
router.get('/', (req, res, next) => {
  res.send('INDEX /posts');
});

/* GET posts create /posts */
router.get('/', (req, res, next) => {
  res.send('CREATE /posts');
});

/* GET posts new /posts/new */
router.post('/new', (req, res, next) => {
  res.send('NEW /posts/new');
});

/* GET posts show /posts/:id */
router.get('/:ID', (req, res, next) => {
  res.send('SHOW /posts/:id');
});

/* GET posts edit /posts/:id/edit */
router.get('/:id/edit', (req, res, next) => {
  res.send('EDIT /posts/:id/edit');
});

/* GET posts update /posts/:id */
router.put('/:id', (req, res, next) => {
  res.send('UPDATE /posts/:id');
});

/* GET posts destroy /posts/:id */
router.delete('/:id', (req, res, next) => {
  res.send('DELETE /posts/:id');
});

module.exports = router;

// GET index        /posts
// GET new          /posts/new
// POST create      /posts
// GET show         /posts/:id
// GET edit         /posts/:id/edit
// PUT update       /posts/:id
// DELETE destroy   /posts/:id
