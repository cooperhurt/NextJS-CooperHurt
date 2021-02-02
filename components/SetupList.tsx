import SetupPreview from "./Setup";
import articleStyles from "../styles/Setup.module.css";
import { ISetup } from "../types";

interface ISetupListProps {
    setups: ISetup[];
}

const SetupList: React.FC<ISetupListProps> = ({ setups }) => {
    return (
        <div className={articleStyles.grid}>
            {setups?.map((setup, index) => (
                <SetupPreview setup={setup} key={setup._id + setup.Name} />
            ))}
        </div>
    );
};

export default SetupList;
