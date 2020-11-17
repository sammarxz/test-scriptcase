import React, { Component } from 'react';

// Components
import Header from '../../components/Header';
import Aside from '../../components/Aside';
import Tabs from '../../components/Tabs';

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
          <div className="ga--1-2-span-3">
            <Title className="fw--light mb--medium">Edição de Projeto</Title>
            <Tabs>
              <Tabs.Tab label="Informações">
                <p>Content 1</p>
              </Tabs.Tab>
              <Tabs.Tab label="Localizações">
                <h2>Conteúdo de Localizações</h2>
              </Tabs.Tab>
              <Tabs.Tab label="Temas">
                <h2>Conteúdo de Temas</h2>
              </Tabs.Tab>
            </Tabs>
          </div>
        </Content>
      </div>
    );
  }
}

export default Home;
