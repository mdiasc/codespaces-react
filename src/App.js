import styled from 'styled-components';
import Cabecalho from "./componentes/cabeçalho";
import Main from './componentes/Main/Main.js';

const AppCss= styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100vw;
  height: 100vh;
  background-color: white;
  font-family: 'Amazon Ember', sans-serif;
  align-items: center;
`

function App() {
  return (
    <AppCss>  
        <Cabecalho/>        
        <Main/>  
    </AppCss>  
  );
}
export default App;

      
