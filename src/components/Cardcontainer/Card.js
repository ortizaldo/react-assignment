import React from "react";
import Image from "next/image";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { Knob } from "primereact/knob";
import { Chip } from "primereact/chip";
import { Inter, Rubik, Poppins } from "@next/font/google";
import clsx from "clsx";
import genSlug from "../../utils/gen-slug";

import "react-circular-progressbar/dist/styles.css";
import { Badge, Col, Container, Row } from "react-bootstrap";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { useState } from "react";
import Link from "next/link";
import { Tag } from "primereact/tag";

export const titleFont = Rubik({
  subsets: ["latin"],
});

export const text = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Movie(props) {
  const {
    title,
    name,
    id,
    poster_path,
    original_title,
    type,
    overview,
    genre_ids,
    release_date,
    vote_average,
    genres,
  } = props;

  const [loading, setLoading] = useState(false);

  let average = vote_average * 10;
  const avgColorObj = {
    colorAverage: "#999999",
    colorRange: "#aeaeae",
  };

  if (average >= 40 && average < 70) {
    avgColorObj.colorAverage = "#f1ff04";
    avgColorObj.colorRange = "#cee153";
  } else if (average > 0 && average < 40) {
    avgColorObj.colorAverage = "#ee0707";
    avgColorObj.colorRange = "#bb7777";
  } else if (average >= 70) {
    avgColorObj.colorAverage = "#5fff36";
    avgColorObj.colorRange = "#2e6a30";
  }

  const resultados = genres.filter((genre) => genre_ids.includes(genre.id));

  return (
    <>
      <div className="movie-card containerCard">
        <div className="row">
          <Image
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={original_title}
            width="300"
            height="350"
          />
        </div>
        <div className="row">
          <div className="col-4 ml-3 corner">
            <Knob
              value={average == 0 ? "NR" : average}
              onChange={(e) => setValue(e.value)}
              min={0}
              max={100}
              strokeWidth={14}
              size={50}
              valueColor={avgColorObj.colorAverage}
              rangeColor={avgColorObj.colorRange}
              className="custom-knob"
              style={{ fontWeight: "bold" }}
              textColor="white"
            />
          </div>
          <div className="col-8">
            <Tag value={release_date}></Tag>
          </div>
        </div>
        {/* <h2 className={clsx(titleFont.className)}>{original_title}</h2> */}
      </div>
    </>
  );
}
