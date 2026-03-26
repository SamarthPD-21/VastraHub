import React from "react";
import { Link } from "react-router-dom";
export default function OfferBanner() {
  return (
    <section
      id="offer-banner"
      className="relative overflow-hidden hidden md:block group"
      aria-label="Promotional offer banner"
    >
      {" "}
      {/* Background image with slight scale on hover for dynamic feel */}{" "}
      <div className="absolute inset-0 transition-transform duration-700 ease-in-out group-hover:scale-105">
        {" "}
        <img
          src={
            import.meta.env.BASE_URL + "assets/images/banners/offer-strip.webp"
          }
          alt="Season Sale Offer Background"
          width={1440}
          height={240}
          loading="lazy"
          className="h-full w-full object-cover"
        />{" "}
      </div>{" "}
      {/* Modern Gradient & Blur Overlay */}{" "}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/80 to-slate-950/90 backdrop-blur-[2px]" />{" "}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6 text-white">
        {" "}
        {/* Left: delivery info */}{" "}
        <div className="flex items-center gap-4 bg-white/5 px-4 py-3 rounded-2xl border border-white/10 backdrop-blur-sm">
          {" "}
          <div className="p-2 bg-indigo-500/20 rounded-xl">
            {" "}
            <img
              src={
                import.meta.env.BASE_URL +
                "assets/illustrations/india-delivery.svg"
              }
              alt="Free delivery"
              width={32}
              height={32}
              loading="lazy"
              className="shrink-0 drop-shadow-md"
            />{" "}
          </div>{" "}
          <div className="flex flex-col">
            {" "}
            <p className="text-sm font-semibold tracking-wide flex items-center gap-2 text-slate-100">
              {" "}
              Free Shipping in India{" "}
              <img
                src="https://flagcdn.com/w20/in.png"
                srcSet="https://flagcdn.com/w40/in.png 2x"
                width="16"
                alt="India flag"
                className="inline-block rounded-[2px] shadow-sm"
              />{" "}
            </p>{" "}
            <p className="text-xs text-slate-400 mt-0.5">
              Orders over ₹999 applied auto.
            </p>{" "}
          </div>{" "}
        </div>{" "}
        {/* Center: offer text */}{" "}
        <div className="flex-1 text-center flex flex-col items-center justify-center">
          {" "}
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl drop-shadow-lg text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-100 to-white">
            {" "}
            Season Sale — Up to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              {" "}
              40% Off{" "}
            </span>{" "}
          </h2>{" "}
          <div className="mt-3 flex items-center justify-center gap-2 text-sm text-slate-300 bg-white/5 px-4 py-1.5 rounded-full border border-white/10 w-fit mx-auto">
            {" "}
            <span>Limited time</span>{" "}
            <span className="w-1 h-1 rounded-full bg-slate-500" />{" "}
            <span>
              Code:{" "}
              <strong className="text-indigo-300 font-mono tracking-wider">
                VASTRA10
              </strong>{" "}
              (+10%)
            </span>{" "}
          </div>{" "}
        </div>{" "}
        {/* Right: CTA */}{" "}
        <div className="shrink-0">
          {" "}
          <Link
            to="/shop"
            className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-8 py-3.5 text-sm font-bold text-slate-900 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-indigo-500/25 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-slate-900"
          >
            {" "}
            <span className="relative z-10 flex items-center gap-2">
              {" "}
              Shop the Sale{" "}
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />{" "}
              </svg>{" "}
            </span>{" "}
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-indigo-100 to-white transition-transform duration-500 group-hover:translate-x-0" />{" "}
          </Link>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}
