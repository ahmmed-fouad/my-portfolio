import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../store/slices/themeSlice';
import * as Icons from "lucide-react";
import type { LucideIcon } from 'lucide-react';
import { navItems, socialLinks } from '../data/projects';
import type { RootState } from '../store';
import logo from '../assets/ahmed-fouad.jpg';

const Navbar = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

   interface SocialLink {
    href: string;
    icon: string;
    label: string;
  }

  return (
    <nav className="container mx-auto px-4 py-4 ">
      <div className="flex items-center justify-between">
        <Link
          to="/"
          className="text-2xl font-bold text-[var(--text)] flex items-center gap-2"
        >
          <img src={logo} alt="logo" className="w-10 h-10 rounded-full" />
          Portfolio
        </Link>

        {/* Hamburger Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-2 rounded-lg hover:bg-[var(--text)] transition-colors duration-400"
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            )}
          </svg>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="text-[var(--subText)] hover:text-[var(--text)] transition-colors duration-400"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          {socialLinks.map(({ href, icon, label }: SocialLink) => {
            const IconComponent = Icons[
              icon as keyof typeof Icons
            ] as LucideIcon;
            return (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-[hsl(var(--subText))] text-[hsl(var(--subText)/var(--subText-opacity))] hover:text-[hsl(var(--text))] hover:text-[hsl(var(--text)/var(--text-opacity))] transition-colors duration-400"
                aria-label={label}
              >
                <IconComponent size={18} />
              </a>
            );
          })}
          <button
            onClick={() => dispatch(toggleTheme())}
            className="p-2 rounded-full cursor-pointer hover:bg-[hsl(var(--text))] hover:bg-[hsl(var(--text)/var(--text-opacity))] transition-colors duration-400"
            aria-label="Toggle theme"
          >
            {isDarkMode ? "🌞" : "🌙"}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden ${
          isMenuOpen ? "block" : "hidden"
        } mt-4 space-y-4`}
      >
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="text-[var(--subText)] hover:text-[var(--text)] block py-2 transition-colors duration-400"
          >
            {item.label}
          </Link>
        ))}
        {/* social icons */}
        <div className="flex items-center gap-3 pt-2">
          {socialLinks.map(({ href, icon, label }: SocialLink) => {
            const IconComponent = Icons[
              icon as keyof typeof Icons
            ] as LucideIcon;
            return (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-[hsl(var(--subText))] text-[hsl(var(--subText)/var(--subText-opacity))] hover:text-[hsl(var(--text))] hover:text-[hsl(var(--text)/var(--text-opacity))] transition-colors duration-400"
                aria-label={label}
              >
                <IconComponent size={20} />
              </a>
            );
          })}
          <button
            onClick={() => dispatch(toggleTheme())}
            className="p-2 rounded-lg hover:bg-[hsl(var(--text))] hover:bg-[hsl(var(--text)/var(--text-opacity))] transition-colors duration-400"
            aria-label="Toggle theme"
          >
            {isDarkMode ? "🌞" : "🌙"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 