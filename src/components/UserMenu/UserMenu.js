import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/loginSlice/slice';
import { UserMenuStyled } from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(state => state.login.login);

  return (
    <UserMenuStyled>
      <div>Hello {userName}</div>
      <button onClick={() => dispatch(logOut())}>Log out</button>
    </UserMenuStyled>
  );
};

export default UserMenu;
