import Card from "./Card";
export default function Cardcontainer({ data, genres, type }) {
  console.log("🚀 ~ file: index.js:3 ~ Cardcontainer ~ genres:", genres);
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-6 space-x-2">
        {data.map((d) => (
          <Card key={d.id} type={type} genres={genres} {...d} />
        ))}
        {/* <Card key={null} type={null} /> */}
      </div>
    </>
  );
}
