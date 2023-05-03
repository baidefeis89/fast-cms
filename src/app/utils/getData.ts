import { PageData } from '../types';

const getData = async (slug: string) => {
  const res = await fetch(process.env.BASE_URL + `/api/data?slug=${slug}`);
  const data = await res.json();

  return data as PageData;
};

export default getData;
