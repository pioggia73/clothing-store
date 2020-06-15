import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import GlobalStyles from './components/globals/GlobalStyles';
// *********** PAGES ********** //
import Error from './pages/Error';
import Home from './pages/Home';



function App() {

  return (
    <React.Fragment>

      <GlobalStyles />
        <Router>

        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
        <Route path='*'>
          <Error />
        </Route>
        </Switch>
        </Router>
    </React.Fragment>
  )
};

export default App;
