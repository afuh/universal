import React from 'react';
import { Link } from 'react-router-dom';

// Utils
import axios from 'axios';
import moment from 'moment';
import _ from 'lodash/collection'
import { display } from './App.js'

// Material UI
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import {cyan100, lightBlack} from 'material-ui/styles/colors';
import Subheader from 'material-ui/Subheader';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

const avatars = ['/images/rick.png', '/images/morty.jpg', '/images/doofus-rick.jpg', '/images/Evilmorty.jpg']

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
    if (id === "title") {
      this.setState({ title: value})
    } else {
      this.setState({ text: value})
    }
  }
  handleSubmit(){
    const { title, text } = this.state
    axios.post('/api/post', { title, text }).then(() => {
      this.setState({ title: '', text: ''})
      this.props.addPost()
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

class Posts extends React.Component {
  constructor(){
    super()
    this.state = {
      posts: []
    }
    this.handleData = this.handleData.bind(this)
  }
  componentDidMount(){
    axios.get('/api/post').then(res => this.handleState(res.data))
  }
  handleState(data){
    this.setState({posts: data})
  }
  handleData(){
    axios.get('/api/post').then(res => this.handleState(res.data))
  }
  render () {
    const { posts } = this.state

    return (
      <section style={display}>
        <Paper>
          <Subheader>Posts</Subheader>
          <List style={{padding: 0}}>
            <ListItem containerElement={<CreatePost addPost={this.handleData}/>}
            />
            <Divider />
            {posts.map(p => (
            <div key={p._id}>
              <ListItem
                leftAvatar={<Avatar src={_.sample(avatars)} />}
                primaryText={
                  <p>
                    {p.title}
                    <span style={{color: lightBlack, fontSize: "0.7em"}}>&nbsp;&nbsp;{moment(p.created).fromNow()}</span>
                  </p>
                }
                secondaryText={p.text}
                secondaryTextLines={2}
                hoverColor={cyan100}
                containerElement={<Link to={`/post/${p._id}`}/>}
              />
              <Divider inset={true} />
            </div>
        ))}
        </List>
      </Paper>
    </section>
    )
  }
}

export default Posts;
