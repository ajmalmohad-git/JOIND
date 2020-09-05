import React from "react";
import "./styles/App.scss";
import Welcome from "./components/Welcome";
import Auth from "./components/Auth";
import Home from "./components/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact><Welcome /></Route>
          <Route path="/login"><Auth login={true} /></Route>
          <Route path="/signup"><Auth login={false} /></Route>
          <Route path="/home"><Home /></Route>
          <Route component={() => <h1>Page Not Found!</h1>} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
