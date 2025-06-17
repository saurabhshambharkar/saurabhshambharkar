import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const links = [
    { id: 1, link: 'home' },
    { id: 2, link: 'about' },
    { id: 3, link: 'skills' },
    { id: 4, link: 'projects' },
    { id: 5, link: 'contact' },
  ];

  const handleResumeClick = () => {
    const fileId = "1jjvrJRAVd0rUtR03qNUxmLRaNHb8lpKM";
    window.open(`https://drive.google.com/file/d/${fileId}/preview`, "_blank");
  
    const link = document.createElement("a");
    link.href = `https://drive.google.com/uc?export=download&id=${fileId}`;
    link.download = "Saurabh-Shambharkar-Resume.pdf";
    link.click();
  };
  

  return (
    <nav className="fixed w-full h-20 bg-white dark:bg-gray-900 shadow-lg z-50 text-xl">
      <div className="flex justify-between items-center px-4 h-full">
        <h1 className="text-3xl font-bold">Portfolio</h1>

        <div className="hidden md:flex items-center">
          {links.map(({ id, link }) => (
            <Link
              key={id}
              to={link}
              smooth
              duration={500}
              className="px-4 cursor-pointer capitalize font-medium hover:text-blue-500 dark:hover:text-blue-400  mx-5"
            >
              {link}
            </Link>
          ))}
          <button
            onClick={handleResumeClick}
            className="px-4 cursor-pointer capitalize font-medium hover:text-blue-500 dark:hover:text-blue-400"
          >
            Resume
          </button>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-4 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>
        </div>

        <div onClick={() => setNav(!nav)} className="md:hidden cursor-pointer">
          {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
        </div>
      </div>

      {nav && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white dark:bg-gray-900 shadow-lg">
          {links.map(({ id, link }) => (
            <Link
              key={id}
              to={link}
              smooth
              duration={500}
              onClick={() => setNav(false)}
              className="block px-4 py-3 text-center capitalize cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {link}
            </Link>
          ))}
          <button
            onClick={() => {
              handleResumeClick();
              setNav(false);
            }}
            className="w-full px-4 py-3 text-center capitalize cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            Resume
          </button>
          <button
            onClick={() => {
              setDarkMode(!darkMode);
              setNav(false);
            }}
            className="w-full px-4 py-3 text-center flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
            <span className="ml-2">
              {darkMode ? "Light Mode" : "Dark Mode"}
            </span>
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;