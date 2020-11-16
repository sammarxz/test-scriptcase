import React, { Component } from 'react';

// Components
import Header from '../../components/Header';
import Aside from '../../components/Aside';

// Styles
import { Content, Title } from './styles';

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
        <Content className="d--grid grid-layout">
          <div className="ga--1-2">
            <Title className="fw--light">Edição de Projeto</Title>
          </div>
        </Content>
      </div>
    );
  }
}

export default Home;
