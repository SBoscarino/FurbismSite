import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import Layout from './components/Layout.js';
import Home from './components/Home.js';
import About from './components/About.js';
import PoliteRequests from './components/PoliteRequests.js';
import HowToPractice from './components/HowToPractice';
import More from './components/More';


ReactDOM.render(
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route path="/About" component={About}/>
        <Route path="/HowToPractice" component={HowToPractice}/>
        <Route path="/PoliteRequests" component={PoliteRequests}/>
        <Route path="/More" component={More}/>
        <Route path="/" component={Home}/>
      </Switch>
    </Layout>
  </BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './style.css';
// import registerServiceWorker from './registerServiceWorker';
// import {BrowserRouter, Route, Switch} from 'react-router-dom';
// import Layout from './components/Layout.js';
// import About from './components/About.js';
// import Social from './components/Social.js';
// import Home from './components/Home.js';
// import Find from './components/Find.js';

// ReactDOM.render(
//   <BrowserRouter>
//     <Layout>
//       <Switch>
//         <Route path="/About" component={About}/>
//         <Route path="/Social" component={Social}/>
//         <Route path="/Find" component={Find}/>
//         <Route path="/" component={Home}/>
//       </Switch>
//     </Layout>
//   </BrowserRouter>
// ,document.getElementById('root'));
// registerServiceWorker();
