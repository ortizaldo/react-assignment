import tmdb from "../config/tmdb";
import Moviescontainer from "../components/Cardcontainer";
export default function Home({ movies, genres }) {
  return (
    <div className="container p-4 max-w-full">
      <section>
        <Moviescontainer data={movies} genres={genres} type="movies" />
      </section>
    </div>
  );
}

export const getStaticProps = async () => {
  const movies = await tmdb.discover("movie", [
    {
      param: "sort_by",
      value: "vote_count.desc",
    },
    {
      param: "page",
      value: 3,
    },
  ]);

  const genres = await tmdb.getGenres("movie");
  return {
    props: {
      movies: movies.results,
      genres: genres.genres,
    },
  };
};
