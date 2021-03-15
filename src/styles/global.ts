import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @media(max-width: ${props => props.theme.sizes.md}) {
    html {
      font-size: 93.75%;
    }
  }

  @media(max-width: ${props => props.theme.sizes.sm}) {
    html {
      font-size: 87.50%;
    }
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
  }

  body, input, textarea, button {
    font: 400 1rem "Inter", sans-serif
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

`
