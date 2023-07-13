import { useState } from "react";
import Card from "./Card";
export default function Cardcontainer({ data, genres, type }) {
  return (
    <>
      {/* <div className="grid grid-cols-2 md:grid-cols-6 space-x-2">
        {data.results.map((d) => (
          <Card key={d.id} type={type} genres={genres} {...d} />
        ))}
      </div> */}
    </>
  );
}
