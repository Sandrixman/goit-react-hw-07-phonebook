import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const LinkStyled = styled(Link)`
  display: inline-block;
  padding: 5px 10px;
  border: 1px solid;
  border-radius: 10px;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  padding: 10px;
  border-bottom: 1px solid #000;
`;
