import { useEffect, useRef } from 'react';

export const useClickOutside = (onClickOutside: () => void) => {
  const domNode = useRef<any>();

  const handleClickOutside = (e: Event) => {
    if (domNode && domNode.current.contains(e.target)) {
      return;
    }
    onClickOutside();
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClickOutside]);

  return domNode;
};
