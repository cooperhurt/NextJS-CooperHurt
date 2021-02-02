import React from "react";
import { server } from "../../config";
import Link from "next/link";
import { useRouter } from "next/router";
import { Meta } from "../../components/Meta";
import { IArticle } from "../../types";
import ArticleList from "../../components/SetupList";

interface IArticleProps {
    articles: IArticle[];
}

const article: React.FC<IArticleProps> = ({ articles }) => {

    return (
        <>
            <Meta title={"Articles"} description={"descript"} />
            <h1>Articles</h1>
            <ArticleList articles={articles} />

            <Link href="/">Go Back</Link>
        </>
    );
};

export const getStaticProps = async () => {
    const res = await fetch(`${server}/api/articles/`);

    const articles = await res.json();

    return {
        props: {
            articles,
        },
    };
};

export const getStaticPaths = async () => {
    const res = await fetch(`${server}/api/articles`);

    const articles: IArticle[] = await res.json();

    const ids = articles.map((article) => article.id);
    const paths = ids.map((id) => ({ params: { id: id.toString() } }));

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
