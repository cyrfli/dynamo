import { injectGlobal } from "styled-components";

/* eslint no-unused-expressions: 0 */
injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Roboto');
  html,
  body {
    font-family: 'Roboto', sans-serif;
    height: 100%;
    width: 100%;
    background-color: #f6f6f6;
  }
  #app {
    width: 100%;
    height: 100%;
  }
  .is-shadowed { box-shadow: 3px 3px 3px 0 #ccc; }
  .is-borderless { border: none !important; }
  
  .button,
  .box, 
  .input, 
  .textarea,
  .notification,
  .navbar-dropdown,
  .select select { 
    border-radius: 0;
  }
`;
