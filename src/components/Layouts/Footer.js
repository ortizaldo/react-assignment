import React, { useEffect } from "react";
import Link from "next/link";
import { Inter, Rubik, Poppins } from "@next/font/google";
import clsx from "clsx";

export const titleFont = Rubik({
  subsets: ["latin"],
});

export const text = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Footer() {
  return (
    <header className="md:flex items-center justify-between py-3 md:py-4 bg-gray-900  relative   text-gray-50 ">
      {/* <div className="flex justify-between min-w-min px-4">
        <div className="flex text-2xl md:text-3xl font-normal relative  items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
            />
          </svg>
          <Link
            href="/"
            className={clsx("text-2xl font-bold", titleFont.className)}
          >
            Movies App
          </Link>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="menu-toggler"
          className="block cursor-pointer md:hidden self-center h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </div>
      <nav className=" md:mt-0 transition delay-300 ease-out md:px-4">
        <ul
          id="menu"
          className=" bg-gray-800 w-full py-4 md:py-0 md:mt-0 z-40 absolute   md:relative  md:bg-gray-900 mt-3 pl-4   flex flex-col hidden md:flex   md:flex-row m-0 p-0  text-lg md:items-center gap-8"
        >
          <li>
            {" "}
            <Link
              className={clsx("text-1xl", titleFont.className)}
              href="/upcoming-movies"
            >
              Upcoming Movies
            </Link>
          </li>
          <li>
            {" "}
            <Link
              className={clsx("text-1xl", titleFont.className)}
              href="/popular-movies"
            >
              Popular Movies
            </Link>
          </li>
          <li>
            {" "}
            <Link
              className={clsx("text-1xl", titleFont.className)}
              href="/top-rated"
            >
              Top rated Movies
            </Link>
          </li>
        </ul>
      </nav> */}
    </header>
  );
}
