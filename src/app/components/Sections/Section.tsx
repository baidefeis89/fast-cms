import { FC } from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import { Background, BackgroundType } from './types';

interface ElementProps {
  background: Background;
  children: React.ReactNode;
}
const Section: FC<ElementProps> = ({ background, children }) => {
  const containerBackground =
    background.type === BackgroundType.color ? background.values.color : '';

  return (
    <div
      className={classNames(
        'relative min-h-[256px] m-auto p-8 lg:p-0 mb-16',
        containerBackground,
        {
          'max-w-[800px]': background.type !== BackgroundType.image
        }
      )}
    >
      {background.type === BackgroundType.image && (
        <Image
          src={background.values.url}
          alt="background"
          style={{ objectFit: 'cover', position: 'absolute' }}
          fill
        />
      )}
      <div className="relative flex flex-col gap-10">{children}</div>
    </div>
  );
};

export default Section;
