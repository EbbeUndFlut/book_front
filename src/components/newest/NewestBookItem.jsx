export default function NewestBookItem({ book }) {
    return (
        <div className="card">
            <figure>
                <div className="w-32 h-32 skeleton"></div>
            </figure>

            <div className="card-body">
                <p className="card-title">{book.title}</p>
                <p>{book.author}</p>
            </div>

        </div>
    )
}