import { createGlobalStyle } from 'styled-components';

import 'react-circular-progressbar/dist/styles.css';

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
    --success-color: #00DD32;
    --error-color: #F14747;
  }

  body {
    color: var(--high-contrast-color);
    font-family: Inter, sans-serif;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
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

  input:not(.search):not(.checkbox),
  textarea {
    appearance: none;
    background: #fff;
    background-image: none;
    border: .05rem solid var(--low-contrast-color);
    border-radius: 4px;
    color: var(--high-contrast-color);
    display: block;
    font-size: 1rem;
    height: 48px;
    line-height: 1.2rem;
    max-width: 100%;
    outline: 0;
    padding: 8px;
    position: relative;
    transition: background .2s,border .2s,box-shadow .2s,color .2s;
    width: 100%;

    &:focus {
      border-color: var(--primary-color);
    }
  }

  textarea {
    font: inherit;
    height: 120px;
  }

  .btn {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: transparent;
    border: .05rem solid var(--low-contrast-color);
    border-radius: 4px;
    color: var(--low-contrast-color);
    cursor: pointer;
    display: inline-block;
    font-size: 1rem;
    outline: 0;
    padding: 8px 16px;
    height: 48px;
    text-align: center;
    text-decoration: none;
    transition: background .2s,border .2s,box-shadow .2s,color .2s;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    vertical-align: middle;
    white-space: nowrap;

    &.btn__primary {
      border-color: var(--primary-color);
      background-color: var(--primary-color);
      color: #fff;
    }

    &.btn__success {
      border-color: var(--success-color);
      background-color: var(--success-color);
      color: #fff;
    }

    &.btn__error {
      border-color: var(--error-color);
      background-color: var(--error-color);
      color: #fff;
    }

    &.btn__low-contrast {
      border-color: var(--low-contrast-color);
      background-color: var(--low-contrast-color);
      color: #fff;
    }

    &.btn__ghost {
      background-color: transparent;
      color: var(--low-contrast-color);
    }
  }

  .container {
    max-width: 1420px;
    margin: 0 auto;
    padding: 3% 5%;
  }

  .grid-layout {
    grid-template-columns: none;

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

  .fs--small {
    font-size: .8rem;
  }

  .ta--center {
    text-align: center;
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

  .jc--end {
    justify-content: flex-end;
  }

  .jc--space-between {
    justify-content: space-between;
  }

  .jc--flex-end {
    justify-content: flex-end;
  }

  .fd--column {
    flex-direction: column;
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

  .mt--small {
    margin-top: 8px;
  }

  .mt--normal {
    margin-top: 16px;
  }

  .mt--medium {
    margin-top: 32px;
  }

  .br--normal {
    border-radius: 8px;
  }

  .w--100 {
    width: 100%;
  }

  .hidden--mb {
    display: none;

    @media (min-width: 750px) {
      display: inherit;
    }
  }

  .row {
    position: relative;
    width: 100%;
  }
  
  .row [class^="col"] {
    float: left;
    margin: 8px 2%;
    min-height: 2px;
  }
  
  .col-1,
  .col-2,
  .col-3,
  .col-4,
  .col-5,
  .col-6,
  .col-7,
  .col-8,
  .col-9,
  .col-10,
  .col-11,
  .col-12 {
    width: 96%;
  }
  
  .col-1-sm {
    width: 4.33%;
  }
  
  .col-2-sm {
    width: 12.66%;
  }
  
  .col-3-sm {
    width: 21%;
  }
  
  .col-4-sm {
    width: 29.33%;
  }
  
  .col-5-sm {
    width: 37.66%;
  }
  
  .col-6-sm {
    width: 46%;
  }
  
  .col-7-sm {
    width: 54.33%;
  }
  
  .col-8-sm {
    width: 62.66%;
  }
  
  .col-9-sm {
    width: 71%;
  }
  
  .col-10-sm {
    width: 79.33%;
  }
  
  .col-11-sm {
    width: 87.66%;
  }
  
  .col-12-sm {
    width: 96%;
  }
  
  .row::after {
    content: "";
    display: table;
    clear: both;
  }
  
  @media only screen and (min-width: 750px) {
    .col-1 {
      width: 4.33%;
    }
  
    .col-2 {
      width: 12.66%;
    }
  
    .col-3 {
      width: 21%;
    }
  
    .col-4 {
      width: 29.33%;
    }
  
    .col-5 {
      width: 37.66%;
    }
  
    .col-6 {
      width: 46%;
    }
  
    .col-7 {
      width: 54.33%;
    }
  
    .col-8 {
      width: 62.66%;
    }
  
    .col-9 {
      width: 71%;
    }
  
    .col-10 {
      width: 79.33%;
    }
  
    .col-11 {
      width: 87.66%;
    }
  
    .col-12 {
      width: 96%;
    }
  }
`;

export default GlobalStyle;
