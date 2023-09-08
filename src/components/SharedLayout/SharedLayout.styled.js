import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
export const StyleNav = styled(NavLink)`
  text-decoration: none;

  &:hover,
  &:focus {
    color: palevioletred;
  }
  &:active {
    color: red;
  }
`;
export const Container = styled.div`
  margin: 15px;
`;
