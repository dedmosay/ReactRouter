import React, { Component } from "react";
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import About from "../components/About";
import CarDetail from "../components/CarDetail";
import Cars from "../components/Cars";
import Color from "../components/Color";
import Home from "../components/Home";
import "../style.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App__navigate">
          <nav>
            <ul>
              <li>
                <NavLink to="/" exact>Home</NavLink>
              </li>
              <li>
                <NavLink to="/color" activeStyle={{ color: 'green', backgroundColor: 'yellow' }} >Color</NavLink>
              </li>
              <li>
                <NavLink to={{
                  pathname: '/about',
                  search: '?a=1&b=2',
                  hash: 'wfm-hash'
                }}>About</NavLink>
              </li>
              <li>
                <NavLink to="/cars" >Cars</NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <hr />
        <div>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/color" component={Color} />
            <Route path="/about" component={About} />
            <Route path="/cars/:name" component={CarDetail} />
            <Route path="/cars" component={Cars} />
            {/* <Route render={()=><div>404</div>} /> */}
            <Redirect to={'/'}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
