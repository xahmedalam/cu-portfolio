const links = [
  "https://github.com/xahmedalam/genzplayer",
  "https://github.com/xahmedalam/conutil-compressor",
];

export default function Hero() {
  return (
    <section className="body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex w-full mb-20 flex-wrap">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-pink-50 lg:w-1/3 lg:mb-0 mb-4">
            Web & App Dev that Solves Real World Problems
          </h1>
          <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base text-body">
            {
              '2 projects shiped, Really first I solved my own problem! Every image you see on this page is compressed with my own little tool "ConUtil Compressor".'
            }
          </p>
        </div>
        <div className="flex flex-wrap md:-m-2 -m-1 [&_img]:rounded-lg">
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-1/2">
              <a
                href={links[0]}
                target="_blank"
                className="transition-opacity hover:opacity-75"
              >
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="p1-2.png"
                />
              </a>
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <a
                href={links[0]}
                target="_blank"
                className="transition-opacity hover:opacity-75"
              >
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="p1-3.png"
                />
              </a>
            </div>
            <div className="md:p-2 p-1 w-full">
              <a
                href={links[0]}
                target="_blank"
                className="transition-opacity hover:opacity-75"
              >
                <img
                  alt="gallery"
                  className="w-full h-full object-cover object-center block"
                  src="p1-1.png"
                />
              </a>
            </div>
          </div>
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-full">
              <a
                href={links[1]}
                target="_blank"
                className="transition-opacity hover:opacity-75"
              >
                <img
                  alt="gallery"
                  className="w-full h-full object-cover object-center block"
                  src="p2-1.png"
                />
              </a>
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <a
                href={links[1]}
                target="_blank"
                className="transition-opacity hover:opacity-75"
              >
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="p2-2.png"
                />
              </a>
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <a
                href={links[1]}
                target="_blank"
                className="transition-opacity hover:opacity-75"
              >
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="p2-3.png"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
