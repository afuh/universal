import React from 'react';
import PropTypes from 'prop-types';

// Utils
import axios from 'axios';

// Material UI
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import {Card, CardHeader, CardText} from 'material-ui/Card';

class CreatePost extends React.Component {
  constructor(){
    super()
    this.state = {
      title: '',
      text: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event){
    const { id, value } = event.target
    id === 'title' ? this.setState({ title: value}) : this.setState({ text: value })
  }
  handleSubmit(){
    const { title, text } = this.state

    axios.post('/api/post', { title, text })
      .then(() => {
        this.props.addPost()
        this.setState({ title: '', text: ''})
      })
  }
  render () {
    const { text, title } = this.state

    return (
      <Card style={{boxShadow: "0 0"}}>
        <CardHeader
          title="Create post"
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardText expandable={true}>
          <TextField
            id="title"
            floatingLabelText="Title"
            value={title}
            fullWidth={true}
            onChange={this.handleChange}
          />
          <TextField
            id="text"
            floatingLabelText="Post"
            multiLine={true}
            value={text}
            fullWidth={true}
            onChange={this.handleChange}
          />
          <div style={{display: "flex", justifyContent: 'flex-end', }}>
            <FlatButton
              onClick={this.handleSubmit}
              style={{marginTop: "20px"}}
              label="Submit"
              primary={true} />
          </div>
        </CardText>
      </Card>
    )
  }
}

CreatePost.propTypes = {
  addPost: PropTypes.func.isRequired
}

export default CreatePost;
