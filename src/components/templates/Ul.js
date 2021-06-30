import React, { Component } from "react";
//import PropTypes from "prop-types";

export class Ul extends Component {
  //static propTypes = {};

  render() {
    return (
      <ul>
        {this.props.links.map((link) => (
          <li className={link.classes}>
            <a className={link.aTagClasses} href={link.aTagUrl}>
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    );
  }
}

export default Ul;
