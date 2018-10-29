import { injectGlobal } from 'styled-components';
import 'font-awesome/css/font-awesome.css';

injectGlobal`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
}

body{
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
  font-family: 'Open Sans', sans-serif;
}
  
section{
  width: 100%;
  max-width: 80%;
  height: 100%;
  margin: 0 auto;
}

.flexView{
  display: flex;
  flex-direction: column;
}

`;
