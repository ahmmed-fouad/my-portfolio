import * as Icons from "lucide-react";
import { socialLinks, navItems } from "../../data/projects";
import type { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[hsl(var(--bgCard))] border-t border-[hsl(var(--border))]  px-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-[hsl(var(--text))]">
              <Icons.Mail className="" size={20} />
              Contact
            </h3>

            <p className="text-[hsl(var(--subText))] flex items-center gap-2">
              <Icons.Phone className="text-[hsl(var(--text))]" size={18} />{" "}
              01011820991
            </p>

            <p className="text-[hsl(var(--subText))] flex items-center gap-2">
              <Icons.Mail className="text-[hsl(var(--text))]" size={18} />{" "}
              afouad.zizo@gmail.com
            </p>

            <p className="text-[hsl(var(--subText))] flex items-center gap-2">
              <span className="text-[hsl(var(--text))]">Address:</span> 1200
              Buildings, Borg Al-Arab City, Alexandria, Egypt
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[hsl(var(--text))]">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-[hsl(var(--subText))] hover:text-[hsl(var(--text))] transition-colors duration-400"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-[hsl(var(--text))]">
              <Icons.Github className="" size={20} /> Follow Me
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map(({ href, icon, label }) => {
                const IconComponent = Icons[
                  icon as keyof typeof Icons
                ] as LucideIcon;
                return (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl text-[hsl(var(--subText))] hover:text-[hsl(var(--text))] transition-colors duration-400"
                    aria-label={label}
                  >
                    <IconComponent size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-[ hsl(var(--border))] text-center text-[hsl(var(--subText))]">
          <p>
            &copy; {new Date().getFullYear()}
            <span className="text-[hsl(var(--text))] font-bold px-3">
              Ahmed Fouad
            </span>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
