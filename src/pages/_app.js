import Header from "../components/Layouts/Header";
import Footer from "../components/Layouts/Footer";

import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
// import "tailwindcss/tailwind.css";
function TMDBApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default TMDBApp;
