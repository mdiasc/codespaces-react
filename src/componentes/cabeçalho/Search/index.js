import styled from 'styled-components';
import search from '../../../imagens/search.svg';
  
const SearchStyle = styled.div`
  display:flex;  
  align-items: left;

  img{
    width: 2rem;
    margin: 0;
  }
`
function Search(){
    return(
       <SearchStyle>
        <img src={search} className="search" alt= "search" />
       </SearchStyle>
        
    

    );
}
export default Search