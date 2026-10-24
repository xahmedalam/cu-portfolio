import SendSvg from "../assets/SendSvg";

export default function Contact() {
  return (
    <section id="contact" className="body-font relative">
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-card rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0 filter-[grayscale(1)_contrast(1.2)_opacity(0.16)]"
            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d903.7365174706622!2d67.05333121229364!3d25.035904207070732!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1792724223604!5m2!1sen!2sus"
          ></iframe>
          <div className="bg-card relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">
                Gulistan-e-Kazim Block D, Sector 6, Surjani Town, KDA Scheme 41,
                Karachi, Pakistan, ZIP Code 75850.
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                EMAIL
              </h2>
              <a
                href="mailto:ahmed@conutil.com"
                target="_blank"
                className="text-pink-400 leading-relaxed"
              >
                ahmed@conutil.com
              </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                X/TWITTER
              </h2>
              <a
                href="https://x.com/xahmedalam"
                target="_blank"
                className="text-pink-400 leading-relaxed"
              >
                @xahmedalam
              </a>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-white text-lg mb-1 font-medium title-font">
            Message
          </h2>
          <p className="leading-relaxed mb-5">
            Anything you want to say, I'll reply to your email.
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <button className="btn btn-lg">
            <SendSvg /> Send
          </button>
          <p className="text-xs text-gray-400 text-opacity-90 mt-3">
            I'll not share or sell your data to anyone.
          </p>
        </div>
      </div>
    </section>
  );
}
