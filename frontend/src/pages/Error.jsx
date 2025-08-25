import { useState, useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Toolbar from '../components/Toolbar';
import Input from '../components/Input';
import { MdTune } from 'react-icons/md';
import { useTranslation } from 'react-i18next';

export default function Error() {
  const [showNavbar, setShowNavbar] = useState(true);
  const lastY = useRef(0);
  const { t } = useTranslation();

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (y < lastY.current) {
        setShowNavbar(true);
      } else if (y > lastY.current && y > 80) {
        setShowNavbar(false);
      }
      lastY.current = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="font-sans bg-white text-gray-800 min-h-screen flex flex-col">
      {/* Navbar with smooth appearance */}
      <div className={`transition-transform duration-300 ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}>
        <Navbar />
      </div>

      {/* Error Section */}
      <section className="flex flex-col items-center justify-center flex-grow px-6 py-24 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight">
          {t('error.title')}
        </h1>
        <p className="text-lg text-gray-600 max-w-lg mb-8">
          {t('error.message')}
        </p>

        {/* Search Bar */}
        <div className="max-w-md w-full">
          <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 shadow-sm transition ring-1 ring-transparent focus-within:ring-gray-300">
            <Input
              placeholder={t('error.searchPlaceholder')}
              className="bg-transparent flex-1 outline-none text-base placeholder-gray-500"
            />
            <MdTune className="cursor-pointer w-6 h-6 text-gray-600 hover:text-gray-800 transition-colors" />
          </div>
        </div>
      </section>

      {/* Toolbar with smooth appearance */}
      <div className={`transition-transform duration-300 ${showNavbar ? 'translate-y-full' : 'translate-y-0'}`}>
        <Toolbar />
      </div>
    </div>
  );
}
