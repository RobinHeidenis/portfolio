import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ProjectCard from "../components/ProjectCard";

function currentAge() {
    // @ts-ignore
    return ((Date.now() - new Date(2002, 5, 8)) / 1000 / 60 / 60 / 24 / 365).toFixed();
}

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Portfolio</title>
                <meta name="description" content="Robin Heidenis' portfolio"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={"text-white h-screen"}>
                <div className={"flex flex-1 flex-col items-center justify-center min-h-screen h-screen"}>
                    <img src={"/images/me.jpg"} alt={"picture of me"} width={200} height={200}
                         className={'rounded-full mb-4'}/>
                    <h1 className={"text-5xl"}>Robin Heidenis</h1>
                    <p className={"text-center mt-5 text-xl"}>
                        Hi! And welcome to my portfolio. That picture up there is me. I am
                        currently {currentAge()} years old. <br/>
                        I am still in school, but I am due to graduate in 2023. I study HBO-ICT at The Hague University
                        of Applied Sciences. <br/>
                        I love playing games, talking with my friends, and programming. <br/>
                        I usually make projects that make my life and that of my family easier. <br/>
                        You can see a selection of my projects below <br/>
                    </p>
                    <span className={"animate-bounce justify-self-end mt-5"}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
                            </svg>
                        </span>
                </div>

                <div className={"flex flex-1 flex-col items-center justify-center mb-5"}>
                    <h1 className={"text-5xl mb-3 border-b-2 pb-2"}>School</h1>
                </div>
                <div className={"grid grid-cols-1 lg:grid-cols-2 gap-6 pb-3"}>
                    <ProjectCard title={"Neighbourhood App"} description={"A neighbourhood app made in C# and ASP.NET Core"} url={"/neighbourhoodApp"} imageUrl={"/images/articles/neighbourhoodapp/cover.png"}/>
                    <ProjectCard title={"Project Kumbaya"} description={"A java application made for people in places without internet"} url={"/kumbaya"} imageUrl={""}/>
                    <ProjectCard title={"The Challenge"} description={"An android game that helps save water while showering"} url={"/challenge"} imageUrl={""}/>
                </div>

                <div className={"flex flex-1 flex-col items-center justify-center mb-10"}>
                    <h2 className={"text-5xl border-b-2 pb-2"}>Personal</h2>
                </div>
                <div className={"grid grid-cols-1 lg:grid-cols-2 gap-6 pb-3"}>
                    <ProjectCard title={"Shopping List"} description={"A shopping list made in React.js with material-ui"} url={"/shoppingList"} imageUrl={""}/>
                    <ProjectCard title={"Work schedule sync"} description={"A program that syncs a work schedule to Google Calendar"} url={"/calendar"} imageUrl={""}/>
                </div>

                <div className={"flex flex-1 flex-col items-center justify-center mb-10"}>
                    <h1 className={"text-5xl border-b-2 pb-2"}>Work</h1>
                </div>
                <div className={"grid grid-cols-1 lg:grid-cols-2 gap-6 pb-3"}>
                    <ProjectCard title={"Physical POS Application"} description={"A physical Point Of Sale application where customers can buy products and retrieve them from a desk"} url={"/pos"} imageUrl={""}/>
                </div>
            </main>
        </div>
    )
}
