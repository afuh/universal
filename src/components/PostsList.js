import React from 'react';
import { Link } from 'react-router-dom';

// Utils
import axios from 'axios';
import moment from 'moment';
import _ from 'lodash/collection'

// Material UI
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import {cyan100, lightBlack} from 'material-ui/styles/colors';
import Subheader from 'material-ui/Subheader';

// Components
import CreatePost from './CreatePost';

// Fake avatars
const avatars = ['/images/rick.png', '/images/morty.jpg', '/images/doofus-rick.jpg', '/images/Evilmorty.jpg']

class PostsList extends React.Component {
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
  handleData(){
    axios.get('/api/post').then(res => this.handleState(res.data))
  }
  handleState(posts){
    this.setState({ posts })
  }
  render () {
    const { posts } = this.state

    return (
      <section style={{maxWidth: '600px', margin: '0 auto'}}>
        <Paper>
          <Subheader>Posts</Subheader>
          <List style={{padding: 0}}>
            <ListItem containerElement={<CreatePost addPost={this.handleData}/>}/>
            <Divider />

            {posts.map(p => (
              <div key={p._id}>
                <ListItem
                  leftAvatar={<Avatar src={_.sample(avatars)} />}
                  primaryText={
                    <p>
                      {p.title}
                      <span style={{color: lightBlack, fontSize: "0.7em"}}>
                        &nbsp;&nbsp;{moment(p.created).fromNow()}
                      </span>
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

export default PostsList;
