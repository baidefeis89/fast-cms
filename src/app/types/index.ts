import { SectionData } from '../components/Sections/types';

export interface ImageData {
  src: string;
  alt: string;
}
export interface MenuNavItem {
  title: string;
  link: string;
}

export interface PageData {
  sections: SectionData[];
}
