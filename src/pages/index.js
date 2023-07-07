import tmdb from "../config/tmdb";
import Moviescontainer from "../components/Cardcontainer";
export default function Home({ movies }) {
  console.log(movies);
  return (
    <div className="container ">
      <section className="mt-8">
        <Moviescontainer data={movies} type="movies" />
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
  ]);
  return {
    props: {
      movies: movies.results,
    },
  };
};
