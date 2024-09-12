import Chapter from "./Chapter"
import "./css/Sidebar.css"

export default function Sidebar({docs}) {

    return (
        <div className="Sidebar">
            <h1>{docs.title}</h1>
            <div style={{width: "100%", height: "100%"}} className="List">
                {docs.Chapters.map((chapter, index) => (
                    <Chapter key={chapter.title} chapter={chapter} />
                ))}
            </div>
        </div>
    )
}