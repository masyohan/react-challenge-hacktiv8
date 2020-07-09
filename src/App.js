import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ListRestaurants from './pages/ListRestaurants';
import DetailRestaurant from './pages/DetailRestaurant';
import { Provider } from 'react-redux';
import store from "./store";

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  )
}

export default App;
