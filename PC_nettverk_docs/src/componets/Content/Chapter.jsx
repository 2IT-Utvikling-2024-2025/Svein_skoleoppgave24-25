import Section from "./Section";


export default function Chapter({chapter}) {
    return (
        <div className="Chapter" id={chapter.title}>
            <h1>{chapter.title}</h1>
            {chapter.content ? 
            <p>{chapter.content}</p>
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