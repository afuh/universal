import React from 'react';
import { Link } from 'react-router-dom';

// Utils
import axios from 'axios';
import moment from 'moment';
import { display } from './App.js'

// Material UI
import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';
import Delete from 'material-ui/svg-icons/action/delete';
import Edit from 'material-ui/svg-icons/image/edit';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

class ShowPost extends React.Component {
  constructor(){
    super()
    this.state = {
      post: [],
      open: false,
      edit: true
    }
    this.handleOpen = this.handleOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.removePost = this.removePost.bind(this)
  }
  componentDidMount(){
    const { id } = this.props.match.params
    axios.get(`/api/post/${id}`).then(res => this.handleData(res.data))
  }
  handleEdit(){
    console.log(this.state.edit);
  }
  handleData(post){
    this.setState({ post })
  }
  handleOpen() {
    this.setState({open: true});
  }
  handleClose() {
    this.setState({open: false});
  }
  removePost(){
    axios.delete(`/api/post/${this.state.post._id}`)
    .then(res => {
      if (res.status === 200) {
        this.handleClose()
        location.href="/post"
      }
    })
  }
  render () {
    const { post } = this.state
    const actions = [
      <FlatButton
        key={0}
        label="Agree"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        key={1}
        label="Submit"
        primary={true}
        onClick={this.removePost}
      />,
      <FlatButton
        key={3}
        label="accept"
        primary={true}
        onClick={this.handleClose}
      />,
    ];
    return (
      <section style={display}>
        <Card>
          <CardHeader
            title="username"
            avatar='/images/Evilmorty.jpg'
          />
          <CardTitle
            title={post.title}
            subtitle={moment(post.created).fromNow()}
          />
          <CardText>{post.text}</CardText>
          <Divider />
          <CardActions>
            <IconButton><Edit /></IconButton>
            <IconButton onClick={this.handleOpen} ><Delete /></IconButton>
            <Dialog
              actions={actions}
              modal={false}
              open={this.state.open}
              onRequestClose={this.handleClose}
            > Discard post?
          </Dialog>
          </CardActions>
        </Card>
      </section>
    )
  }
}

export default ShowPost
