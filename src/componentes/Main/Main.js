import styled from "styled-components"
import Principal from "./Principal/Principal.js"
import Nav from "./Nav/Nav.js"

const MainCentro = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  background-color: beige;
  min-height: 90vh;  
`

function Main(){
    return(      
      <MainCentro>
        <Nav/>
        <Principal/>
      </MainCentro>   
    )
}
export default Main