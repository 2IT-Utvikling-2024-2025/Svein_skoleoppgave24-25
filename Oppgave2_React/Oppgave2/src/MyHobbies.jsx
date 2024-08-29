const hobbies = [
    { title: "Utvikling", isFav: true, upvotes: 0, id: 0 },
    { title: "Gaming", isFav: false, upvotes: 0, id: 1 }
]

export default function MyHobbies() {
    return (
        <>
            <h1>Svein Leonides Johansen</h1>
            <ul>
            {hobbies.sort((a,b) => a.title.length - b.title.length).map(Hobby =>
                <li key={Hobby.id}>
                    {Hobby.title}
                </li>
            )}
            </ul>
        </>
    )
}