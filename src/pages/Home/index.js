import React, { Component } from 'react';
import { uniqueId } from 'lodash';
import filesize from 'filesize';

// Components
import Header from '../../components/Header';
import Aside from '../../components/Aside';
import Tabs from '../../components/Tabs';
import ImageUpload from '../../components/ImageUpload';
import ProjectImage from '../../components/ProjectImage';

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
      uploadedFiles: [],
    };
  }

  handleUpload = (files) => {
    const uploadedFiles = files.map((file) => ({
      file,
      id: uniqueId(),
      name: file.name,
      readableSize: filesize(file.size),
      preview: URL.createObjectURL(file),
      progress: 0,
      uploaded: false,
      error: false,
      url: null,
    }));

    this.setState((prevState) => ({
      uploadedFiles: prevState.uploadedFiles.concat(uploadedFiles),
    }));

    // Send to API
  };

  render() {
    const { user, uploadedFiles } = this.state;

    return (
      <div className="container">
        <Header user={user} />
        <Aside />
        <Content className="d--grid grid-layout">
          <div className="ga--1-2-span-3">
            <Title className="fw--light mb--normal">Edição de Projeto</Title>
            <Tabs>
              <Tabs.Tab label="Informações">
                <form>
                  {uploadedFiles.length === 0 && (
                    <ImageUpload onUpload={this.handleUpload} />
                  )}
                  {!!uploadedFiles.length && (
                    <ProjectImage files={uploadedFiles} />
                  )}
                </form>
              </Tabs.Tab>
              <Tabs.Tab label="Localizações">
                <h3>Conteúdo de Localizações</h3>
              </Tabs.Tab>
              <Tabs.Tab label="Temas">
                <h3>Conteúdo de Temas</h3>
              </Tabs.Tab>
            </Tabs>
          </div>
        </Content>
      </div>
    );
  }
}

export default Home;
