import Link from "next/link";
import articleStyles from "../styles/Setup.module.css";
import { ISetup } from "../types";

interface IArticleItemProps {
    setup: ISetup;
}

const SetupPreview: React.FC<IArticleItemProps> = ({ setup }) => {
    return (
        <Link href={`/article/${setup._id}`} key={setup._id}>
            <a className={articleStyles.card}>
                <h3>{setup.Name} &rarr;</h3>
                <p>{setup.Track}</p>
            </a>
        </Link>
    );
};

export default SetupPreview;
