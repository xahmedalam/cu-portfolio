import GithubSvg from "../assets/GithubSvg";

const links = {
  github: "https://github.com/xahmedalam",
  twitter: "https://twitter.com/xahmedalam",
  instagram: "https://www.instagram.com/xahmedalam/",
  linkedin: "https://www.linkedin.com/in/xahmedalam/",
};

export default function Footer() {
  return (
    <footer className="body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-pink-50">
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
            />
          </svg>
          <span className="ml-3 text-xl">ConUtil</span>
        </a>
        <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-border sm:py-2 sm:mt-0 mt-4">
          © {new Date().getFullYear()} ConUtil —
          <a
            href={links.twitter}
            className="text-gray-400 ml-1"
            target="_blank"
          >
            @xahmedalam
          </a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a href={links.github} target="_blank" className="text-gray-400">
            <GithubSvg className="size-5" />
          </a>
          <a
            href={links.twitter}
            target="_blank"
            className="ml-3 text-gray-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M214.75,211.71l-62.6-98.38,61.77-67.95a8,8,0,0,0-11.84-10.76L143.24,99.34,102.75,35.71A8,8,0,0,0,96,32H48a8,8,0,0,0-6.75,12.3l62.6,98.37-61.77,68a8,8,0,1,0,11.84,10.76l58.84-64.72,40.49,63.63A8,8,0,0,0,160,224h48a8,8,0,0,0,6.75-12.29ZM164.39,208,62.57,48h29L193.43,208Z"></path>
            </svg>
          </a>
          <a
            href={links.instagram}
            target="_blank"
            className="ml-3 text-gray-400"
          >
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
          <a
            href={links.linkedin}
            target="_blank"
            className="ml-3 text-gray-400"
          >
            <svg
              fill="currentColor"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="0"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
              ></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
        </span>
      </div>
    </footer>
  );
}
