import styled from 'styled-components';

const NavEstilo = styled.div`
padding: 20px;
    display: flex;
    background-color: #ffc870;
    min-height: 30vh;
    align-items: center;
    font-size: calc(5px + 1vmin);
    flex-direction: row;
    justify-content: center;
`
function nav(){
    return(
        <nav className="App-esquerdo">
        <h2>Every support to your business</h2>
      </nav>
    );
}