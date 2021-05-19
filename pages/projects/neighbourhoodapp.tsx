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
                <meta name="description" content="Neighbourhood App"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <NavBar/>
            <header className={"text-white max-w-screen-sm"}>
                <ArticleHeader title={"Neighbourhood App"}
                               description={"A neighbourhood app made with ASP.NET Core"}/>
            </header>
            <main className={"mt-5 max-w-screen-sm "}>
                <h2 className={"text-4xl"}>Introduction</h2>
                <ProjectInfoChart type={"School Project"} stack={["ASP.NET Core", "MDC", "HTML", "CSS", "JavaScript"]}/>
                <h2 className={"text-4xl mt-5"}>The reason</h2>
                <h2 className={"text-4xl mt-5"}>Spotlight</h2>
                <h2 className={"text-4xl mt-5"}>The execution</h2>
                <h2 className={"text-4xl mt-5"}>Lessons learned</h2>
            </main>
        </div>
    )
}
