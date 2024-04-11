import { useRef } from "react";
import Navbar from "../components/navbar/Navbar";

export default function AddBookPage() {

    const formRef = useRef()
    function submit(e) {
        e.preventDefault()
    }
    return (
        <>
            <Navbar />
            <section>
                <form ref={formRef} onSubmit={submit}>
                    <div className="flex flex-col m-5">
                        <label htmlFor="title">Enter book title</label>
                        <input className="input input-primary" type="text" name="title" id="title" />
                    </div>
                    <div className="flex flex-col m-5">
                        <label htmlFor="author">Enter book author</label>
                        <input className="input input-primary" type="text" name="author" id="author" />
                    </div>
                    <input className="m-5 btn btn-primary" type="submit" value="add book" />
                </form>
            </section>
        </>

    )
}