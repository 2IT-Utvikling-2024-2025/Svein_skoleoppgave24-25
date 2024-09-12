import Section from "./Section";
import { useState } from "react";

export default function Chapter({chapter}) {

    const [open, setOpen] = useState(false);

    return(
        <div>
        <a href={`#${chapter.title}`} onClick={() => setOpen(!open)} className="Chapter">{chapter.title}</a>
        {chapter.content ?
            null
            :
            <div className="Sections" style={{display: open ? "flex" : "none"}}>
            {open ? chapter.sections.map((section, index) => (
                <Section key={section.title} section={section} />
            ))
            : 
            null
            }
            </div>
        }
        </div>
    )
}