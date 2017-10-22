const Post = require('../models/Post');

const message = {
  noContent: 'You should write something',
  noTitle: 'Please provide a title',
  maxLength: `That's a very long text`,
  postNotFound: 'Post not found!'
}

exports.checkBody = (req, res, next) => {
  const { title, text } = req.body

  if (title.length > 1000 || text.length > 1000) return res.status(500).send(message.maxLength)
  if (text.length === 0 ) return res.status(500).send(message.noContent)
  if (title.length === 0 ) return res.status(500).send(message.noTitle)
  next();
}

exports.checkId = (req, res, next) => {
  const { id } = req.params
  const checkId = new RegExp("^[0-9a-fA-F]{24}$");

  if (typeof id === 'string' && id.length == 24 && checkId.test(id)) {
    return next()
  }
  else {
    return res.status(500).send(message.postNotFound)
  }
}

exports.createPost = async (req, res) => {
  const post = await new Post(req.body).save()
  res.json(post)
}

exports.getAllPosts = async (req, res) => {
  const posts = await Post.find().sort({created: -1}).limit(10)
  res.json(posts)
}

exports.getSinglePost = async (req, res) => {
  const post = await Post.findById(req.params.id)
  if (!post) return res.status(500).send(message.postNotFound)
  res.json(post)
}

exports.deletePost = async (req, res) => {
  const post = await Post.findByIdAndRemove(req.params.id)
  if (!post) return res.status(500).send(message.postNotFound)
  res.json({message: "post removed"})
}

exports.updatePost = async (req, res) => {
  const post = await Post.findByIdAndUpdate(req.params.id, req.body,{ new: true })
  if (!post) return res.status(500).send(message.postNotFound)
  res.json(post)
}
