import { server } from "../config";
import SetupList from "../components/SetupList";

export default function Home({ setups }) {
    return (
        <div>
            <SetupList setups={setups} />
        </div>
    );
}

export const getStaticProps = async () => {
    const res = await fetch(`${server}/setups`);
    const setupsResponse = await res.json();
    const { setups } = setupsResponse;

    return {
        props: {
            setups,
        },
    };
};

// export const getStaticProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
//   const articles = await res.json()

//   return {
//     props: {
//       articles,
//     },
//   }
// }
