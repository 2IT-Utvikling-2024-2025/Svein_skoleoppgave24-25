import Chapter from "./Chapter";
import "./css/Content.css"


export default function Content({docs}){
    return (
        <div>
            {docs.Chapters.map((chapter, index) => (
                <Chapter key={chapter.title} chapter={chapter} />
            ))}
        </div>
    )
}