interface ProjectCardProps {
    title: string,
    description: string,
    url: string,
    imageUrl: string
}

export default function ProjectCard(props: ProjectCardProps) {
    return (
        <a href={props.url}>
            <div
                className="grid grid-cols-3 grid-rows-7 grid-flow-row overflow-hidden rounded-lg bg-white"
            >
                <div className="col-span-3 row-span-4 flex justify-center items-center">
                    <img
                        src={props.imageUrl}
                        alt="Image of the finished product of this project"
                        className="object-cover h-48"
                    />
                </div>
                <div className="col-span-3 row-span-1">
                    <header className="flex items-center justify-between leading-tight p-2 pb-3 md:p-4">
                        <h1 className="text-3xl">
                            <p className="no-underline text-black border-b-2 pb-3 border-gray-700">
                                {props.title}
                            </p>
                        </h1>
                    </header>
                </div>
                <div className={"col-span-3 row-span-1 text-black pl-4 pb-4"}>
                    <p>{props.description}</p>
                </div>
            </div>
        </a>
    )
}
