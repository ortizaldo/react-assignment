import Image from "next/image";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Inter, Rubik, Poppins } from "@next/font/google";
import clsx from "clsx";
import genSlug from "../../utils/gen-slug";

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
    release_date,
    vote_average,
  } = props;
  // const percentage = vote_average * 10;
  // console.log("🚀 ~ file: Card.js:28 ~ Movie ~ percentage:", percentage);
  return (
    <>
      <div class="card">
        <Image
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={original_title}
          width="300"
          height="350"
        />
        <div class="descriptions">
          <div class="grid grid-flow-row auto-rows-max">
            <div className={clsx("text-2xl font-bold", titleFont.className)}>
              <h1 className={clsx("text-2xl font-bold", titleFont.className)}>
                {original_title}
              </h1>
            </div>
            <div style={{ width: 40, height: 40 }}>
              <CircularProgressbar
                className={clsx(text.className)}
                value={vote_average * 10}
                text={`${vote_average * 10}%`}
                styles={buildStyles({
                  // Rotation of path and trail, in number of turns (0-1)
                  rotation: 0.25,

                  // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                  strokeLinecap: "butt",

                  // Text size
                  textSize: "2rem",

                  // How long animation takes to go from one percentage to another, in seconds
                  pathTransitionDuration: 0.5,

                  // Can specify path transition in more detail, or remove it entirely
                  // pathTransition: 'none',

                  // Colors
                  textColor: "#222",
                  trailColor: "#0073b1",
                  backgroundColor: "#0073b1",
                })}
              />
            </div>
            <div
              className={clsx(
                "grid grid-flow-col auto-cols-max text-color",
                titleFont.className
              )}
            >
              <div style={{ color: "#0073b1" }}>PG-13</div>
              <div class="ml-2" style={{ color: "#0073b1" }}>
                {release_date}
              </div>
            </div>
            <div
              className={clsx(
                "grid grid-flow-col auto-cols-max text-color",
                titleFont.className
              )}
            >
              <div style={{ color: "#0073b1" }}>{type}</div>
            </div>
            <div>
              <button type="button" class="p-2 mt-4">
                <i class="fab fa-youtube"></i>
                <a
                  className={clsx("", text.className)}
                  href={`/${type}/${genSlug(title || name, id)}`}
                >
                  {title || name}
                </a>
              </button>
            </div>
          </div>

          {/* <p className={clsx("", text.className)}>{overview}</p> */}
        </div>
      </div>
    </>
  );
}
