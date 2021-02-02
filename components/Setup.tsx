import Link from "next/link";
import articleStyles from "../styles/Setup.module.css";
import { IArticle } from "../types";

interface IArticleItemProps {
    article: IArticle;
    key: number
}

const ArticleItem: React.FC<IArticleItemProps> = ({ article, key }) => {
    return (
        <Link href={`/article/${article.id}`} key={key}>
            <a className={articleStyles.card}>
                <h3>{article.title} &rarr;</h3>
                <p>{article.excerpt}</p>
            </a>
        </Link>
    );
};

export default ArticleItem;
