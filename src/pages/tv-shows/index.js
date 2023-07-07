import tmdb from "../../config/tmdb";
import Moviescontainer from "../../components/Cardcontainer";
export default function Home({ tvShows }) {
  return (
    <div className="container ">
      <section className="mt-8">
        <Moviescontainer data={tvShows} type="tv-shows" />
      </section>
    </div>
  );
}

export const getStaticProps = async () => {
  const tvShows = await tmdb.discover("tv", [
    {
      param: "sort_by",
      value: "vote_count.desc",
    },
  ]);
  return {
    props: {
      tvShows: tvShows.results,
    },
  };
};
