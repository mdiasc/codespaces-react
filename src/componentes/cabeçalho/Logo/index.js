
import styled from 'styled-components';
import logo from '../../../imagens/aws.svg';

const Logotipo = styled.div`
  display:flex;  
  align-items: center;
  gap:20px;
  height: 100%;

  img{
    width: 10vh;
    align-self: left;
  }
  h3{
    font-size: 2vw;
    font-family: 'Amazon Eber', sans-serif;

  }
`
function Logo(){
  return(
    <Logotipo> 
      <img src={logo} className="logo" alt="logo" />
      <h3> Amazon Web services </h3>      
    </Logotipo>
   
  );
}
export default Logo