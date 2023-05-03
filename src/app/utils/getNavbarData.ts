import { NavbarProps } from '../components/Navbar';
import data from '../data/navbar.json';

const getNavbarData = async () => {
  return data as NavbarProps;
};

export default getNavbarData;
