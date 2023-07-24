import { useState } from "react";
import Card from "./Card";
import { Col, Container, Row } from "react-bootstrap";
export default function Cardcontainer({ data, genres, type }) {
  return (
    <div className="row justify-content-center movie-cards-container">
      {data.results.map((d) => (
        <Col key={d.id} sm={3}>
          <Card key={d.id} type={type} genres={genres} {...d} />
        </Col>
      ))}
    </div>
  );
}
