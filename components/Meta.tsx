import Head from "next/head";

interface MetaProps {
    title?: string | String;
    subTitle?: string;
    keywords?: string;
    description?: string | String;
}

/**
 * 
 * @name Meta
 * @description This will add add various 
 * @param {string} title? Optional This will change the title of the page
 * @param {string} keywords "team associated, b6.2, b6, dirt, track name" - Keywords for the page you are on
 * @param {string} description This is the descripition that will be displayed on google

 */
export const Meta: React.FC<MetaProps> = ({
    title = "Setup Rc",
    subTitle,
    keywords = "Setup Rc, RC Setups, rc cars, rc car racing, setups, team associated, team losi racing, team yokomo, yokomo, ",
    description = "Get the latest news in web dev",
}) => {
    return (
        <Head>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
            <meta name="keywords" content={keywords} />
            <meta name="description" content={description} />
            <meta charSet="utf-8" />
            <link rel="icon" href="/favicon.ico" />
            <title>{subTitle ? title + " - " + subTitle : title}</title>
        </Head>
    );
};
