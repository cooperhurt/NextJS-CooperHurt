import { Home } from "../components/Home";
import "../styles/globals.css";

function MyApp({ Component, pageProps, router }) {
    return (
        <Home>
            <Component {...pageProps} />
        </Home>
    );
}

export default MyApp;
