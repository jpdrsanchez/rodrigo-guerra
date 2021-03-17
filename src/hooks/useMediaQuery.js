import { useEffect, useState } from 'react';

const useMediaQuery = () => {
  const [mobile, setMobile] = useState(null);
  const [tablet, setTablet] = useState(null);
  const [desktop, setDesktop] = useState(null);

  useEffect(() => {
    const getMedia = () => {
      if (window.matchMedia('(max-width: 767px)').matches) {
        setMobile(true);
        setTablet(false);
        setDesktop(false);
      } else if (
        window.matchMedia('(min-width: 768px) and (max-width: 1023px)').matches
      ) {
        setMobile(false);
        setTablet(true);
        setDesktop(false);
      } else {
        setMobile(false);
        setTablet(false);
        setDesktop(true);
      }
    };
    getMedia();
    window.addEventListener('resize', getMedia);

    return () => {
      window.removeEventListener('resize', getMedia);
    };
  }, []);

  return { mobile, tablet, desktop };
};

export default useMediaQuery;
