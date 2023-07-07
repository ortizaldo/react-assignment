import Header from "../components/Layouts/Header";

import "../styles/globals.css";
import "tailwindcss/tailwind.css";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
