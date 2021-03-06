interface ProjectCardProps {
    title: string,
    description: string,
    url: string,
    imageUrl: string
}

export default function ProjectCard(props: ProjectCardProps) {
    return (
        <a href={props.url} className={"max-w-screen-sm even:justify-self-end xl:even:justify-self-start"}>
            <div className="overflow-hidden rounded-lg bg-white h-full">
                <div className="flex justify-center items-center">
                    <img
                        src={props.imageUrl}
                        alt=""
                        className="object-cover h-48"
                    />
                </div>
                <header className="flex items-center justify-between leading-tight p-2 pb-3 md:p-4">
                    <h1 className="text-3xl">
                        <p className="no-underline text-black border-b-2 pb-3 border-gray-700">
                            {props.title}
                        </p>
                    </h1>
                </header>
                <div className={"text-black pl-4 pb-4"}>
                    <p>{props.description}</p>
                </div>
            </div>
        </a>
    )
}
