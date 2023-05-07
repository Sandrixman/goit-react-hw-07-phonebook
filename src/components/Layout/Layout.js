// import { Outlet } from 'react-router-dom';
// import AppBar from 'components/AppBar/AppBar';
import { Section } from './Layout.styled';
import { Phonebook } from 'pages';

const Layout = () => {
  return (
    <Section>
      {/* <AppBar />
      <Outlet /> */}
      <Phonebook />
    </Section>
  );
};

export default Layout;
