import styled from "styled-components";
import { Button } from '@mui/material';



const  LoginStyle = styled.div`
 background-color: #fc9d08;
 `
  


function Login (){
    return(
        <LoginStyle>
           
         <Button variant="contained">Sign in</Button>
            
           
        </LoginStyle>
    )
}
export default Login
