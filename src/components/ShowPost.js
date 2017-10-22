import React from 'react';

// Utils
import axios from 'axios';
import moment from 'moment';

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
  handleChange(event){
    const { id, value } = event.target
    id === 'title' ? this.setState({ title: value}) : this.setState({ text: value })
  }
  handleSubmit(){
    const { id } = this.props.match.params
    const { title, text } = this.state

    axios.put(`/api/post/${id}`, { title, text })
      .then(() => this.handleEdit(false))
  }
  removePost(){
    const { id } = this.props.match.params

    axios.delete(`/api/post/${id}`)
    .then(() => {
      this.handleClose()
      this.props.history.goBack()
    })
  }
  render () {
    const { title, text, created, edit } = this.state
    const actions = [
      <FlatButton key='cancel' label="Cancel" primary={true} onClick={this.handleClose}/>,
      <FlatButton key='submit' label="Submit" primary={true} onClick={this.removePost}/>
    ];
    const content = {
      title: !edit ? title : <TextField id={"title"} defaultValue={title} onChange={this.handleChange}/>,
      text: !edit ? text : <TextField  id={"text"} defaultValue={text} onChange={this.handleChange} fullWidth={true} multiLine={true} />
    }

    return (
      <section style={{maxWidth: "600px", margin: "0 auto"}}>
        <Card>
          <CardHeader
            title="username"
            avatar='/images/Evilmorty.jpg'
          />
          <CardTitle
            title={content.title}
            subtitle={created && moment(created).fromNow()}
            onClick={() => this.handleEdit(true)}
          />
          <CardText onClick={() => this.handleEdit(true)}>
            {content.text}
          </CardText>
          <Divider />

          <CardActions>
            {!edit && <IconButton onClick={this.handleOpen}><Delete /></IconButton>}
            {edit && <IconButton onClick={this.handleSubmit}><Edit /></IconButton>}
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
