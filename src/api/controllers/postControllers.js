const Post = require('../models/Post');

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
  req.body.edited = Date.now()
  const post = await Post.findByIdAndUpdate(req.params.id, req.body,{ new: true })
  res.json(post)
}
