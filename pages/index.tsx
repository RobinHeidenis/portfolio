import Head from 'next/head'
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

            <main className={"text-white min-h-screen"}>
                <div className={"flex flex-1 flex-col items-center justify-center min-h-screen h-screen"}>
                    <img src={"/images/me.jpg"} alt={"picture of me"} width={200} height={200}
                         className={'rounded-full mb-4'}/>
                    <h1 className={"text-2xl ml-3 lg:text-5xl max-w-screen-sm"}>Hi there! I'm Robin.<br/>Front End
                        Developer, Student, Legendary Memer //todo change this lol</h1>
                    <p className={"ml-3 mt-5 lg:text-xl max-w-screen-sm"}>
                        I am a {currentAge()}-year-old student at The Hague University of Applied Sciences.
                        I study HBO-ICT, and I am due to graduate in 2023.
                    </p>
                    <p className={"ml-3 mt-5 lg:text-xl max-w-screen-sm "}>
                        I've been programming since I was 15. My dad was teaching me little bits and pieces about
                        websites and HTML.
                        He had me do a couple of exercises and gave me 'homework'. That's where my love for web
                        development started.
                        When I wrote my first lines of HTML I was just amazed and excited about the possibilities.
                        I did some development on and off, nothing serious.<br/><br/> Then I went to high school and I
                        picked ICT as a subject.
                        Here I learned the basics of web development according to a curriculum. I wasn't done learning
                        after the class, so I started doing the Responsive Web Development certification on
                        FreeCodeCamp.
                        Currently I'm learning React.js, Express, and Tailwind CSS.
                    </p>
                </div>

                <div>
                    <h1 className={"text-2xl lg:text-4xl max-w-screen-sm"}>My Skills</h1>
                    <p>Throughout my projects I've learnt a lot of technologies and skills. I certainly like some better
                        than others, but I try to keep up to date and improve in all of them</p>
                    <div className={"grid grid-cols-1 sm:grid-cols-4 grid-rows-7 sm:grid-rows-2 gap-2 mt-4"}>
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>JavaScript</p>
                        <p>Git</p>
                        <p>ASP.NET Core</p>
                        <p>React</p>
                        <p>PHP</p>
                    </div>
                </div>

                <div className={"mb-4"}>
                    <h1 className={"text-2xl lg:text-4xl mb-3 mt-4"} id={"projects"}>Projects</h1>
                    <p>I'm always working on something. Here you can see what I think is my most impressive work</p>
                </div>
                <div className={"grid grid-cols-1 lg:grid-cols-2 gap-6 pb-3"}>
                    <ProjectCard title={"Neighbourhood App"}
                                 description={"A neighbourhood app made in C# and ASP.NET Core"}
                                 url={"/projects/neighbourhoodapp"} imageUrl={"/images/articles/neighbourhoodapp/cover.png"}/>
                    <ProjectCard title={"Shopping List"}
                                 description={"A shopping list made in React.js with material-ui"} url={"/projects/shoppinglist"}
                                 imageUrl={"/images/articles/shoppinglist/cover.png"}/>
                    <ProjectCard title={"Work schedule sync"}
                                 description={"A program that syncs a work schedule to Google Calendar"}
                                 url={"/projects/calendar"} imageUrl={""}/>
                    <ProjectCard title={"Physical POS Application"}
                                 description={"A physical Point Of Sale application where customers can buy products and retrieve them from a desk"}
                                 url={"/projects/pos"} imageUrl={""}/>
                </div>
            </main>
        </div>
    )
}
