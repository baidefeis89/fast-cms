import { PageData } from '../types';
import data from '../data/pages.json';

const getData = async (slug: string) => {
  const pageData = data.pages.find((page) => page.slug === slug);

  return (pageData || { sections: [] }) as PageData;
};

export default getData;
