import styled from 'styled-components';

const NavEstilo = styled.div`
    padding: 20px;
    display: flex;
    background-color: #313c52;
    min-height: 90vh;
    font-size: 20px;
    justify-content: center;
    width: 30%;
    color: white;
`
function Nav(){
    return(
    <NavEstilo>
        <h2>Every support to your business</h2>
    </NavEstilo>
    );
}

export default Nav