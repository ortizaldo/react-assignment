import tmdb from "../config/tmdb";
import Moviescontainer from "../components/Cardcontainer";
import Paginator from "../components/Cardcontainer/Paginator";
import { useState } from "react";
export default function Home({ movies, genres }) {
  const [currentPage, setCurrentPage] = useState(movies.page);
  const onPageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <div className="container p-4 max-w-full">
      <section>
        <Moviescontainer data={movies} genres={genres} type="movies" />
        <Paginator
          class="grid grid-cols-2 md:grid-cols-6 space-x-2"
          currentPage={currentPage}
          totalPages={movies.total_pages}
          onPageChange={onPageChange}
        />
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
      value: 1,
    },
  ]);

  const genres = await tmdb.getGenres("movie");
  return {
    props: {
      movies: movies,
      genres: genres.genres,
    },
  };
};
