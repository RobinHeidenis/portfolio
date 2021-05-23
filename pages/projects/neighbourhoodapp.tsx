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
                <p>
                    I study software engineering, and for school we had to do a project in ASP.NET Core. I was placed in
                    a group, and together we had to make a neighbourhood app. There were some requirements, but they
                    were quite vague. Most of the implementation was left up to us.
                </p>
                <h2 className={"text-4xl mt-5"}>Spotlight</h2>
                <h3 className={"text-2xl"}>Front End</h3>
                <p>
                    I was responsible for most of the front end, and I took some creative liberties with that. The
                    requirements stated that we had to use bootstrap or a bootstrap like framework to make our front
                    end. I decided we were going to use Material Design Components. This is a Google maintained
                    framework that has all the styling and components required to make your webapp in the material
                    style.
                </p>
                <h3 className={"text-2xl"}>Webauthn</h3>
                <p>
                    A big feature that I worked on is logging in. I was responsible for the login flow, and I
                    decided to go one step further than most. I added webauthn to the project. At the time I was very
                    interested in webauthn, so I found a library that allowed us to implement this specification as a
                    2FA option. Webauthn allows a user to confirm their identity using their device instead of a code. I
                    also added the option of filling in a 2FA code if you're not on your webauthn device.
                </p>
                <h2 className={"text-4xl mt-5"}>The execution</h2>
                <h3 className={"text-2xl"}>Init</h3>
                <p>
                    We were handed an empty github repository and a list of requirements. We started by scaffolding the
                    Identity pages so we could edit them, and establish a link to our database. We then converted the
                    scaffolded bootstrap pages to Material Design Components. This was a very long process that took
                    multiple weeks.
                </p>
                <img src={"/images/articles/neighbourhoodapp/homepage.png"} alt={"The homepage of the app"}/>
                <h3 className={"text-2xl"}>Logging in</h3>
                <p>
                    I was responsible for the login and register flow. Since we have a lot of extra data for our User
                    class, the register form was very long. This would have deterred users from filling it in, thus
                    losing us business. We decided to split the form up into multiple parts. We did this so the user
                    felt like it was less work.
                    <video src={"/images/articles/neighbourhoodapp/register.mp4"} autoPlay loop muted/>
                    I also made the login flow. This consists of a username and password. For most users this is enough
                    to log in. But for the more privacy oriented users I also added a 2FA option. ASP.NET Core Identity
                    has this built in, but you still have to do some manual work to get it up and running. I was seeking
                    a challenge in this project, and this is one area where I could really learn something. At the time
                    I was really interested in webauthn, and I decided to implement this standard in our application. I
                    found a library that helped me accomplish this. I decided to use webauthn as a two factor
                    authentication method. It took quite some time to get everything to work, because the library I used
                    was quite complicated and cluttered, but eventually I managed to get everything connected in the
                    right way. I also added a way to fill in a normal 2FA code if you're not on the device you
                    registered webauthn with.
                </p>
                <h3 className={"text-2xl"}>Users, Posts, Comments</h3>
                <p>
                    In the meantime we started working on a lot of the back end code for our neighbourhood app. We added
                    User classes and got a lot of work done on the code for posts. The goal of the app was to be a
                    platform where people in a specific neighbourhood could make posts with a title, a description, and
                    possibly an image. The residents of the neighbourhood can use these posts to raise issues like
                    filthy parks or public nuisances.
                </p>
                <img src={"/images/articles/neighbourhoodapp/posts.png"} alt={"image of the posts page"}/>
                <p>
                    The community can then discuss the post in the comments, and
                    figure out a solution to the problem together. These posts could have comments and likes. We
                    implemented all of this, and I styled the pages. It was important that the comments and likes
                    wouldn't reload the entire page. We implemented this by using AJAX to send a request to the server
                    to like a post or comment or place a comment, and when the server responded that everything was okay
                    update the front end. This is a very common pattern, and we had no issues implementing this.
                </p>
                <img src={"/images/articles/neighbourhoodapp/postDetails.png"} alt={"image of the post details page"}/>
                <h3 className={"text-2xl"}>Pipeline</h3>
                <p>
                    I also added a pipeline to the project that would scan the project using a locally hosted SonarQube
                    instance. This allowed us to get insight into bugs and code smells we had in the project. The
                    pipeline took a lot of tries to get working, and we essentially wasted all of the school's Github
                    Action Credits. Eventually we got it working, and enjoyed our very useful insights.
                </p>
                <h3 className={"text-2xl"}>Profiles</h3>
                <p>
                    We then started working on profiles. Microsoft's Identity provides you with a User object that you
                    can extend. You can use this to add functions and data to the object. We had to show this extra data
                    we added to the user, so we needed to add pages that showed this. I worked on most of the profile
                    pages, while my team worked on comments and posts.
                </p>
                <img src={"/images/articles/neighbourhoodapp/account.png"} alt={"Image of the account page"}/>
                <h3 className={"text-2xl"}>Privacy</h3>
                <p>
                    We added a privacy policy and an about page, so the user would be informed about the data we
                    collected. This was a big focus of the requirements. The app had to be as privacy friendly as
                    possible.
                </p>
                <h3 className={"text-2xl"}>Grading</h3>
                <p>
                    The application was pretty much ready to be reviewed at this point, and we had just the finishing
                    touches left to do. After this was done we handed our project in for grading, and the app got a
                    10/10.
                </p>
                <h2 className={"text-4xl mt-5"}>Lessons learned</h2>
                <h3 className={"text-2xl"}>ASP.NET Core</h3>
                <p>
                    I learned a lot about ASP.NET Core, and with that C#. C# is very similar to Java, but there are
                    certainly some nice to have differences. My study started with teaching Java, so I learned quite a
                    bit about the differences and similarities between Java and C#. I also learned a lot about the
                    concepts of MVC, specifically in the context of ASP.NET. I think it's quite a nice framework to work
                    with, but I dislike the amount of scaffolded pages and code you get with it. It means that there is
                    a lot of code that you don't get to see, so you have less control over your code.
                </p>
                <h3 className={"text-2xl"}>MDC</h3>
                <p>
                    This was my first time working with MDC, and I learned a lot about what is and isn't possible with
                    this library. It was a very nice development experience, although it was frustrating at times. The
                    documentation for this library was not the best, and I struggled to find the right code to make it
                    work. In the end everything worked out fine, so I'm very satisfied with MDC.
                </p>
                <h3 className={"text-2xl"}>Teamwork</h3>
                <p>
                    The project was a team project. I learned a lot about working in a team, both working on different
                    parts of the application and working on the same thing. I had a great team for this project because
                    we completed each other. When someone's skills were lacking in one area, another team member could
                    step in to explain whatever they had trouble with. It was a great experience and really helped me
                    work better in a team.
                </p>
            </main>
        </div>
    )
}
