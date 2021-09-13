import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import propic from './propic.png'
import logo from './logo.png'
  
export const Nav = styled.nav`
  background: #FEDD00;
  height: 85px;
  display: flex;
  justify-content: space-between;
  padding-left: 0%;
  padding-right: 3%;
`;

  export const NavSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
`;

export const NavLink = styled(Link)`
  color: #808080;
  font-family: Lulo Clean;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #000000;
  }
`;

export const ProPic = styled.div`
  background-image: url(${propic});
  background-postion: center;
  background-size: cover;
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 50%;
`;

export const Logo = styled.div`
  background-image: url(${logo});
  width: 15rem;
  height: 10rem;
  background-size: cover;
  background-position: center;
  transform: scale(.4);
`;