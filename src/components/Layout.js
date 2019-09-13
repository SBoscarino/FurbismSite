import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/layout.css';

class Layout extends Component {
render(){
  return(
    <div>
      <nav className="navbar">
        <NavLink style={{ textDecoration: 'none' }} activeClassName="selected" exact to="/">Home</NavLink>
        <NavLink style={{ textDecoration: 'none' }} activeClassName="selected" to="/About">About</NavLink>
        <NavLink style={{ textDecoration: 'none' }} activeClassName="selected" to="/HowToPractice">How To Practice</NavLink>
        <NavLink style={{ textDecoration: 'none' }} activeClassName="selected" to="/PoliteRequests">Polite Requests</NavLink>
        <NavLink style={{ textDecoration: 'none' }} activeClassName="selected" to="/More">More?</NavLink>
      </nav>
      <div className="allContent">
        {this.props.children}
      </div>
      {/* <footer class="footer">
      <h3>2019 Stefanie Boscarino</h3>
      </footer> */}
    </div>
  )
}
}
export default Layout;
