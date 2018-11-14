import { injectGlobal } from "styled-components";

/* eslint no-unused-expressions: 0 */
injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Roboto');
  html,
  body {
    font-family: 'Roboto', sans-serif;
    height: 100%;
    width: 100%;
    background-color: #e6ecf0;
  }
  #app {
    width: 100%;
    height: 100%;
  }
  .is-shadowed { box-shadow: 1px 1px 1px 0 #aaa; }
  .is-borderless { border: none !important; }
  
  .button,
  .card,
  .box,
  .modal-card-head,
  .modal-card-foot,
  .input, 
  .textarea,
  .notification,
  .navbar-dropdown,
  .select select { 
    border-radius: 0px;
  }

  .card-columns {
    column-count: 1;
    column-gap: 1rem;
  }

  .card-columns .card {
    display: inline-block;
    width: 100%;
    margin-bottom: 1rem;
  }

  .columns-6 {
    column-count: 6;
  }
  .columns-5 {
    column-count: 5;
  }
  .columns-4 {
    column-count: 4;
  }
  .columns-3 {
    column-count: 3;
  }
  .columns-2 {
    column-count: 2;
  }
  .columns-1 {
    column-count: 1;
  }

  @media (max-width: 768px) {
    .columns-6-mobile {
      column-count: 6;
    }
    .columns-5-mobile {
      column-count: 5;
    }
    .columns-4-mobile {
      column-count: 4;
    }
    .columns-3-mobile {
      column-count: 3;
    }
    .columns-2-mobile {
      column-count: 2;
    }
    .columns-1-mobile {
      column-count: 1;
    }
  }

  @media (min-width: 769px) { 
    .columns-6-tablet {
      column-count: 6;
    }
    .columns-5-tablet {
      column-count: 5;
    }
    .columns-4-tablet {
      column-count: 4;
    }
    .columns-3-tablet {
      column-count: 3;
    }
    .columns-2-tablet {
      column-count: 2;
    }
    .columns-1-tablet {
      column-count: 1;
    }
  }

  @media (min-width: 1024px) { 
    .columns-6-desktop {
      column-count: 6;
    }
    .columns-5-desktop {
      column-count: 5;
    }
    .columns-4-desktop {
      column-count: 4;
    }
    .columns-3-desktop {
      column-count: 3;
    }
    .columns-2-desktop {
      column-count: 2;
    }
    .columns-1-desktop {
      column-count: 1;
    }
  }

  @media (min-width: 1216px) { 
    .columns-6-widescreen {
      column-count: 6;
    }
    .columns-5-widescreen {
      column-count: 5;
    }
    .columns-4-widescreen {
      column-count: 4;
    }
    .columns-3-widescreen {
      column-count: 3;
    }
    .columns-2-widescreen {
      column-count: 2;
    }
    .columns-1-widescreen {
      column-count: 1;
    }
  }

  @media (min-width: 1408px) { 
    .columns-6-fullhd {
      column-count: 6;
    }
    .columns-5-fullhd {
      column-count: 5;
    }
    .columns-4-fullhd {
      column-count: 4;
    }
    .columns-3-fullhd {
      column-count: 3;
    }
    .columns-2-fullhd {
      column-count: 2;
    }
    .columns-1-fullhd {
      column-count: 1;
    }
  }
`;
