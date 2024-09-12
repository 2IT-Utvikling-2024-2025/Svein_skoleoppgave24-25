

export default function Section({section}) {
    return (
        <div>
            <a href={`#${section.title}`} className="Section">{section.title}</a>
        </div>
    )
}