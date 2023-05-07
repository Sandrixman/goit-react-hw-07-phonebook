import { useSelector } from 'react-redux';
import UserMenu from 'components/UserMenu/UserMenu';
import { LinkStyled, Nav } from './AppBar.styled';

const AppBar = () => {
  const isLoggedIn = useSelector(state => state.login.isLoggedIn);

  return (
    <Nav>
      {!isLoggedIn && <LinkStyled to="/login">Log in</LinkStyled>}
      {isLoggedIn && <UserMenu />}
    </Nav>
  );
};

export default AppBar;
