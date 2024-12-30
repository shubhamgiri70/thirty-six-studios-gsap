import React from "react";

const Navbar = () => {
  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full flex justify-between items-center px-5 py-3 z-50 bg-transparent">
      <div className="text-lg font-normal">
        <a href="/" className="text-white no-underline">
          thirtysixstudios
        </a>
      </div>
      <ul className="list-none flex m-0 p-0">
        {links.map((link, index) => (
          <li key={index} className="mx-4">
            <a
              href={link.path}
              className="text-white no-underline transition-colors duration-300 hover:text-gray-400"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
