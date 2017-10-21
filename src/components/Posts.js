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

const avatars = ['/images/rick.png', '/images/morty.jpg', '/images/doofus-rick.jpg', '/images/Evilmorty.jpg']

class Posts extends React.Component {
  constructor(){
    super()
    this.state = {
      posts: []
    }
  }
  componentDidMount(){
    axios.get('/api/post').then(res => this.handleState(res.data))
  }
  handleState(data){
    this.setState({posts: data})
  }
  render () {
    const { posts } = this.state

    return (
      <section style={display}>
        <Paper>
          <Subheader>Posts</Subheader>
          <List style={{padding: 0}}>
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
