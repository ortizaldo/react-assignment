import { useState } from "react";
import Card from "./Card";
import { Col } from "react-bootstrap";
export default function Cardcontainer({ data, genres, type }) {
  return (
    <>
      {data.results.map((d) => (
        <Col sm={2} className="p-3">
          <Card key={d.id} type={type} genres={genres} {...d} />
        </Col>
      ))}
    </>
  );
}
