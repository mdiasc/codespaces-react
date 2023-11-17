import styled from "styled-components";
import { servicos } from "./dados";
import { useState } from "react";


const PesquisaServicoStyled = styled.section`
display: flex;
width: 90vw;
height: 100vh;
margin: 2px;
flex-direction: column;
align-items: center;
gap: 2vw;
font-family: 'Amazon Eber', sans-serif;
color: #313c52;
`
 const Input = styled.input`

`
const CardServico = styled.div`
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



function PesquisaServico(){
    const[servicosEncontrados, setServicosEncontrados] =useState([])
    return(
        <PesquisaServicoStyled>
            <h1>Pesquise serviços disponíveis</h1>
            <Input
               onChange={ 
                 evento =>{
                    const textoDigitado = evento.target.value;
                    const resultadoBusca = servicos.filter( servicos => servicos.título.includes(textoDigitado))
                    setServicosEncontrados(resultadoBusca)
                 }
               }
               />
            {
                servicosEncontrados.map(servico => (
                    <CardServico>
                        <img src={servico.imagemCartao} alt=""/>
                        <div>
                            <h2>{servico.título}</h2>
                            <h3>{servico.oqueFaz}</h3>
                            <h3>{servico.userGuide}</h3>
                            <h3>{servico.bestPractices}</h3>
                        </div>
                    </CardServico>
                ))
            }
        </PesquisaServicoStyled>
    )
}
export default PesquisaServico