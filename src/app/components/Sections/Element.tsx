import { FC } from 'react';
import Image from 'next/image';
import { Element, ElementType } from './types';

interface ElementProps {
  data: Element;
  // children: React.ReactNode;
}
const Element: FC<ElementProps> = ({ data }) => {
  return (
    <div className="relative">
      {data.type === ElementType.Text && (
        <>
          <h2 className="text-3xl text-center mb-4 text-aq-700">
            {data.value.title}
          </h2>
          <p>{data.value.body}</p>
        </>
      )}
      {data.type === ElementType.Image && (
        <Image
          src={data.value.url}
          alt={data.value.alt}
          width={500}
          height={500}
          style={{ margin: '0 auto', objectFit: 'cover' }}
        />
      )}
      {data.type === ElementType.Video && (
        <iframe
          width="560"
          height="315"
          src={data.value.url}
          title="YouTube video player"
          frameBorder="0"
          style={{ margin: '0 auto' }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
        />
      )}
    </div>
  );
};

export default Element;
