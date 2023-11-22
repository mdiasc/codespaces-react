import styled from 'styled-components';

const NavEstilo = styled.div`
    padding: 20px;
    display: flex;
    background-color: #ffc870;
    height: 90vh;
    align-items: left;
    font-size: 20px;
    justify-content: center;
    width: 30%;
`
function Nav(){
    return(
    <NavEstilo>
        <h2>Every support to your business</h2>
    </NavEstilo>
    );
}

export default Nav