import styled from 'styled-components';
import Cabecalho from "./componentes/cabeçalho";
import Main from './componentes/Main';

const AppCss= styled.div`
  text-align: center;
  width: 100vw;
  height: 100vh;
  background-color: white;
  font-family: 'Amazon Ember', sans-serif;
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

      
