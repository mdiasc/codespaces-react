
import styled from 'styled-components';
import logo from '../../imagens/aws.svg';

const Logotipo = styled.div`
  display:flex;  
  align-items: center;
  gap:20px;
  img{
    width: 10vh;
    align-self: left;
  }
  h3{

  }
`
function Logo(){
  return(
    <Logotipo> 
      <img src={logo} className="logo" alt="logo" />
      
    </Logotipo>
   
  );
}
export default Logo