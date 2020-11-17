/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Dropzone from 'react-dropzone';

import { DropContainer, UploadMessage } from './styles';

const ImageUpload = () => {
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
    <Dropzone accept="image/*" onDropAccepted={() => {}} multiple={false}>
      {({
        getRootProps, getInputProps, isDragActive, isDragReject,
      }) => (
        <DropContainer
          {...getRootProps()}
          isDragActive={isDragActive}
          isDragReject={isDragReject}
        >
          {renderDragMessage(isDragActive, isDragReject)}
          <input {...getInputProps()} />
        </DropContainer>
      )}
    </Dropzone>
  );
};

export default ImageUpload;
