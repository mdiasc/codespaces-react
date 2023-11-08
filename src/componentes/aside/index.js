import styled from 'styled-components';

const AsidePage = style.div`
background-color: #fdcb7b;
height: 10vh;
display: flex;
align-items: left;
justify-content: center;
font-size: calc(10px + 2vmin);
color: white;
padding: 5px;
width: 100%;
`
function Aside(){
  return(
    <AsidePage>
    <h3>Consulte a sua solução Cloud</h3>
    </AsidePage>
  )

}
