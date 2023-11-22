import styled from "styled-components"
import { servicos } from "../dados";

const CardServicoStyled = styled.div`
    display: flex;
    height: 35%;
    width:70%;
    border-radius: 10px;
    background-color: #fc9c04;

    img{
        height: 80%;
        margin-left: 2%;
        width: 50%;
    }
`


function CardServico({imagemCartao, título, oqueFaz, userGuide, bestPractices}){
    return(
                     <CardServicoStyled>
                        <img src={servicos.imagemCartao} alt=""/>
                        <div>
                            <h2>{servicos.título}</h2>
                            <h3>{servicos.oqueFaz}</h3>
                            <h3>{servicos.userGuide}</h3>
                            <h3>{servicos.bestPractices}</h3>
                        </div>
                    </CardServicoStyled>
    )
}

export default CardServico;
