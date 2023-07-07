import Card from "./Card";
export default function Cardcontainer({ data, type }) {
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4">
        {data.map((d) => (
          <Card key={d.id} type={type} {...d} />
        ))}
      </div>
    </>
  );
}
