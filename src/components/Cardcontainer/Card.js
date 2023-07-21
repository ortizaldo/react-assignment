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

  const average = vote_average * 10;

  // Buscar en el array de objetos
  const resultados = genres.filter((genre) => genre_ids.includes(genre.id));
  return (
    <>
      <div className="card">
        <div className="containerIMG h-50 p-0">
          <Image
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={original_title}
            width="300"
            height="350"
          />
        </div>
        <div className="h-50 p-0 containerCard">
          <div className="row">
            <div className="col-4 ml-3 corner">
              <Knob
                value={average}
                onChange={(e) => setValue(e.value)}
                min={0}
                max={100}
                strokeWidth={14}
                size={50}
                rangeColor="#48d1cc"
                className="custom-knob"
                style={{ fontWeight: "bold" }}
                textColor="white"
              />
            </div>
          </div>
          <div className="row">
            <Container className="grid grid-flow-row auto-rows-max">
              <Row className={clsx("text-2xl font-bold", titleFont.className)}>
                <h2 className={clsx(titleFont.className)}>{original_title}</h2>
              </Row>

              {/* <Row>
                <Col>
                  <div
                    className={clsx(
                      "grid grid-flow-col auto-cols-max text-color",
                      titleFont.className
                    )}
                  >
                    {resultados.map((objeto, idx) => {
                      idx += 1;
                      return (
                        <div
                          className="col-4 ml-2"
                          style={{ color: "#0073b1" }}
                        >
                          <Tag value={objeto.name} />
                        </div>
                      );
                    })}
                  </div>
                </Col>
              </Row> */}
              {/* <Row>
                <Col>
                  <a
                    className="btn"
                    href={`/${type}/${genSlug(title || name, id)}`}
                  >
                    {title || name}
                  </a>
                </Col>
              </Row> */}
            </Container>
          </div>
          <div className="row">
            <div className="mt-1 col-8">
              <Tag value={release_date}></Tag>
            </div>
          </div>
        </div>
        {/* <div className="corner" style={{ width: 60, height: 60 }}>
          <Knob
            value={average}
            onChange={(e) => setValue(e.value)}
            min={0}
            max={100}
            strokeWidth={10}
            size={60}
          />
        </div>
        <Container>
          <Row>
            <Image
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt={original_title}
              width="300"
              height="350"
            />
          </Row>
          <Row>
            <div className="descriptions">
              <Container className="grid grid-flow-row auto-rows-max">
                <Row
                  className={clsx("text-2xl font-bold", titleFont.className)}
                >
                  <h5
                    className={clsx("text-xl font-bold", titleFont.className)}
                  >
                    {original_title}
                  </h5>
                </Row>

                <Row>
                  <Col></Col>
                  <Col>
                    <div
                      className={clsx(
                        "grid grid-flow-col auto-cols-max text-color",
                        titleFont.className
                      )}
                    >
                      <div className="ml-2" style={{ color: "#0073b1" }}>
                        <Tag value={release_date}></Tag>
                      </div>
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <div
                      className={clsx(
                        "grid grid-flow-col auto-cols-max text-color",
                        titleFont.className
                      )}
                    >
                      {resultados.map((objeto, idx) => {
                        idx += 1;
                        return (
                          <div
                            className="col-4 ml-2"
                            style={{ color: "#0073b1" }}
                          >
                            <Tag value={objeto.name} />
                          </div>
                        );
                      })}
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <a
                      className="btn"
                      href={`/${type}/${genSlug(title || name, id)}`}
                    >
                      {title || name}
                    </a>
                  </Col>
                </Row>
              </Container>
            </div>
          </Row>
        </Container> */}
      </div>
    </>
  );
}
