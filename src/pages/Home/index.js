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
          <div className="ga--1-2">
            <Title className="fw--light">Edição de Projeto</Title>
            <Tabs>
              <Tabs.Tab label="Tab 1">
                <p>Content 1</p>
              </Tabs.Tab>

              <Tabs.Tab label="Tab 2">
                <ul>
                  <li>List</li>
                  <li>Content</li>
                  <li>2</li>
                </ul>
              </Tabs.Tab>

              <Tabs.Tab label="Tab 3">
                <figure>
                  <img src="http://placehold.it/200" alt="Content 3" />
                  <figcaption>Image Content 3</figcaption>
                </figure>
              </Tabs.Tab>
            </Tabs>
          </div>
        </Content>
      </div>
    );
  }
}

export default Home;
