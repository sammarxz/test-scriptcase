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
  background-color: var(--component-bg-color);
  border: 2px dashed var(--low-contrast-color);
  border-radius: 8px;
  cursor: pointer;
  transition: height .3s ease;

  ${(props) => props.isDragActive && dragActive};
  ${(props) => props.isDragReject && dragReject};
`;

const messageColors = {
  default: 'var(--medium-contrast-color)',
  error: 'var(--error-color)',
  success: 'var(--success-color)',
};

export const UploadMessage = styled.p`
  color: ${(props) => messageColors[props.type || 'default']};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 0;
`;
