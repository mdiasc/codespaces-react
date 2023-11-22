import styled from "styled-components"
import PesquisaServico from "./Principal/PesquisaServiços"
import CarrosselBootStrap from "./Principal/Carrossel"
import Principal from 
const MainCentro = styled.div`
  width: 70vw;
  align-items: center;
  background-color: yellow;
  
`

function Main(){
    return(
      
    <MainCentro>
      <Principal/>
      <CarrosselBootStrap/>
      <PesquisaServico />
    </MainCentro>
   
    )
}
export default Main