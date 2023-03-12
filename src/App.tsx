import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  *{
    font-family: 'Noto Sans KR', sans-serif;
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
    color:inherit;
  }
  body{
    min-height: 100vh;
  }
  
`;

function App() {
  return (
    <>
      <GlobalStyle />
    </>
  );
}

export default App;
