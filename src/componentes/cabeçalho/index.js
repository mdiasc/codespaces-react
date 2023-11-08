import styled from 'styled-components';
import Logo from "../Logo";
import Menu from "../Menu";
import Search from "../Search";

const HeadCabecalho = styled.div`
    background-color: #313c52;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 30;
    color: white;
    padding: 5px;
    width: 100%;
    div{ 
      display:flex;
      align-items: center;
    }
`
function Cabecalho() {
  return (
    <HeadCabecalho>
      <Logo />
      <div> 
      <h3>Cloud Computing service From AMAZON</h3>
        <Menu />
        <Search />
      </div>
    </HeadCabecalho>
  );
}
export default Cabecalho
