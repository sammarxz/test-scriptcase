import React, { Component } from 'react';

// Components
import Header from '../../components/Header';

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
      </div>
    );
  }
}

export default Home;
