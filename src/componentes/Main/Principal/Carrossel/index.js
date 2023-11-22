import { Carousel } from "react-bootstrap";
import styled from "styled-components";
import imagem_1 from '../../../../imagens/arquive.png';
import imagem_2 from"../../../../imagens/cloudguide.png";
import imagem_3 from"../../../../imagens/foguete.png";
import imagem_4 from"../../../../imagens/protecao.png";

const CarrosselStyled =  styled(Carousel)`
  overflow: hidden;
  height: 500px;
  width: 700px;
  align-items: center;
  img{
    object-fit: cover;
   
  }
`

function CarrosselBootStrap(){
    return(
        <CarrosselStyled>
                <Carousel.Item>
                    <img className = "d-block w-100" src={imagem_1}  alt=""/>
                </Carousel.Item>
                <Carousel.Item>
                    <img className = "d-block w-100" src={imagem_2}  alt=""/>
                </Carousel.Item>
                <Carousel.Item>
                    <img className = "d-block w-100" src={imagem_3}  alt=""/>
                </Carousel.Item>
                <Carousel.Item>
                    <img className = "d-block w-100" src={imagem_4}  alt=""/>
                </Carousel.Item>
        </CarrosselStyled>
        


    )
}export default CarrosselBootStrap;