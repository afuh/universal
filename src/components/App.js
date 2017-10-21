import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Material
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Componets
import Posts from './Posts'
import ShowPost from './ShowPost'

export const display = {
  maxWidth: "600px",
  margin: "0 auto"
};


const App = () => (
  <MuiThemeProvider>
    <Switch>
      <Route exact path="/" component={Posts} />
      <Route path="/post/:id" component={ShowPost} />
      <Route render={() => (<div>404... no existe</div>)} />
    </Switch>
  </MuiThemeProvider>
);

export default App;
