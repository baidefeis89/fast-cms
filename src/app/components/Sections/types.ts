export enum BackgroundType {
  'image',
  'color',
  'gradient',
  'none'
}

export interface BackgroundImage {
  type: BackgroundType.image;
  values: {
    url: string;
  };
}

export interface BackgroundColor {
  type: BackgroundType.color;
  values: {
    color: string;
  };
}

export interface BackgroundGradient {
  type: BackgroundType.gradient;
  values: {
    from: string;
    to: string;
  };
}

export interface BackgroundNone {
  type: BackgroundType.none;
  values: undefined;
}

export type Background =
  | BackgroundImage
  | BackgroundColor
  | BackgroundGradient
  | BackgroundNone;

export enum ElementType {
  Text,
  Image,
  Video
}

export interface TextElement {
  type: ElementType.Text;
  value: {
    title: string;
    titleStyles?: string;
    body: string;
    bodyStyles?: string;
  };
}

export interface ImageElement {
  type: ElementType.Image;
  value: {
    url: string;
    alt: string;
  };
}

export interface VideoElement {
  type: ElementType.Video;
  value: {
    url: string;
    alt: string;
  };
}

export type Element = TextElement | ImageElement | VideoElement;
export interface SectionData {
  id: number;
  title: string;
  background: Background;
  elements: {
    content: Element;
  }[];
}
