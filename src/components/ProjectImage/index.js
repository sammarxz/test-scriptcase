import React from 'react';
import PropTypes from 'prop-types';
// import { CircularProgressbar } from 'react-circular-progressbar';
// import { MdCheckCircle, MdError, MdLink } from 'react-icons/md';

// Styles
import { Container, FileInfo, Preview } from './styles';

const ProjectImage = ({ files }) => (
  <Container className="br--normal">
    {files.map(({
      preview, name, readableSize,
    }) => (
      <li>
        <FileInfo className="d--flex ai--center jc--center fd--column bg--component-outline br--normal">
          <Preview src={preview} className="br--normal mb--normal" />
          <div className="d--flex jc--space-between ai--center fd--column">
            <strong>{name}</strong>
            <span className="fs--small">
              {readableSize}
            </span>
            <button type="button" onClick={() => {}} className="btn btn--error mt--normal">
              Excluir
            </button>
          </div>
        </FileInfo>
        {/* <div>
          {!uploaded && !error && (
          <CircularProgressbar
            styles={{
              root: { width: 24 },
              path: { stroke: '#0F5EF7' },
            }}
            strokeWidth={10}
            percentage={progress}
          />
          )}
          {url && (
          <a href="http://placehold.it/200" target="_blank" rel="noopener noreferrer">
            <MdLink size={24} className="mr--small" />
          </a>
          )}
          {uploaded && (
          <MdCheckCircle size={24} className="c--success" />
          )}
          {error && (
          <MdError size={24} className="c--error" />
          )}
        </div> */}
      </li>
    ))}
  </Container>
);

ProjectImage.propTypes = {
  files: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProjectImage;
