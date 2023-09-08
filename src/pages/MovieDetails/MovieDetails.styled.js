import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
export const FilmCard = styled.div`
  margin-top: 10px;
  margin-left: 10px;
  display: flex;
  gap: 40px;
`;
export const Title = styled.h2`
  margin: 0;
`;
export const NavButton = styled(NavLink)`
  text-decoration: none;
  margin: 15px;
  background-color: burlywood;
  border-radius: 10%;
  padding: 0px 5px 0px 5px;
`;
export const StyledNav = styled.nav`
  display: flex;
  gap: 20px;
  margin: 20px;
`;
export const StyledLink = styled(Link)`
  text-decoration: none;

  &:hover,
  &:focus {
    color: palevioletred;
  }
  &:active {
    color: red;
  }
`;
