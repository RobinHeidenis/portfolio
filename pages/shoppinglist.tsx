import styles from "../styles/Home.module.css";
import Head from "next/head";

export default function ShoppingList() {
    return (
        <div className={styles.articleContainer}>
            <Head>
                <title>Portfolio</title>
                <meta name="description" content="Shopping list explanation"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <header className={"text-white"}>
                <div className={"flex flex-1 flex-col items-center mt-5 pt-5"}>
                    <h1 className={"text-6xl"}>Shopping List</h1>
                    <hr className={"w-full mt-5"}/>
                    <p>A shopping list made in React.js with material-ui</p>
                </div>
            </header>
            <main className={"mt-5"}>
                <h2 className={"text-3xl"}>The reason</h2>
                <p>
                    My family does groceries almost every day. We were facing the problem of not having easy access to a shopping list.<br/>
                    We are a family of programmers, so we thought we would make one ourselves. This would give us practice with HTML, CSS, JavaScript, and PHP. <br/>
                    It would also give us a shopping list that we could use for everyday shopping.<br/>
                </p>

                <h2 className={"text-3xl mt-5"}>The execution</h2>
                <p>
                    Our first protoype was written in plain HTML, CSS, JavaScript, and PHP. It started out very simple.<br/>
                    It was made for mobile phones; If you looked at it from the computer everything looked very big and blown up<br/>
                    <img src={"/images/articles/shoppinglist/initial_list.png"} alt={"initial list and features"} className={"border-2 border-white rounded-md mt-2"}/>
                </p>
            </main>
        </div>
    )
}
