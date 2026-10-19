import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import Button from "./ui/Button";

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
        "sticky inset-x-0 top-0 z-50 text-card-foreground bg-card/90 backdrop-blur-lg body-font transition-transform duration-300 ease-in-out",
        visible ? "translate-y-0" : "-translate-y-full",
      )}
    >
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a
          className="flex title-font font-medium items-center text-pink-50 mb-4 md:mb-0"
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
              className="fill-pink-500"
              d="M0 0H15.6V19.2H21.6V0H24V24H13.2V4.8H2.4V19.2H10.8V24H0V0Z"
              // fill="white"
            />
          </svg>
          <span className="ml-3 text-xl">ConUtil</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          {links.map((link) => (
            <a
              key={link.slug}
              href={link.slug}
              className="mr-5 hover:text-white transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a href="https://github.com/xahmedalam" target="_blank">
          <Button />
        </a>
      </div>
    </header>
  );
}
