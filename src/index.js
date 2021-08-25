import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import Home from './Pagina/Home';
// import QE from './Pagina/QE';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <Router>
    <div>

      <Switch>
        <Route exact path='/' component={Home} />
        {/* <Route path="/QE" exact component={QE} /> */}


        {/* <Route component={NotFound} /> */}
      </Switch>


    </div>
  </Router>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
