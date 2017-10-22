import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Material
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';

// Componets
import PostsList from './PostsList'
import ShowPost from './ShowPost'

const Wrapper = ({children}) => {
  const style = {
    maxWidth: "460px",
    height: "740px",
    margin: '0 auto',
    background: 'whitesmoke',
    border: '1px solid #efefef',
    overflow: 'auto'
  }
  return (
    <div style={style}>
      <Paper>{children}</Paper>
    </div>)
}
const App = () => (
    <MuiThemeProvider>
      <Wrapper>
        <Switch>
          <Route exact path="/" component={PostsList} />
          <Route path="/post/:id" component={ShowPost} />
          <Route render={() => (<img style={{width: "100%"}}src="http://404-resto.com/typo3temp/pics/7580ea80fa.jpg"/>)} />
        </Switch>
      </Wrapper>
    </MuiThemeProvider>
);

export default App;
