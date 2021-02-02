import Nav from "./Nav";
import { Meta } from "./Meta";
import Header from "./Hero";
import styles from "../styles/Layout.module.css";

export const Home: React.FC<any> = ({ children }) => {
    return (
        <>
            <Meta />
            <Nav />
            <div className={styles.container}>
                <main className={styles.main}>
                    <Header />
                    {children}
                </main>
            </div>
        </>
    );
};