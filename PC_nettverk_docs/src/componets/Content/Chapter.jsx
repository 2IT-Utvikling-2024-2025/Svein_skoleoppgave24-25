import Section from "./Section";


export default function Chapter({chapter}) {
    return (
        <div className="Chapter">
            <h1>{chapter.title}</h1>
            {chapter.content ? 
            <h3>{chapter.content}</h3>
             : 
            <div>
                {chapter.sections.map((section, index) => (
                    <Section key={section.title} section={section} />
                ))}
            </div>
             }
        </div>
    )
}