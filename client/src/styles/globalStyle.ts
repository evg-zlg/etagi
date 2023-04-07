import { createGlobalStyle } from 'styled-components';
import { baseTheme } from './theme';

const GlobalStyles = createGlobalStyle`
* {
  padding: 0px;
  margin: 0px;
  border: 0px;
}
*,
*:before,
*:after {
  box-sizing: border-box;
}
html, body {
  height: 100%;
  min-width: 420px;

}
body {
  font-family: ${baseTheme.fontFamily};
  background-color: ${baseTheme.colors.primaryBg};
  color: ${baseTheme.colors.primaryText};
  text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased; 
  -moz-osx-font-smoothing: grayscale;
}
#root {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
 
  > main {
    flex: 1 1 auto;
  }
}

input,
button,
textarea {
  font-family: ${baseTheme.fontFamily};
  font-size: inherit;
  outline: none;
}
button {
  cursor: pointer;
  color: inherit;
  background-color: inherit;
}
a {
  color: inherit;
}
a:link,
a:visited {
  text-decoration: none;
}
a:hover {
  text-decoration: none;
}
ul li {
  list-style: none;
}
img {
  vertical-align: top;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: inherit;
  font-size: inherit;
}

`;

export { GlobalStyles };
