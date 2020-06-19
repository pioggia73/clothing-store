import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import GlobalStyles from './components/globals/GlobalStyles';
// *********** PAGES ********** //
import Error from './pages/Error';
import Hats from './pages/Hats';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import ShopPage from './pages/ShopPage';

function App() {

  return (
    <React.Fragment>

      <GlobalStyles />
        <Router>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/shop'>
            <ShopPage />
          </Route>
          <Route path='/hats'>
            <Hats />
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
