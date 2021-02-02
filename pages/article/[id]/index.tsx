import { server } from "../../../config";
import Link from "next/link";
import { useRouter } from "next/router";
import { Meta } from "../../../components/Meta";
import { ISetup } from "../../../types";

interface SetupProps {
    setup: ISetup;
}
const article: React.FC<SetupProps> = ({ setup }) => {
    // const router = useRouter()
    // const { id } = router.query

    return (
        <>
            <Meta title={setup.Name} description={setup.Name} />
            <h1>{setup.Name}</h1>
            <p>{setup.Track}</p>
            <br />
            <Link href="/">Go Back</Link>
        </>
    );
};

export const getStaticProps = async (context: any) => {
    const res = await fetch(`${server}/setups/${context.params.id}`);

    const setupsResponse = await res.json();
    const { setup } = setupsResponse;

    return {
        props: {
            setup,
        },
    };
};

export const getStaticPaths = async () => {
    const res = await fetch(`${server}/setups`);
    const setupsResponse = await res.json();
    const { setups } = setupsResponse;

    const ids = setups.map((article) => article._id);
    const paths = ids.map((_id) => ({ params: { id: _id.toString() } }));

    return {
        paths,
        fallback: false,
    };
};

// export const getStaticProps = async (context) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   )

//   const article = await res.json()

//   return {
//     props: {
//       article,
//     },
//   }
// }

// export const getStaticPaths = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)

//   const articles = await res.json()

//   const ids = articles.map((article) => article.id)
//   const paths = ids.map((id) => ({ params: { id: id.toString() } }))

//   return {
//     paths,
//     fallback: false,
//   }
// }

export default article;
