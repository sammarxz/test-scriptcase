import React, { Component } from 'react';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Hello World',
    };
  }

  render() {
    const { name } = this.state;

    return (
      <h1>{name}</h1>
    );
  }
}

export default Home;
