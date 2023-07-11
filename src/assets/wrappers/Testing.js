import React from 'react'
import styled  from 'styled-components'


const Wrapper = styled.main`
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    height: var(--max-height);
    display: flex;
    align-items: center;
    margin: 1rem auto;
  }

  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
  }

  h1 {
    font-weight: 700;
    margin: 1rem 0;
    span {
      color: var(--primary-500);
    }
  }

  p {
    color: var(--grey-600);
  }

  .main-img {
    display: none;
  }
  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 1fr;
      column-gap: 3rem;
    }

    .main-img {
      display: block;
    }
  }
`;


export default Wrapper;
