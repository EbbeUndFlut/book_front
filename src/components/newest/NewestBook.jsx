import { useEffect, useState } from "react"
import NewestBookItem from "./NewestBookItem"

export default function NewestBook() {
    const [books, setBooks] = useState([])

    useEffect(() => {
        fetch(import.meta.env.VITE_SERVER + '/api/book')
            .then(resp => resp.json())
            .then(data => setBooks(data))
            .catch(err => console.log(err))

    }, [])
    return (
        <section className="flex p-5 m-5">
            {books.length > 0 &&
                books.map(book => <NewestBookItem book={book} />)
            }
        </section>

    )
}