import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 16px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
  }

  ol, ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  strong {
    font-weight: bold;
  }

  :root {
    --high-contrast-color: #324552;
    --medium-contrast-color: #566976;
    --low-contrast-color: #7D92A1;
    --primary-color: #0F5EF7;
    --component-outline-color: #F3F3FF;
    --component-bg-color: #F3F3FF;
  }

  body {
    color: var(--high-contrast-color);
    font-family: Inter, sans-serif;
  }

  ::-webkit-input-placeholder { /* Edge */
    color: var(--low-contrast-color);
  }
  
  :-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: var(--low-contrast-color);
  }
  
  ::placeholder {
    color: var(--low-contrast-color);
  }

  input,
  button {
    &:focus {
      outline: none;
    }
  }

  button {
    border: none;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;
    background: transparent;
    color: inherit;
    font: inherit;
    line-height: normal;
    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;
    -webkit-appearance: none;
  }

  a {
    color: currentColor;
    text-decoration: none;
  }

  .container {
    max-width: 1420px;
    margin: 0 auto;
    padding: 3% 5%;
  }

  .grid-layout {
    grid-template-columns: repeat(2, 1fr);

    @media (min-width: 750px) {
      grid-template-columns: 1.3fr 2fr 1fr 3fr auto;
    }
  }

  .ga--1-2 {
    grid-area: 1 / 2;
  }

  .ga--1-3 {
    grid-area: 1 / 3;
  }

  .ga--1-4 {
    grid-area: 1 / 4;
  }

  .ga--1-2-span-3 {
    grid-area: 1 / 2 / span 1 / span 3;
  }

  .fw--bold {
    font-weight: 600;
  }

  .fw--light {
    font-weight: 300;
  }

  .avatar {
    width: 36px;
    height: 36px;
    border-radius: 8px;
  }

  .c--primary {
    color: var(--primary-color);
  }

  .c--low-contrast {
    color: var(--low-contrast-color);
  }

  .bg--component-outline {
    background-color: var(--component-outline-color);
  }

  .d--inline {
    display: inline;
  }

  .d--inline-block {
    display: inline-block;
  }

  .d--block {
    display: block;
  }

  .d--flex {
    display: flex;
  }

  .d--grid {
    display: grid;
  }

  .ai--center {
    align-items: center;
  }

  .jc--space-between {
    justify-content: space-between;
  }

  .jc--flex-end {
    justify-content: flex-end;
  }

  .mr--small {
    margin-right: 8px;
  }

  .mr--normal {
    margin-right: 16px;
  }

  .mb--small {
    margin-bottom? 8px;
  }

  .mb--normal {
    margin-bottom: 16px;
  }

  .mb--medium {
    margin-bottom: 32px;
  }

  .hidden--mb {
    display: none;

    @media (min-width: 750px) {
      display: inherit;
    }
  }
`;

export default GlobalStyle;
