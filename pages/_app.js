import "../styles/globals.css";
import Navbar from "../components/Navbar";

import { AnimatePresence } from "framer-motion";


function MyApp({ Component, pageProps, router }) {
  return (
    <div>
      <AnimatePresence initial={false} >
        <Navbar />
        <Component key={router.route} {...pageProps} />
      </AnimatePresence>
    </div>
  );
}

export default MyApp;
