import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: ${(props) => props.theme.fonts.main};
    background-color: ${(props) => props.theme.colors.backgroundMain};
    color: ${(props) => props.theme.colors.text};
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  a:link{
    text-decoration: none;
  }
`

export default GlobalStyles
