import styled from "styled-components"
import PesquisaServico from "./PesquisaServiços"

const MainCentro = styled.div`
  width: 80vw;
  align-items: center;
  
`

function Main(){
    return(
      
    <MainCentro>
    <PesquisaServico />
    </MainCentro>
   
    )
}
export default Main