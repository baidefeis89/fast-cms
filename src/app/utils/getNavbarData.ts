import { NavbarProps } from '../components/Navbar';

const getNavbarData = async () => {
  const res = await fetch(process.env.BASE_URL + '/navbar.json');
  const data = await res.json();

  return data as NavbarProps;
};

export default getNavbarData;
