import React from 'react';
import PropTypes from 'prop-types';

// Utils
import axios from 'axios';

// Material UI
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

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
      <div>
        <div style={{display: "flex", justifyContent: "space-around"}}>
          <TextField
            id="title"
            floatingLabelText="Title"
            value={title}
            onChange={this.handleChange}
          />
          <TextField
            id="text"
            floatingLabelText="Post"
            value={text}
            onChange={this.handleChange}
          />
        </div>
        <FlatButton
          onClick={this.handleSubmit}
          style={{margin: "20px 0"}}
          label="Submit"
          primary={true}
          fullWidth={true}/>
      </div>
    )
  }
}

CreatePost.propTypes = {
  addPost: PropTypes.func.isRequired
}

export default CreatePost;
