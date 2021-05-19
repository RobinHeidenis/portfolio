interface ProjectInfoChartProps {
    type: string;
    stack: string[];
    code?: string;
}

export default function ProjectInfoChart(props: ProjectInfoChartProps) {
    return (
        <div className={"flex flex-col sm:flex-row justify-between w-auto mt-3"}>
            <div className={"mt-2 mb-2"}>
                <b>TYPE</b>
                <p>{props.type}</p>
            </div>
            <div className={"mt-2 mb-2"}>
                <b>STACK</b>
                <div className={"flex flex-col"}>
                    {props.stack.map((item) => {
                        return <p key={item}>{item}</p>
                    })}
                </div>
            </div>
            <div className={"mt-2 mb-2"}>
                <b>CODE</b>
                <p>{props.code? <a href={props.code}>Github</a> : "Currently Unavailable"}</p>
            </div>
        </div>
    )
}
