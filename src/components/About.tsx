import { Cloudflare } from "../assets/logos/cloudflare";
import { Codex } from "../assets/logos/codex";
import { CSS } from "../assets/logos/css";
import { Docker } from "../assets/logos/docker";
import { Expressjs } from "../assets/logos/expressjs";
import { FastAPI } from "../assets/logos/fastapi";
import { Flask } from "../assets/logos/flask";
import { Git } from "../assets/logos/git";
import { GitHub } from "../assets/logos/github";
import { GitHubCopilot } from "../assets/logos/github-copilot";
import { HTML5 } from "../assets/logos/html";
import { JavaScript } from "../assets/logos/javascript";
import { Linux } from "../assets/logos/linux";
import { Nextjs } from "../assets/logos/nextjs";
import { OpenAI } from "../assets/logos/openai";
import { Python } from "../assets/logos/python";
import { ReactSvg } from "../assets/logos/reactjs";
import { TailwindCSS } from "../assets/logos/tailwindcss";
import { TypeScript } from "../assets/logos/typescript";

export default function About() {
  return (
    <section id="about" className="body-font">
      <div className="container px-5 py-24 mx-auto flex flex-col">
        <div className="lg:w-4/6 mx-auto">
          <div className="rounded-lg h-64 overflow-hidden">
            <img
              alt="content"
              className="object-cover object-center h-full w-full"
              src="about-cover.png"
            />
          </div>
          <div className="flex flex-col sm:flex-row mt-10">
            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <div className="inline-flex items-center justify-center">
                <img
                  className="w-20 h-20 rounded-full"
                  src="ahmed-alam.jpg"
                  alt="Ahmed Alam Pic"
                />
              </div>
              <div className="flex flex-col items-center text-center justify-center">
                <h2 className="font-medium title-font mt-4 text-white text-lg">
                  Ahmed Alam
                </h2>
                <div className="w-12 h-1 bg-pink-500 rounded mt-2 mb-4"></div>
                <p className="text-base text-gray-400">
                  I'm the nerd person who really love coding, because with
                  coding I can talk to my computer like a friend. sometimes :)
                </p>
              </div>
            </div>
            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-800 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <p className="leading-relaxed text-lg mb-4 text-left!">
                Frameworks & Libraries: Next.js, React.js, Express.js,
                TailwindCSS, FastAPI, Flask, PyQt6. DevOps: Linux, VPS,
                Git/GitHub, Docker, Cloudflare. Programming Languages: Python,
                JavaScript, TypeScript, HTML, CSS. AI Tools: OpenAI API, Codex,
                ChatGPT, GitHub Copilot. Currently learning CS50 from Hardvard
                University, and having fun with HackClub community.
              </p>
              <div className="[&_>svg]:size-12 flex flex-wrap gap-4">
                <Nextjs />
                <ReactSvg />
                <Expressjs />
                <TailwindCSS />
                <FastAPI />
                <Flask />
                <Linux />
                <Git />
                <GitHub />
                <Docker />
                <Cloudflare />
                <Python />
                <JavaScript />
                <TypeScript />
                <HTML5 />
                <CSS />
                <OpenAI />
                <Codex />
                <GitHubCopilot />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
