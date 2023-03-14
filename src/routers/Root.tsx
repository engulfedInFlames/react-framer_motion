import { Link, Outlet } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
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
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
      &:active {
        box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
      }
  }
  button {
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
      &:active {
        box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
      }
  }
  body {
    min-height:200vh;
    background: #C02425;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #F0CB35, #C02425);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #F0CB35, #C02425); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  }
`;

const Header = styled.div`
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 48px;
  font-weight: bold;
  font-style: italic;
`;

const Title = styled.span`
  text-shadow: 0px 4px 3px rgba(0, 0, 0, 0.5), 0px 8px 13px rgba(0, 0, 0, 0.4),
    0px 18px 23px rgba(0, 0, 0, 0.2);
`;

const Nav = styled.nav`
  width: 420px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: center;
  gap: 8px;
  color: #d05a2a;
  font-size: 24px;
  margin: 0 auto;
  margin-bottom: 32px;
  a {
    width: 140px;
    text-align: center;
    background-color: white;
    border-radius: 8px;
    padding: 6px 6px;
    &:last-child {
      grid-column: 2 / 3;
    }
  }
`;

function Root() {
  return (
    <>
      <GlobalStyle />
      <Header>
        <Title>Learning Framer Motion</Title>
      </Header>
      <Nav>
        <Link to="boxes">Boxes</Link>
        <Link to="drag-box">Drag Box</Link>
        <Link to="svg">SVG</Link>
        <Link to="presence1">Presence 1</Link>
        <Link to="presence2">Presence 2</Link>
        <Link to="Layout">Layout</Link>
        <Link to="final">Final</Link>
      </Nav>

      <Outlet />
    </>
  );
}

export default Root;
