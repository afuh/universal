const Post = require('../models/Post');

exports.checkBody = async (req, res, next) => {
  const { title, text } = req.body
  if (text.length === 0 ) return res.status(500).send('You should write something')
  if (title.length === 0 ) return res.status(500).send('Please provide a title')
  next();
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
  res.json(post)
}

exports.deletePost = async (req, res) => {
  const post = await Post.findByIdAndRemove(req.params.id)
  res.json({message: "post removed"})
}

exports.updatePost = async (req, res) => {
  const post = await Post.findByIdAndUpdate(req.params.id, req.body,{ new: true })
  res.json(post)
}
