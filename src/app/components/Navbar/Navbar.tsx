'use client';

import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { FC, useRef, useState } from 'react';
import { MenuNavItem, ImageData } from '../../types';
// import { useOverflowCheck } from './useOverflowCheck';
import HamburguerIcon from './components/HamburguerIcon';
import OffCanvasMenu from './components/OffCanvasMenu';

export interface NavbarProps {
  image: ImageData;
  title: string;
  menuNav: MenuNavItem[];
}
const Navbar: FC<NavbarProps> = ({ image, title, menuNav }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const linksContainer = useRef<HTMLUListElement>(null);
  // const isOverflowing = useOverflowCheck(linksContainer);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <OffCanvasMenu menuNav={menuNav} onClose={toggleMenu} open={isMenuOpen} />
      <nav
        className={classNames(
          'flex items-center gap-2 bg-white w-full p-2 shadow-sm lg:justify-between text-aq-950',
          {
            // 'justify-between': !isOverflowing
          }
        )}
      >
        <button
          onClick={toggleMenu}
          aria-label="Toggle navigation"
          className="lg:hidden"
          // className={classNames({ hidden: !isOverflowing })}
        >
          <HamburguerIcon />
        </button>
        <div className="flex items-center cursor-pointer shrink-0 min-w-fit">
          <Image
            src={image.src}
            alt={image.alt}
            // className="dark:invert"
            width={40}
            height={40}
            priority
          />
          <h1 className="ml-4 font-bold shrink-0">{title}</h1>
        </div>
        <ul
          ref={linksContainer}
          className={classNames('hidden lg:!flex gap-4 overflow-hidden', {
            // hidden: isOverflowing
          })}
        >
          {menuNav.map((item) => (
            <li className="block box-border shrink-0" key={item.link}>
              <Link href={item.link}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
