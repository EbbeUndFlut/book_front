import { useRef } from "react";
import Navbar from "../components/navbar/Navbar";

export default function AddBookPage() {

    const formRef = useRef()

    function submit(e) {
        // HTML FORM Tag will bei einem Submit die Seite neuladen, das können wir nicht gebrauchen deswegn schreiben wir das:
        e.preventDefault()

        // Wir erstellen uns ein Book Object, welches wir zu unserem backend senden wollen
        const book = {
            title: formRef.current.title.value,
            author: formRef.current.title.value
        }
        console.log(book)

        // Jetzt senden wir das book object an unser backend
        fetch(import.meta.env.VITE_SERVER + "/api/book", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(book)
        }).then(resp => {
            // Wir brauchen User Feedback, wenn der Response durch ist, egal ob es geklappt hat oder ob es einen Fehler gab
            if (resp.ok) {
                // Hier setzten wir einfach nur das Formular zurück, das reicht aber nicht als Feedback
                formRef.current.reset()
            }
        })

    }
    return (
        <>
            <Navbar />
            <section>
                <form ref={formRef} onSubmit={submit}>
                    <div className="flex flex-col m-5">
                        <label htmlFor="title">Enter book title</label>
                        <input className="input input-primary" type="text" name="title" id="title" required />
                    </div>
                    <div className="flex flex-col m-5">
                        <label htmlFor="author">Enter book author</label>
                        <input className="input input-primary" type="text" name="author" id="author" required />
                    </div>
                    <input className="m-5 btn btn-primary" type="submit" value="add book" />
                </form>
                {/* <div class="toast toast-top toast-center">
                    <div class="alert alert-success">
                        <span>Message sent successfully.</span>
                    </div>
                </div> */}
            </section>
        </>

    )
}