import { styled } from "styled-components";

import SVG from "react-inlinesvg";
import { NavLink } from "react-router-dom";
import { IconCart, IconLogo } from "./Icons";
import Modal from "./Modal";
import Cart from "../features/cart/Cart";

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-dark);
`;

const NavList = styled.ul`
  display: flex;
  column-gap: 2rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 1.4rem;
`;

const NavItem = styled(NavLink)`
  color: var(--color-white-2);
  font-size: 1.3rem;

  &:hover {
    color: var(--color-primary);
  }

  &.active {
    color: var(--color-primary);
  }
`;

const HeaderIcon = styled(NavLink)`
  cursor: pointer;
`;

function Nav({ type }) {
  return (
    <Modal>
      {type === "header" && (
        <StyledNav>
          <HeaderIcon to="/home">
            <SVG src={IconLogo} />
          </HeaderIcon>
          <NavList>
            <NavItem to="/home">Home</NavItem>

            <NavItem to="/headphones">Headphones</NavItem>

            <NavItem to="/speakers">speakers</NavItem>

            <NavItem to="/earphones">earphones</NavItem>
          </NavList>

          <Modal.Open opens="cart">
            <HeaderIcon>
              <SVG src={IconCart} />
            </HeaderIcon>
          </Modal.Open>

          <Modal.Window name="cart">
            <Cart />
          </Modal.Window>
        </StyledNav>
      )}

      {type === "footer" && (
        <StyledNav>
          <HeaderIcon to="/home">
            <SVG src={IconLogo} />
          </HeaderIcon>
          <NavList>
            <NavItem to="/home">Home</NavItem>

            <NavItem to="/headphones">Headphones</NavItem>

            <NavItem to="/speakers">speakers</NavItem>

            <NavItem to="/earphones">earphones</NavItem>
          </NavList>
        </StyledNav>
      )}
    </Modal>
  );
}

export default Nav;
