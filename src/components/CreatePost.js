import React from 'react';
import PropTypes from 'prop-types';

// Utils
import axios from 'axios';

// Material UI
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import {Card, CardHeader, CardText} from 'material-ui/Card';

// Components
import CatchErrors from './CatchErrors';

class CreatePost extends React.Component {
  constructor(){
    super()
    this.state = {
      title: '',
      text: '',
      error: '',
      snackbar: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleError = this.handleError.bind(this)
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
      .catch(res => this.handleError(true, res.response.data))
  }
  handleError(snackbar, error) {
    this.setState({snackbar, error})
  }
  render () {
    const { text, title, error, snackbar } = this.state

    return (
      <Card key="card" style={{boxShadow: "0 0"}}>
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
        <CatchErrors key="snack" error={error} open={snackbar} close={() => this.handleError(false, error)}/>
      </Card>
    )
  }
}

CreatePost.propTypes = {
  addPost: PropTypes.func.isRequired
}

export default CreatePost;
