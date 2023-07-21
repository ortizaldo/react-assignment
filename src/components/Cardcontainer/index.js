import { useState } from "react";
import Card from "./Card";
import { Col, Container, Row } from "react-bootstrap";
export default function Cardcontainer({ data, genres, type }) {
  return (
    <>
      <Container>
        <Row>
          <div className="col-2"></div>
          <div className="col-10">
            <div className="row">
              {data.results.map((d) => (
                <Col key={d.id} sm={3} className="h-75 d-inline-block p-3">
                  <Card key={d.id} type={type} genres={genres} {...d} />
                </Col>
              ))}
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
}
