import Link from 'next/link';
import { MenuNavItem } from '@/app/types';
import classNames from 'classnames';

interface OffCanvasMenuProps {
  open: boolean;
  menuNav: MenuNavItem[];
  onClose: VoidFunction;
}
const OffCanvasMenu = ({ menuNav, onClose, open }: OffCanvasMenuProps) => {
  return (
    <>
      {open && (
        <div
          className="fixed left-0 top-0 w-full h-full bg-backdrop backdrop-blur-[15px] z-20"
          onClick={onClose}
        />
      )}

      <div
        className={classNames(
          'z-30 fixed tablet:absolute top-0 h-screen bg-white drop-shadow-sm whitespace-nowrap w-[279px] transition-all',
          { '-left-[279px]': !open, 'left-0': open }
        )}
      >
        <ul className="flex flex-col gap-2 overflow-hidden">
          {menuNav.map((item) => (
            <Link key={item.link} href={item.link}>
              <li
                className="block box-border shrink-0 pl-4 py-3 hover:bg-aq-200 hover:text-aq-700 transition-all cursor-pointer"
                key={item.link}
              >
                {item.title}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
};

export default OffCanvasMenu;
