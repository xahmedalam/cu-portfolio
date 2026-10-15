const links = [
  { label: "Projects", slug: "#" },
  { label: "About Me", slug: "#" },
  { label: "Contact", slug: "#" },
];

export default function Navbar() {
  return (
    <header className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
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
        <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
          GitHub
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
  );
}
