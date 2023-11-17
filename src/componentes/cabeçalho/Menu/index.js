import styled from 'styled-components';
const servicesMenu = ["EC2", "CloudFront", "ElastiCache", "VPC", "S3"];

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