import {useState, useEffect, useRef, useCallback} from 'react';

import {IUseStickyReturn} from './types';

const useSticky = (defaultSticky = false): IUseStickyReturn => {
  const stickyContainerRef = useRef<HTMLElement | null>(null);
  const [isSticky, setIsSticky] = useState(defaultSticky);

  const toggleSticky = useCallback(
    (params) => {
      if (params) {
        const {top, bottom} = params;

        if (top <= 0 && bottom > 2 * 68) {
          !isSticky && setIsSticky(true);
        } else {
          isSticky && setIsSticky(false);
        }
      }
    },
    [isSticky],
  );

  useEffect(() => {
    const handleScroll = () => {
      toggleSticky(stickyContainerRef.current?.getBoundingClientRect());
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [toggleSticky]);

  return {stickyContainerRef, isSticky};
};

export default useSticky;
