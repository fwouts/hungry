import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AppState } from "./AppState";
import { PickDishes } from "./screens/pick-dishes/PickDishes";
import { PickRestaurant } from "./screens/pick-restaurant/PickRestaurant";

export const App = (props: { state: AppState }) => {
  return (
    <div className="p-4">
      <div className="max-w-prose mx-auto rounded-xl overflow-hidden">
        <Router>
          <Switch>
            <Route path="/" exact>
              <PickRestaurant appState={props.state} />
            </Route>
            <Route path="/restaurants/:restaurantId">
              <PickDishes appState={props.state} />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
};
