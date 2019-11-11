import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/auth/Login";
import store from "./redux/store/store";
import PrivateRoute from "./router/PrivateRoute";
import Home from "./components/pages/Home";
import Navbar from "./components/layouts/Navbar";
import { CssBaseline, Container } from "@material-ui/core";

import "./App.css";
const App: React.FC = () => {
  return (
    <Provider store={store}>
      <CssBaseline />
      <Navbar />
      <Container>
        <Router>
          {
        /**
         * @todo
         * 1.adding Navbar Component
        */}
          <Switch>
            <PrivateRoute exact={true} path="/" component={Home} />
            <Route exact={true} path="/login" component={Login} />
          </Switch>
        </Router>
      </Container>
    </Provider>
  );
};

export default App;
