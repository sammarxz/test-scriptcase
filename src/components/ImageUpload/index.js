/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';
import { FiUpload } from 'react-icons/fi';

import { DropContainer, UploadMessage } from './styles';

const ImageUpload = ({ onUpload }) => {
  const renderDragMessage = (isDragActive, isDragReject) => {
    if (!isDragActive) {
      return <UploadMessage>Arraste a imagem do projeto aqui...</UploadMessage>;
    }

    if (isDragReject) {
      return <UploadMessage type="error">Ops! Arquivo não suportado ou mais de uma imagem detectada.</UploadMessage>;
    }

    return <UploadMessage type="success">Solte o arquivo aqui.</UploadMessage>;
  };

  return (
    <Dropzone accept="image/*" onDropAccepted={onUpload} multiple={false}>
      {({
        getRootProps, getInputProps, isDragActive, isDragReject,
      }) => (
        <DropContainer
          {...getRootProps()}
          isDragActive={isDragActive}
          isDragReject={isDragReject}
          className="d--flex ai--center jc--center ta--center"
        >
          <FiUpload size="5rem" className="mb--normal" />
          {renderDragMessage(isDragActive, isDragReject)}
          <button type="button" className="mt--normal btn btn--low-contrast">
            Escolher Imagem
          </button>
          <span className="mt--small fs--small">Tamanho máximo de 5Mb</span>
          <input {...getInputProps()} />
        </DropContainer>
      )}
    </Dropzone>
  );
};

ImageUpload.propTypes = {
  onUpload: PropTypes.func.isRequired,
};

export default ImageUpload;
