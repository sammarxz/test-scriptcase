import styled, { css } from 'styled-components';

const dragActive = css`
  border-color: var(--success-color);
`;

const dragReject = css`
  border-color: var(--error-color);
`;

export const DropContainer = styled.div.attrs({
  className: 'dropzone',
})`
  min-height: 360px;
  background-color: var(--component-bg-color);
  border: 2px dashed var(--low-contrast-color);
  border-radius: 8px;
  cursor: pointer;
  transition: height .3s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${(props) => props.isDragActive && dragActive};
  ${(props) => props.isDragReject && dragReject};

  svg {
    color: var(--low-contrast-color);
  }
`;

const messageColors = {
  default: 'var(--medium-contrast-color)',
  error: 'var(--error-color)',
  success: 'var(--success-color)',
};

export const UploadMessage = styled.p`
  font-size: 1.2rem;
  width: 100%;
  font-weight: bold;
  color: ${(props) => messageColors[props.type || 'default']};
`;
