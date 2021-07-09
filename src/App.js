import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Detail from "./components/Details";
import Login from "./components/Login";
import Home from "./components/Home";
import "./App.css";

function App() {
  return (
    <div className="Site">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/detail/:id">
            <Detail />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
