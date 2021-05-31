import styles from "../../styles/Home.module.css";
import Head from "next/head";
import NavBar from "../../components/NavBar";
import ArticleHeader from "../../components/ArticleHeader";
import ProjectInfoChart from "../../components/ProjectInfoChart";

export default function ShoppingList() {
    return (
        <div className={styles.articleContainer}>
            <Head>
                <title>Portfolio</title>
                <meta name="description" content="Shopping list"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <NavBar/>
            <header className={"text-white max-w-screen-sm article"}>
                <ArticleHeader title={"Shopping List"}
                               description={"A shopping list made in React with Material-ui"}/>
            </header>
            <main className={"mt-5 max-w-screen-sm"}>
                <h2 className={"text-4xl"}>Introduction</h2>
                <p>This shopping list is a project I made for me and my family. We needed a good way to make a list of
                    items to get at the store, so we thought: 'Why not make it ourselves?'.
                    The project has gone through multiple iterations, one of which is pretty much just a completely new
                    project. The list allows users to add, check, remove, search items, and add or remove default
                    items.</p>

                <ProjectInfoChart type={"Personal Project"} stack={["React", "Material-ui", "Express"]}/>

                <h2 className={"text-4xl mt-5"}>The reason</h2>
                <p>
                    My family does groceries almost every day. We were facing the problem of not having easy access to a
                    shopping list.
                    We are a family of programmers, so we thought we would make one ourselves. This would give us
                    practice with HTML, CSS, JavaScript, and PHP.
                    It would also give us a shopping list that we could use for everyday shopping. The project started
                    out with just a simple list, connected to a database.
                    This slowly grew with more and more features.
                </p>

                <h2 className={"text-4xl mt-5"}>Spotlight</h2>
                <p>
                    <h3 className={"text-2xl"}>Technology</h3>
                    It was quite a challenge to make this project. The first iteration was quite simple, and
                    technologically not very impressive.
                    The redesign however was made in React. Prior to this project I had no experience with React, so I
                    had quite a bit to learn.
                    I kept trying and with some help of my friends I got everything working.
                    <h3 className={"text-2xl"}>UI</h3>
                    Another challenge with this project was the UI.
                    I thought the old UI was too cluttered, so one of the main focuses for the redesign was to make the
                    UI look good, clean, and usable.
                    I'm really proud of the swiping actions. When you want to check or delete an item, you swipe the
                    item, and the action executes.
                    <h3 className={"text-2xl"}>Themes</h3>
                    Another challenge was the theme switcher. I made it and tested it in development. The theme you
                    switched to would only apply to half the app, and it was just a mess. I had to stop working for the
                    day, so I pushed this unfinished update to production with a warning that it might not work.
                    The theme switcher worked perfectly on production, and to this day I've never found out why.
                </p>

                <h2 className={"text-4xl mt-5"}>The execution</h2>
                <p>
                    <h3 className={"text-2xl"}>Iteration #1</h3>
                    Our first iteration was written in plain HTML, CSS, JavaScript, and PHP. It started out very simple.
                    It was made for mobile phones; If you looked at it from the computer everything looked very big and
                    blown up
                    <img src={"/images/articles/shoppinglist/initial_list.png"} alt={"initial list and features"}
                         className={"border-2 border-white rounded-md mt-3 mb-3"}/>
                    It was just a simple list where you can add and remove items. The items can have a quantity and a
                    link. If a link has been filled in a link icon appears next to the item.
                    The user can click on this icon to be redirected to the product on an external website.
                    <img src={"/images/articles/shoppinglist/link.png"} alt={"link icon next to an item"}
                         className={"border-2 border-white rounded-md mt-3 mb-3"}/>
                    <h3 className={"text-2xl"}>Going live</h3>
                    This was pretty much all we needed to go live. We used the shopping list for a while and came up
                    with some features that we thought were missing.
                    The next feature we added was editing items. Next to an item there is a pencil. When the user clicks
                    on the pencil, the item details get filled in the input fields.
                    The user can then edit the fields and submit the item, thereby updating it on the server.
                    <br/>
                    After this we added a default item list feature. This feature allowed users to save items for easy
                    reuse.
                    <img src={"/images/articles/shoppinglist/standard_items.png"} alt={"standard items list"}
                         className={"border-2 border-white rounded-md mt-3 mb-3"}/>
                    Another feature was searching items. We mostly shop at one specific store, and we wanted a feature
                    where a user could search for a product on the website of this store.
                    The backend sends a request to the website, and extracts all the items from the HTML using regex. It
                    then shows the items in a list,
                    where the user can add the items to the list.
                    <img src={"/images/articles/shoppinglist/search.png"} alt={"search page"}
                         className={"border-2 border-white rounded-md mt-3 mb-3 max-h-96"}/>
                    <h3 className={"text-2xl"}>Iteration #2</h3>
                    These features served as the basis for the redesign. I was very interested in React, and I decided
                    to remake the shopping list in this framework.
                    I used material-ui to make the UI and style the application. All the features were implemented one
                    by one, some in a slightly different way.
                    <img src={"/images/articles/shoppinglist/redesign.png"} alt={"redesign"}
                         className={"border-2 border-white rounded-md mt-3 mb-3 max-h-96"}/>
                    The new UI looks cleaner, has more space for the items, and is better usable. You can now choose
                    between checking items and removing them.
                    You do this by swiping the item to a particular side, as demonstrated in the screenshot above.
                    The search and default items have been given a separate page, to make it feel more like a mobile
                    application.
                    The way to add items has been tucked away behind the plus button.
                    This button shows a dialog where the user can enter the item details.
                    <img src={"/images/articles/shoppinglist/dialog.png"} alt={"add item dialog"}
                         className={"border-2 border-white rounded-md mt-3 mb-3"}/>
                    Lastly, I made a settings page. Here the user can see the changelog for the current version, and
                    change their theme.
                    There are three hand-defined themes and they cover all the options my family wanted.
                    <img src={"/images/articles/shoppinglist/settings.png"} alt={"settings"}
                         className={"border-2 border-white rounded-md mt-3 mb-3"}/>
                </p>

                <h2 className={"text-4xl mt-5"}>Lessons learned</h2>
                <p>
                    <h3 className={"text-2xl"}>React</h3>
                    I learned quite a bit from this project. First of all I learned the very basics of React. React was
                    a great choice for this project. It makes making a single page application very easy to do, and the
                    performance is great too.
                    The app has a list of items, and this list gets changed a lot, so it's great that React can only
                    rerender what has changed. Secondly, I learned how to use the material-ui.
                    <h3 className={"text-2xl"}>User feedback</h3>
                    I also learned the importance of listening to user feedback. It often happened that my users wanted
                    something a certain way, but I thought it would be better a different way.
                    If you don't keep your users happy, they'll leave.
                    <h3 className={"text-2xl"}>Code reviews</h3>
                    Lastly I learned how useful code reviews are. I went over some of my code with a friend who uses
                    React for his job,
                    and he told me what I could have done better. This really helped me learn React better and produce
                    better code.
                    I would like to do more code reviews in the future.
                </p>
            </main>
        </div>
    )
}
