const p = require('./controllers/postControllers')

const error = fn => (req, res, next) => {
  return fn(req, res, next).catch(next);
}

module.exports = app => {
  app.route('/api/post')
    .get(error(p.getAllPosts))
    .post(p.checkBody, error(p.createPost))

  app.route('/api/post/:id')
    .get(p.checkId, error(p.getSinglePost))
    .delete(p.checkId, error(p.deletePost))
    .put(p.checkId, p.checkBody, error(p.updatePost))
}
