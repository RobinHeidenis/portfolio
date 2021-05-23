import styles from "../../styles/Home.module.css";
import Head from "next/head";
import NavBar from "../../components/NavBar";
import ArticleHeader from "../../components/ArticleHeader";
import ProjectInfoChart from "../../components/ProjectInfoChart";

export default function Neighbourhoodapp() {
    return (
        <div className={styles.articleContainer}>
            <Head>
                <title>Portfolio</title>
                <meta name="description" content="POS Application"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <NavBar/>
            <header className={"text-white max-w-screen-sm"}>
                <ArticleHeader title={"POS Application"}
                               description={"A physical Point Of Sale application where customers can buy products and retrieve them from a desk"}/>
            </header>
            <main className={"mt-5 max-w-screen-sm "}>
                <h2 className={"text-4xl"}>Introduction</h2>
                <ProjectInfoChart type={"Freelance Project"} stack={["PHP", "JQuery", "HTML", "CSS", "JavaScript"]}/>
                <h2 className={"text-4xl mt-5"}>The reason</h2>
                <p>
                    My dad's employer was moving to a new building, and they wanted a small convenience store for the
                    truckers that came to drop or pick up supplies.
                </p>
                <h2 className={"text-4xl mt-5"}>Spotlight</h2>
                <h2 className={"text-4xl mt-5"}>The execution</h2>
                <h2 className={"text-4xl mt-5"}>Lessons learned</h2>
            </main>
        </div>
    )
}
