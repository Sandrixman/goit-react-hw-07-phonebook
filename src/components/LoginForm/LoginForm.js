import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logIn } from 'redux/loginSlice/slice';
import { Form } from './LoginForm.styled';

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSabmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(logIn(form.elements.login.value));
    navigate('/phonebook', { replace: true });
    form.reset();
  };

  return (
    <Form onSubmit={handleSabmit}>
      <input type="text" name="login" />
      <button>Submit</button>
    </Form>
  );
};

export default LoginForm;
