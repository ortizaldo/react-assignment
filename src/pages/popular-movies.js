import tmdb from "../config/tmdb";
import Moviescontainer from "../components/Cardcontainer";
export default function upcomingMovies({ movies, genres }) {
  return (
    <div className="container ">
      <section className="mt-8">
        <Moviescontainer data={movies} genres={genres} type="movies" />
      </section>
    </div>
  );
}

export const getStaticProps = async () => {
  const movies = await tmdb.movies("popular");
  const genres = await tmdb.getGenres("movie");

  return {
    props: {
      movies: movies.results,
      genres: genres.genres,
    },
  };
};
