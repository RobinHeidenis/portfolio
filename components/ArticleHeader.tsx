interface ArticleHeaderProps {
    title: string;
    description: string;
}

export default function ArticleHeader(props: ArticleHeaderProps) {
    return (
        <div className={"flex flex-1 flex-col items-center sm:mt-5 pt-5"}>
            <h1 className={"text-4xl sm:text-6xl"}>{props.title}</h1>
            <hr className={"w-full mt-5"}/>
            <p className={"mt-2"}>{props.description}</p>
        </div>
    )
}
