import styled from 'styled-components';

export const Container = styled.ul``;

export const FileInfo = styled.div`
  max-width: 500px;
  padding: 36px 22px;
`;

export const Preview = styled.div`
  width: 200px;
  height: 200px;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%; 
`;
