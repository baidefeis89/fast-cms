import { SectionData } from '../components/Sections/types';

const getHomeData = async () => {
  const res = await fetch(process.env.BASE_URL + '/home.json');
  const data = await res.json();

  return data.sections as SectionData[];
};

export default getHomeData;
