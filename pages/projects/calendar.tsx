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
                <ProjectInfoChart type={"Personal Project"} stack={["PHP", "CURL"]}/>
                <h2 className={"text-4xl mt-5"}>The reason</h2>
                <p>
                    I work at a supermarket on a week to week schedule basis. This schedule gets published every week on
                    a system that was created in the 2000's. As you can imagine, this system does not have an API or
                    calendar integration. After working there for about 1.5 years I got very tired of the same workflow
                    every week: log in, go to the schedule, copy it to my Google calendar. 'this can be automated' I
                    thought, but I had no idea where to begin. I searched on the internet and found web scraping.
                </p>
                <h2 className={"text-4xl mt-5"}>Spotlight</h2>
                <p>The project took about 6 months to complete. This was mostly because there were a lot of hurdles, and
                    I had to study a lot of material to overcome all the hurdles. The biggest challenge was logging in.
                    My job uses a SSO environment, and I had no knowledge of the way this system worked or even that it
                    used this system, so it was quite a challenge to figure this out and write the correct code for the
                    system.
                </p>
                <h2 className={"text-4xl mt-5"}>The execution</h2>
                <p>
                    <h3 className={"text-2xl"}>Pseudo Code</h3>
                    I made a new PHP file, and wrote in pseudo code what I needed to do:
                    <ol className={"list-decimal ml-4"}>
                        <li>Log in to the intranet</li>
                        <li>Go to the schedule page</li>
                        <li>Extract the dates and times I have to work</li>
                        <li>Output these in ICAL format</li>
                    </ol>
                    At the beginning of this project I knew nothing about ICAL or web scraping, so I needed to study
                    these subjects.
                    <h3 className={"text-2xl"}>Logging in</h3>
                    I decided to start with logging in in the first place. My job uses a SSO system made
                    by IBM for security, and thus has a slightly different way of authentication than just a simple
                    login form. I did not know this at the time, and I was stuck. That would not be the last time I'd be
                    stuck in this project. I tried different urls on the login server and eventually I found out that it
                    was a SSO system. This was a huge clue! I researched SSO and downloaded insomnia to help with
                    testing. I inputted my username and password, and... It worked! The only thing I had to do now was
                    turn this manual insomnia login into code.
                    <h3 className={"text-2xl"}>Tokens</h3>
                    And that's where I got stuck again. When a user logs into
                    a SSO environment, the server sends an XML response and signs it. This response is your 'token' to
                    log in to all the other apps in the environment. My code didn't capture this response. I could log
                    in, but I couldn't get to any other internal apps. I was stuck on this for a while, but after
                    researching SSO even more I figured out that I had to save this response and send it with every
                    request to a new server. I implemented this and it worked! I could now log in to other apps. I
                    <h3 className={"text-2xl"}>Schedule</h3>
                    implemented code to navigate to the schedule page, and download the HTML. After this I created a
                    function that extracted the date and time using regex. I now had this data, but I had no idea what
                    to do with it. I needed to some more research on the ancient ICAL protocol.
                    <h3 className={"text-2xl"}>ICAL</h3>
                    At the beginning I knew nothing about ICAL. At the end, I probably still don't know half of it. It
                    was quite a challenge to find out exactly what I had to output. After some searching I luckily found
                    a good website that explained exactly in what form I had to output the data. I set the content-type
                    header, and outputted the data in the right format. To my surprise it worked. When I visited the
                    page, I was prompted to download an .ics file. Now the only thing still left to do was to make a
                    <h3 className={"text-2xl"}>Connection to Google</h3>
                    I now had all the data, outputted in the correct format, on my server. I needed Google Calendar to
                    periodically refresh the page and import the data into the calendar. This was easier said than done.
                    Google refreshes calendars "every few hours", which was too unreliable for this project. The
                    schedule could be changed at any moment, and I wanted the most up to date data possible in my
                    calendar. Luckily, someone already made a solution to this problem. Github user derekantrican made a
                    Google Scripts script where the user can set a specific interval, an array of calendar urls, and
                    names for these calendars. The script then automatically triggers at this interval, sends a request
                    to the url, and imports the data into a calendar. This allows me to specify the interval at which I
                    want to sync the calendar, which is exactly what I needed.
                </p>
                <h2 className={"text-4xl mt-5"}>Lessons learned</h2>
                <p>
                    <h3 className={"text-2xl"}>Patience</h3>
                    I learned quite a bit in this project. First of all I learned patience. I was stuck time and time
                    again, and I really needed to just try one more time or research a little bit more about a subject
                    before I could overcome the hurdle. The project spanned about six months, so there was a lot of
                    patience involved.
                    <h3 className={"text-2xl"}>Resilience</h3>
                    There were a lot of hurdles in this project, and it also required a lot of resilience. When I
                    couldn't figure out the solution I just had to try one more thing or read one more article. I spent
                    a lot of time just trying and exhausting all my options, never really getting the project out of my
                    mind until I had solved the problem.
                    <h3 className={"text-2xl"}>ICAL</h3>
                    This project was my first real encounter with ICAL, so I had quite a lot to learn about this
                    subject. I learned a lot about the specification and the differences between calendar providers. I
                    also learned about how to output ICAL using PHP.
                    <h3 className={"text-2xl"}>Libraries</h3>
                    This project also taught me how useful it is to use libraries from other people. While researching
                    for this article I looked up a specific question about ICAL and PHP. It turns out that there are
                    libraries that make ICAL easy. I had not used these, but it would've been easier to make this
                    project. In the end i'm glad I didn't, because I feel like I've learned more this way. The Google
                    Scripts script I used was very useful, because it would've cost me a lot of time to make this
                    myself, and at that time I didn't have enough knowledge to make that script.
                </p>
            </main>
        </div>
    )
}
