import styled from 'styled-components';
import PesquisaServico from './PesquisaServiços/index.js';
import CarrosselBootStrap from './Carrossel.js';

const PrincipalMain = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    min-height: 90vh;
    align-items: center;
    background-color: beige;
    color: white;
`  

function Principal(){
    return(
        <PrincipalMain>
         <CarrosselBootStrap/>
         <PesquisaServico />
        </PrincipalMain>
    )
}
export default Principal