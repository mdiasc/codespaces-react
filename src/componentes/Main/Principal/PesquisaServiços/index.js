import styled from "styled-components";
import { servicos } from "./dados";
import { useState } from "react";
import CardServico from "./CardServicos";


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
const Título = styled.h1`

color: ${props => props.corFonte || 'blue'};


`

function PesquisaServico(){
    const[servicosEncontrados, setServicosEncontrados] =useState([])
    return(
        <PesquisaServicoStyled>
            <Título corFonte = 'black'>Pesquise serviços disponíveis/</Título>
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
                    <CardServico
                       título={servicos.título}
                       oqueFaz={servicos.oqueFaz}
                       userGuide={servicos.userGuide}
                       bestPractices={servicos.bestPractices}
                       imagemCartao={servicos.imagemCartao}
                    
                    
                    
                    />
                ))
            }
        </PesquisaServicoStyled>
    )
}
export default PesquisaServico