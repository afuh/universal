const p = require('./controllers/postControllers')

const error = fn => (req, res, next) => {
  return fn(req, res, next).catch(next);
}

module.exports = app => {
  app.route('/api/post')
    .get(error(p.getAllPosts))
    .post(error(p.createPost))

  app.route('/api/post/:id')
    .get(error(p.getSinglePost))
    .delete(error(p.deletePost))
    .put(error(p.updatePost))
}
