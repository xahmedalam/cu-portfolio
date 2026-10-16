import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

const links = [
  { label: "Projects", slug: "#projects" },
  { label: "About Me", slug: "#about" },
  { label: "Contact", slug: "#contact" },
];

export default function Navbar() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 10) {
        setVisible(true);
      } else if (currentScrollY > lastScrollY + 5) {
        setVisible(false); // Scrolling down
      } else if (currentScrollY < lastScrollY - 5) {
        setVisible(true); // Scrolling up
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 h-16 text-gray-400 bg-gray-900 body-font transition-transform duration-300 ease-in-out",
        visible ? "translate-y-0" : "-translate-y-full",
      )}
    >
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a
          className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
          href="/"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 0H15.6V19.2H21.6V0H24V24H13.2V4.8H2.4V19.2H10.8V24H0V0Z"
              fill="white"
            />
          </svg>
          <span className="ml-3 text-xl">ConUtil</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          {links.map((link) => (
            <a
              key={link.slug}
              href={link.slug}
              className="mr-5 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a href="https://github.com/xahmedalam" target="_blank">
          <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0 cursor-pointer">
            GitHub
            <svg
              className="w-4 h-4 ml-1 fill-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="#ffffff"
              viewBox="0 0 256 256"
            >
              <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"></path>
            </svg>
          </button>
        </a>
      </div>
    </header>
  );
}
