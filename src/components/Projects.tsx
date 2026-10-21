import ArrowSvg from "../assets/ArrowSvg";
import GithubSvg from "../assets/GithubSvg";
import { cn } from "../lib/utils";

const projects = [
  {
    imgUrl: "p1-cover.png",
    category: "Desktop App",
    title: "GenZ Player",
    description:
      "Play your videos with Premium look & feel, without any clutter :)",
    buttonText: "Download",
    link: "https://github.com/xahmedalam/genzplayer/releases/latest/download/GenZ-Player-Windows.zip",
    githubLink: "https://github.com/xahmedalam/genzplayer",
  },
  {
    imgUrl: "p2-cover.png",
    category: "Web App",
    title: "ConUtil Compressor",
    description:
      "The only local image compressor that doesn't suck or get you into subscription hell.",
    buttonText: "Open Site",
    link: "https://compressor.conutil.com",
    githubLink: "https://github.com/xahmedalam/conutil-compressor",
  },
  {
    imgUrl: "p3-cover.png",
    category: "Discord Bot",
    title: "CU Discord Bot",
    description:
      "Get your website messages on your discord. When someone sent a message from my website, they will message me on discord.",
    buttonText: "Coming soon",
    githubLink: "https://github.com/xahmedalam/cu-discord-bot",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-pink-50">
            My Projects
          </h2>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <div className="p-4 md:w-1/3">
              <div className="h-full flex flex-col border-2 border-border bg-card rounded-lg overflow-hidden">
                <img
                  className="xl:h-64 lg:h-48 md:h-36 w-full object-cover object-center"
                  src={project.imgUrl}
                  alt={project.title}
                />
                <div className="p-6 flex flex-1 flex-col">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
                    {project.category}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed mb-3 text-body ">
                    {project.description}
                  </p>
                  <div className="mt-auto flex items-center flex-wrap ">
                    <a
                      href={project.link}
                      target="_blank"
                      className={cn(
                        "text-yellow-400 inline-flex items-center md:mb-2 lg:mb-0 transition-opacity hover:opacity-75",
                        !project.link && "opacity-75",
                      )}
                    >
                      {project.buttonText}
                      {project.link && <ArrowSvg className="size-4 ml-2" />}
                    </a>
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        className="text-gray-500 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm py-1 border-gray-800 transition-opacity hover:opacity-90"
                      >
                        <GithubSvg className="size-4 mr-1" />
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
