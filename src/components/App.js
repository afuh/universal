import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

class Test extends React.Component {
  handleClick(){
    alert("and in the client 🐱")
  }
  render () {
    return (
      <section >
        <h1 onClick={() => this.handleClick()}>This is react in the server (SEO friendly)</h1>
        <Link to={`/1`}>Next</Link>
      </section>
    )
  }
}

export const App = () => (
    <Switch>
      <Route exact path="/" component={Test} />
    </Switch>
);

export default App;
