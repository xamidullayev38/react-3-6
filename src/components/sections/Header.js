import styled from "styled-components";

import search from "../../asstes/img/icons/Search.png";
import logo from "../../asstes/img/webp/logo.webp";
import cart from "../../asstes/img/icons/Buy.png";


const HeaderWrapper = styled.header`
  width: 100%;
  background: #ffffff;
  border-bottom: 1px solid #eee;
`;

const Nav = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 16px 24px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Menu = styled.ul`
  display: flex;
  gap: 32px;
  list-style: none;
`;

const NavLink = styled.li`
  font-size: 16px;
  font-weight: 500;
  color: #111;
  cursor: pointer;

  &:hover {
    color: #16a34a;
  }
`;

const Logo = styled.div`
  img {
    height: 42px;
    object-fit: contain;
  }
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  background: #f1f5f9;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  img {
    width: 18px;
    height: 18px;
  }

  &:hover {
    background: #e2e8f0;
  }
`;

const RegisterButton = styled.button`
  padding: 10px 20px;
  background: #16a34a;
  color: white;
  font-size: 14px;
  font-weight: 600;

  border: none;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background: #15803d;
  }
`;

function Header() {
  return (
    <HeaderWrapper>
      <Nav>
        {/* Left menu */}
        <Menu>
          <NavLink>About Us</NavLink>
          <NavLink>Service</NavLink>
          <NavLink>Menu</NavLink>
          <NavLink>Contact</NavLink>
        </Menu>

        <Logo>
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
        </Logo>

        <Actions>
          <Icon>
            <img src={search} alt="search" />
          </Icon>
          <Icon>
            <img src={cart} alt="cart" />
          </Icon>
          <RegisterButton>Register Now</RegisterButton>
        </Actions>
      </Nav>
    </HeaderWrapper>
  );
}

export default Header;
