import React, { useEffect } from "react";
import Link from "next/link";
import { Inter, Rubik, Poppins } from "@next/font/google";
import clsx from "clsx";
import { Menubar } from "primereact/menubar";
import { InputText } from "primereact/inputtext";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const titleFont = Rubik({
  subsets: ["latin"],
});

export const text = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Header() {
  const items = [
    {
      label: "Movies",
      icon: "pi pi-fw pi-video",
      items: [
        {
          label: "All",
          icon: "pi pi-fw pi-list",
          url: "/",
        },
        {
          separator: true,
        },
        {
          label: "Upcoming",
          icon: "pi pi-fw pi-fast-forward",
          url: "/upcoming-movies",
        },
        {
          label: "Popular",
          icon: "pi pi-fw pi-star-fill",
          url: "/top-rated",
        },
      ],
    },
    {
      label: "TV Shows",
      icon: "pi pi-fw pi-camera",
    },
  ];

  const start = (
    <img
      alt="logo"
      src="https://primefaces.org/cdn/primereact/images/logo.png"
      height="40"
      className="mr-2"
    ></img>
  );
  const end = <InputText placeholder="Search" type="text" />;

  return (
    <header className="md:flex items-center justify-between bg-gray-900 relative text-gray-50">
      <div>
        <Menubar model={items} start={start} end={end} />
      </div>
    </header>
  );
}
