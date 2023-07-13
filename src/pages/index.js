import tmdb from "../config/tmdb";
import Moviescontainer from "../components/Cardcontainer";
import PaginatorComponent from "../components/Cardcontainer/Paginator";
import Container from "react-bootstrap/Container";
import { Row } from "react-bootstrap";
import { ProgressSpinner } from "primereact/progressspinner";
import { useEffect, useState } from "react";
export default function Home({ movies, genres, loading = true }) {
  const [data, setData] = useState({
    movies,
    genres,
    loading,
  });

  const [first, setFirst] = useState(1);
  const [rows, setRows] = useState(20);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState("");

  const onPageChange = (event) => {
    setFirst(event.first);
    setRows(event.rows);
    callMoviesFunc(event.page + 1);
  };

  const callMoviesFunc = async (page) => {
    setIsLoading(true);
    try {
      const movies = await tmdb.discover("movie", [
        {
          param: "page",
          value: page,
        },
      ]);
      const genres = await tmdb.getGenres("movie");
      setData({
        movies: movies,
        genres: genres.genres,
        loading: false,
      });
    } catch (error) {
      setErr(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {err && <h2>{err}</h2>}
      <Container fluid className="p-4">
        {isLoading && (
          <ProgressSpinner animationDuration=".5s" aria-label="Loading" />
        )}
        <Row>
          <Moviescontainer
            className="mt-8"
            data={data.movies}
            genres={data.genres}
            type="movies"
          />
        </Row>
        <Row>
          <PaginatorComponent
            className="grid grid-cols-2 md:grid-cols-6 space-x-2 mt-4"
            first={first}
            data={data.movies}
            onPageChange={onPageChange}
          />
        </Row>
      </Container>
    </>
  );
}

export const getStaticProps = async () => {
  const movies = await tmdb.discover("movie", [
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
      loading: false,
    },
  };
};
