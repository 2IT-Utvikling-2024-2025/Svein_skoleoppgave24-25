

export default function Section({section}) {

    return (
        <div>
            <h2>{section.title}</h2>
            <p>{section.content}</p>
        </div>
    )
}