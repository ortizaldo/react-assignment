import Image from "next/image";
import Link from "next/link";
import genSlug from "../../utils/gen-slug";
export default function Movie(props) {
  const { title, name, id, poster_path, original_title, type } = props;

  return (
    <div className="border border-gray-300 m-3 flex flex-col items-center">
      <Image
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={original_title}
        width="300"
        height="350"
      />
      <p className="md:text-xl">
        <Link href={`/${type}/${genSlug(title || name, id)}`}>
          <a href={`/${type}/${genSlug(title || name, id)}`}>{title || name}</a>
        </Link>
      </p>
    </div>
  );
}
