'use client';

import { useEffect, useState, useCallback } from 'react';

export const useOverflowCheck = (
  ref: React.MutableRefObject<HTMLElement | null>
) => {
  const [isOverflowing, setIsOverflowing] = useState(true);
  const [lastNavWidth, setLastNavWidth] = useState(
    ref.current?.clientWidth || 0
  );
  const [contentWithoutNav, setContentWithoutNav] = useState(0);

  useEffect(() => {
    if (ref.current && ref.current.clientWidth >= ref.current.scrollWidth) {
      setIsOverflowing(false);
    }
  }, []);

  useEffect(() => {
    if (ref.current && isOverflowing) {
      const totalWidth = Array.from(
        ref.current.parentElement?.children || []
      ).reduce((acc, child) => acc + child.clientWidth, 0);
      setContentWithoutNav(totalWidth + 50);
    }
  }, [isOverflowing, ref]);

  const checkOverflow = useCallback(() => {
    if (ref.current) {
      if (
        ref.current.clientWidth < ref.current.scrollWidth &&
        ref.current.clientWidth < lastNavWidth
      ) {
        setIsOverflowing(true);
      } else if (
        ref.current.clientWidth > lastNavWidth ||
        contentWithoutNav + lastNavWidth < window.innerWidth
      ) {
        setIsOverflowing(false);
      }

      if (ref.current.clientWidth !== 0) {
        setLastNavWidth(ref.current.clientWidth);
      }
    }
  }, [lastNavWidth, contentWithoutNav, ref]);

  useEffect(() => {
    window.addEventListener('resize', checkOverflow);

    return () => {
      window.removeEventListener('resize', checkOverflow);
    };
  }, [checkOverflow]);
  return isOverflowing;
};
