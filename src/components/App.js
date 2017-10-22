import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Material
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Componets
import PostsList from './PostsList'
import ShowPost from './ShowPost'

const App = () => (
  <MuiThemeProvider>
    <Switch>
      <Route exact path="/" component={PostsList} />
      <Route path="/post/:id" component={ShowPost} />
      <Route render={() => (<img src="http://404-resto.com/typo3temp/pics/7580ea80fa.jpg"/>)} />
    </Switch>
  </MuiThemeProvider>
);

export default App;
