import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ListRestaurants from './pages/ListRestaurants';
import DetailRestaurant from './pages/DetailRestaurant';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <ListRestaurants/>
        </Route>
        <Route path="/restaurant/:id">
          <DetailRestaurant/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
