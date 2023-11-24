import styled from "styled-components"

const CardServicoStyled = styled.div`
    display: flex;
    justify-content: center;
    height: 35vh;
    width:70%;
    border-radius: 10px;
    background-color: #fc9c04;

    img{
        height: 80%;
        margin-left: 2%;
        width: 30%;
    }

    h2{
        font-family: poppins;
        font-size: 50px;
        color: #234f75;
    }

    h3{
        font-family: arial;
        font-size: 85%;
        color: black;
    }



`



function CardServico({imagemCartao, título, oqueFaz, userGuide, bestPractices}){
    return(
                     <CardServicoStyled>
                        <img src={imagemCartao} alt=""/>
                        <div>
                            <h2>{título}</h2>
                            <h3>{oqueFaz}</h3>
                            <h3>{userGuide}</h3>
                            <h3>{bestPractices}</h3>
                        </div>
                    </CardServicoStyled>
    )
}

export default CardServico;
