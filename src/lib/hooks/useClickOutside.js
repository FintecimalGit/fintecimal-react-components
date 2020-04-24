import { useEffect } from 'react';

const useClickOutside = (ref, callback) => {
  const onClick = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('click', onClick);

    return () => {
      document.removeEventListener('click', onClick);
    };
  });
};

export default useClickOutside;