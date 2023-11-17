import styled from 'styled-components';
import Logo from "./Logo";
import Menu from "./Menu";
import Search from "./Search";
import Login from './Login';

const HeadCabecalho = styled.div`
    background-color: #313c52;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: white;
    width: 100%;
    padding: 5px;
    div{ 
      display:flex;
      align-items: center;
    }
`
function Cabecalho() {
  return (
    <HeadCabecalho>
      <Logo />
      <Menu />
      <Search /> 
      <Login />
    </HeadCabecalho>
  );
}
export default Cabecalho
