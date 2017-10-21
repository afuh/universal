import React from 'react';

// Utils
import axios from 'axios';
import moment from 'moment';
import { display } from './App.js'

// Material UI
import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';
import Delete from 'material-ui/svg-icons/action/delete';
import Edit from 'material-ui/svg-icons/action/done';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

class ShowPost extends React.Component {
  constructor(){
    super()
    this.state = {
      title: '',
      text: '',
      created: '',
      open: false,
      edit: false
    }

    this.handleOpen = this.handleOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.removePost = this.removePost.bind(this)

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount(){
    const { id } = this.props.match.params
    axios.get(`/api/post/${id}`).then(res => this.handleData(res.data))
  }
  handleData({ title, text, created }){
    this.setState({ title, text, created })
  }
  handleEdit(edit){
    this.setState({ edit });
  }
  handleOpen() {
    this.setState({open: true});
  }
  handleClose() {
    this.setState({open: false});
  }
  removePost(){
    const { id } = this.props.match.params
    axios.delete(`/api/post/${id}`)
    .then(() => {
      this.handleClose()
      this.props.history.goBack()
    })
  }
  handleChange(event){
    const { id, value } = event.target
    console.log(event.target);
    if (id === "title") {
      this.setState({ title: value})
    } else {
      this.setState({ text: value})
    }
  }
  handleSubmit(){
    const { id } = this.props.match.params
    const { title, text } = this.state

    axios.put(`/api/post/${id}`, { title, text })
      .then(() => this.handleEdit(false))
  }
  render () {
    const { title, text, created } = this.state
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
            onClick={() => this.handleEdit(true)}
            title={
              !this.state.edit ? title : <TextField id={"title"} defaultValue={title} onChange={this.handleChange}/>
            }
            subtitle={created && moment(created).fromNow()}
          />
          <CardText
            onClick={() => this.handleEdit(true)}>{
            !this.state.edit ? text : <TextField  id={"text"} onChange={this.handleChange} fullWidth={true} multiLine={true} defaultValue={text} />
          }</CardText>
          <Divider />
          <CardActions>
            {!this.state.edit && <IconButton onClick={this.handleOpen}><Delete /></IconButton>}
            {this.state.edit && <IconButton onClick={this.handleSubmit}><Edit /></IconButton>}
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
