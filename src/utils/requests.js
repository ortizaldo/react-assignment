import Moviestmdb from "moviestmdb";
const tmdb = new Moviestmdb(process.env.TMDB_API_KEY);
console.log(
  "🚀 ~ file: tmdb.js:3 ~ process.env.TMDB_API_KEY:",
  process.env.TMDB_API_KEY
);
export default tmdb;
