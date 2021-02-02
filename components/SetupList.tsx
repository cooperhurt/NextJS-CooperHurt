import ArticleItem from "./Setup";
import articleStyles from "../styles/Setup.module.css";
import { IArticle } from "../types";

interface IArticleListProps {
    articles: IArticle[];
}

const ArticleList: React.FC<IArticleListProps> = ({ articles }) => {
    return (
        <div className={articleStyles.grid}>
            {articles.map((article, index) => (
                <ArticleItem article={article} key={index} />
            ))}
        </div>
    );
};

export default ArticleList;
