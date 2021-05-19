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
                <meta name="description" content="Calendar Sync"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <header className={"text-white max-w-screen-sm"}>
                <NavBar/>
                <ArticleHeader title={"Work schedule sync"}
                               description={"A program that syncs a work schedule to Google Calendar"}/>
            </header>
            <main className={"mt-5 max-w-screen-sm "}>
                <h2 className={"text-4xl"}>Introduction</h2>
                <ProjectInfoChart type={"Personal Project"} stack={["PHP"]}/>
                <h2 className={"text-4xl mt-5"}>The reason</h2>
                <p>
                    I work at a supermarket on a week to week schedule basis. This schedule gets published every week on
                    a system that was created in the 2000's. As you can imagine, this system does not have an API or
                    calendar integration. After working there for about 1.5 years I got very tired of the same workflow
                    every week: log in, go to the schedule, copy it to my Google calendar. 'this can be automated' I
                    thought, but I had no idea where to begin. I searched on the internet and found web scraping.
                </p>
                <h2 className={"text-4xl mt-5"}>Spotlight</h2>
                <h2 className={"text-4xl mt-5"}>The execution</h2>
                <p>
                    I made a new PHP file, and wrote in pseudo code what I needed to do:
                    <ol className={"list-decimal ml-4"}>
                        <li>Log in to the intranet.</li>
                        <li>Go to the schedule page</li>
                        <li>Extract the dates and times I have to work</li>
                        <li>Output these in ICAL format</li>
                    </ol>
                    At the beginning of this project I knew nothing about ICAL or web scraping, so I needed to study
                    these subjects. I decided to start with logging in in the first place. My job uses a SSO system made
                    by IBM for security, and thus has a slightly different way of authentication than just a simple
                    login form. I did not know this at the time, and I was stuck. That would not be the last time I'd be
                    stuck in this project. I tried different urls on the login server and eventually I found out that it
                    was a SSO system. This was a huge clue! I researched SSO and downloaded insomnia to help with
                    testing. I inputted my username and password, and... It worked! The only thing I had to do now was
                    turn this manual insomnia login into code. And that's where I got stuck again. When a user logs into
                    a SSO environment, the server sends an XML response and signs it. This response is your 'token' to
                    log in to all the other apps in the environment. My code didn't capture this response. I could log
                    in, but I couldn't get to any other internal apps.
                </p>
                <h2 className={"text-4xl mt-5"}>Lessons learned</h2>
            </main>
        </div>
    )
}
