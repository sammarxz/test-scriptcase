import React, { Component } from 'react';

// Components
import Header from '../../components/Header';
import Aside from '../../components/Aside';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        name: 'Caio',
        thumb: './images/user.jpg',
      },
    };
  }

  render() {
    const { user } = this.state;

    return (
      <div className="container">
        <Header user={user} />
        <Aside />
      </div>
    );
  }
}

export default Home;
