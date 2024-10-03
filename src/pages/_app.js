import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "../styles/global.css";

import Header from "../common/components/ui/Header";
import Footer from "../common/components/ui/Footer";

const MyApp = ({ Component, pageProps }) => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex-grow p-4 overflow-x-auto">
      <Component {...pageProps} />
    </main>
    <Footer />
    <ToastContainer />
    <aside className="sounds">
      <audio id="sound-click" src="/sounds/card-click.ogg" preload="auto" />
      <audio id="sound-jobdone" src="/sounds/jobs-done.ogg" preload="auto" />
    </aside>
  </div>
);

export default MyApp;
