import Card from "./Card";
export default function Cardcontainer({ data, type }) {
  console.log("🚀 ~ file: index.js:3 ~ Cardcontainer ~ data:", data);
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-6 space-x-2">
        {data.map((d) => (
          <Card key={d.id} type={type} {...d} />
        ))}
        {/* <Card key={null} type={null} /> */}
      </div>
    </>
  );
}
