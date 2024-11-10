//app//components/navbar.jsx
"use client";
// @flow strict
import Link from "next/link";
import { useTheme } from 'next-themes'; // Importing the hook for theme management
import { useEffect, useState } from 'react'; // Importing React hooks

function Navbar() {

  const { theme, setTheme } = useTheme(); // Get the theme and setter from next-themes
  const [mounted, setMounted] = useState(false);

  // Ensures that theme is rendered correctly only on the client side
  useEffect(() => setMounted(true), []);
  if (!mounted) return null; // Avoids mismatched theme during SSR

  return (
    <nav className="bg-transparent">
      <div className="flex items-center justify-between py-5">
        <div className="flex flex-shrink-0 items-center">
          {/* <Link
            href="/"
            className=" text-[#16f2b3] text-3xl font-bold">
            VARSHA SESHASHAYEE HINDUPUR 
           </Link> */}
           {/* Theme toggle button */}
          {/* <li>
            <button
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              className="px-4 py-2 text-sm text-white transition-colors duration-300 hover:text-pink-600 focus:outline-none"
            >
              {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
            </button>
          </li> */}
        </div>

        <ul className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100" id="navbar-default">
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#about">
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">ABOUT</div>
            </Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#experience"><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">EXPERIENCE</div></Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#skills"><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">SKILLS</div></Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#education"><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">EDUCATION</div></Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/blog"><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">BLOGS</div></Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#projects"><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">PROJECTS</div></Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#recommendations"><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">RECOMMENDATIONS</div></Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;