import styled from 'styled-components';
import search from '../../imagens/search.svg';
  
const SearchStyle = styled.div`
img{
    width: 5px;
}


`
function Search(){
    return(
       
        <img src={search} className="search" alt= "search" />
    

    );
}
export default Search