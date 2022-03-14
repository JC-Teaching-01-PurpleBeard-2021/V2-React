import React, { Component } from 'react';

export class HomePage extends Component {
  render() {
    return (
      <div className="content">
        <h1>HomePage</h1>
        <a href="https://www.reactrouter.com/" target="_blank">
          React Docs
        </a>
        <br />
        <br />
        <a href="https://ultimatecourses.com/blog/active-navlink-inline-styles-with-react-router" target="_blank">
          Docs on NavLinks
        </a>
        <br />
        <br />
        <a href="https://youtu.be/k2Zk5cbiZhg" target="_blank">
          YouTube Video of Router V6
        </a>
      </div>
    );
  }
}

export default HomePage;
