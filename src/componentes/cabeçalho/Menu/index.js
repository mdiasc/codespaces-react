import styled from 'styled-components';
const servicesMenu = ["Disaster Recovery", "Migration", "Baas", "Clients"];

const MenuStyle = styled.ul`
  list-style-type: none;
  display:flex;
  gap: 20px;
`

function Menu() {

  return (
    <MenuStyle>
      {servicesMenu.map((item) => (
        <li className="menu-iten">{item}</li>
      ))}
    </MenuStyle>
  );
}

export default Menu