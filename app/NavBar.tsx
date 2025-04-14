"use client"
import Link from "next/link";
import React from "react";
import { FaBugSlash } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import classNames from "classnames";
function NavBar() {
  const currentPath = usePathname();
  const links = [
    {
      label: "Dashboard",
      href: "/",
    },
    {
      label: "Issues",
      href: "/issues",
    },
  ];
  return (
    <nav className="flex space-x-6 h-14 border-b items-center px-5 mb-5">
      <Link href="/">
        <FaBugSlash size={32} />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={classNames({
                "text-zinc-900": currentPath === link.href,
                "text-zinc-500": currentPath !== link.href,
                "hover:text-zinc-800 transition-colors": true,
              })}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
