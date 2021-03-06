import React, { Component } from 'react';
import { uniqueId } from 'lodash';
import filesize from 'filesize';

// Components
import Header from '../../components/Header';
import Aside from '../../components/Aside';
import Tabs from '../../components/Tabs';
import ImageUpload from '../../components/ImageUpload';
import ProjectImage from '../../components/ProjectImage';
import Form from '../../components/Form';
import TextInput from '../../components/TextInput';

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
      project: {
        name: 'Projeto Exemplo',
        initialApplication: 'Menu',
        description: 'Lorem Ipsum Dolor sit amet...',
        showFavicon: true,
      },
      menuOpen: false,
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

  handleDelete = () => {
    this.setState({
      uploadedFiles: [],
    });
  };

  handleOpenMenu = () => {
    this.setState((prevState) => ({
      menuOpen: !prevState.menuOpen,
    }));
  };

  render() {
    const {
      user,
      uploadedFiles,
      project: {
        name,
        description,
        // showFavicon,
        initialApplication,
      },
      menuOpen,
    } = this.state;

    return (
      <div className="container">
        <Header user={user} openMenu={this.handleOpenMenu} />
        <Aside menuOpen={menuOpen} openMenu={this.handleOpenMenu} />
        <Content className="d--grid grid-layout">
          <div className="ga--1-2-span-3">
            <Title className="fw--light mb--normal">Edição de Projeto</Title>
            <Tabs>
              <Tabs.Tab label="Informações">
                <div className="row">
                  <div className="col-6">
                    {uploadedFiles.length === 0 && (
                      <ImageUpload onUpload={this.handleUpload} />
                    )}
                    {!!uploadedFiles.length && (
                      <ProjectImage files={uploadedFiles} onDelete={this.handleDelete} />
                    )}
                  </div>
                  <div className="col-6">
                    <Form>
                      <div className="row">
                        <div className="col-6">
                          <TextInput
                            type="text"
                            id="name"
                            placeholder="Alguma coisa"
                            label="Nome do Projeto"
                            value={name}
                          />
                        </div>
                        <div className="col-6">
                          <TextInput
                            type="text"
                            id="initialApplication"
                            placeholder="Menu"
                            label="Aplicação Inicial"
                            value={initialApplication}
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12">
                          <TextInput
                            type="textarea"
                            id="description"
                            placeholder="Projeto de teste para meu cliente"
                            label="Descrição do Projeto"
                            value={description}
                          />
                        </div>
                      </div>
                      <div className="row mb--small">
                        <div className="col-12">
                          <label htmlFor="favicon">
                            <input type="checkbox" id="favicon" className="checkbox" />
                            Exibir ícone na aba do Navegador (Favicon)
                          </label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-6">
                          <button type="button" className="btn btn__ghost mr--small w--100">Cancelar</button>
                        </div>
                        <div className="col-6">
                          <button type="button" className="btn btn__primary w--100">Concluir</button>
                        </div>
                      </div>
                    </Form>
                  </div>
                </div>
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
