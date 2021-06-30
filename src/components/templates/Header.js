import React, { Component } from "react";
//import PropTypes from "prop-types";
import Nav from "./Nav";

export class Header extends Component {
  //static propTypes = {};

  render() {
    return (
      <header className={this.props.classes}>
        <Nav classes="nav" />
      </header>
    );
  }
}

export default Header;
