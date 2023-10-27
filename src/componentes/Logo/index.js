import './estilo.css'
import logo from '../../imagens/aws-svgrepo-com.svg';

function Logo(){
  return(
    <> 
    <img src={logo} className="logo" alt="logo" />
    <h1>Cloud Computing service From AMAZON</h1>
    </>
   
  );
}
export default Logo