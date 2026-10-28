import { zodResolver } from "@hookform/resolvers/zod";
import { useAction } from "convex/react";
import { Loader } from "lucide-react";
import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { api } from "../../convex/_generated/api";
import SendSvg from "../assets/SendSvg";
import { MessageSchema, type TMessageSchema } from "../lib/schema";

export default function Contact() {
  const [sending, setSending] = useState(false);
  const [sendResponse, setSendResponse] = useState<{
    status: string;
    message: string;
  } | null>(null);
  const addMessage = useAction(api.myFunctions.sendMessage);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TMessageSchema>({ resolver: zodResolver(MessageSchema) });

  const onSubmit: SubmitHandler<TMessageSchema> = async (data) => {
    setSending(true);

    const response = await addMessage(data);
    setSendResponse(response);

    if (response.status === "success") {
      reset();
    }
    setSending(false);
  };

  return (
    <section id="contact" className="body-font relative">
      {/* PopUp */}
      {sendResponse && (
        <div
          className="size-full fixed top-0 z-100 bg-card/75 backdrop-blur-lg flex justify-center items-center"
          onClick={() => setSendResponse(null)}
        >
          <div
            className="h-fit w-2xs flex flex-col border-2 border-border bg-card rounded-lg py-4 px-4"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <h2 className="text-white text-lg text-center font-medium title-font capitalize">
              {sendResponse.status}
            </h2>
            <p className="text-body mb-4">{sendResponse.message}</p>
            <button className="btn" onClick={() => setSendResponse(null)}>
              OK
            </button>
          </div>
        </div>
      )}
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-body">
                Name
              </label>
              <input
                disabled={sending}
                {...register("name")}
                type="text"
                id="name"
                name="name"
                className="w-full bg-card rounded border border-border focus:border-primary text-base outline-none text-foreground py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              {errors.name && (
                <p role="alert" className="text-sm text-red-500 mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-body">
                Email
              </label>
              <input
                disabled={sending}
                {...register("email")}
                type="email"
                id="email"
                name="email"
                className="w-full bg-card rounded border border-border focus:border-primary text-base outline-none text-foreground py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              {errors.email && (
                <p role="alert" className="text-sm text-red-500 mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="relative mb-4">
              <label htmlFor="message" className="leading-7 text-sm text-body">
                Message
              </label>
              <textarea
                disabled={sending}
                {...register("message")}
                id="message"
                name="message"
                className="w-full bg-card rounded border border-border focus:border-primary h-32 text-base outline-none text-foreground py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
              {errors.message && (
                <p role="alert" className="text-sm text-red-500 mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>
            <button
              disabled={sending}
              type="submit"
              className="btn btn-lg w-full"
            >
              {sending ? (
                <>
                  <Loader className="animate-spin" /> Sending
                </>
              ) : (
                <>
                  <SendSvg /> Send
                </>
              )}
            </button>
            <p className="text-xs text-body text-opacity-90 mt-3">
              I'll not share or sell your data to anyone.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
