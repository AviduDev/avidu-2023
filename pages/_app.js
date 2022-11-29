import "../styles/globals.css";
import Navbar from "../components/Navbar";

import { AnimatePresence } from "framer-motion";
import { AnimateSharedLayout } from "framer-motion";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <AnimateSharedLayout type="crossfade">
        <Component {...pageProps} />
      </AnimateSharedLayout>
    </div>
  );
}

export default MyApp;
