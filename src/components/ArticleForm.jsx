import { useState } from "react";
import "./ArticleForm.css";

export default function ArticleForm({ onAdd }) {
    const [title, setTitle] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd?.(title);
        setTitle("");
    };

    return (
        <form className="card form" onSubmit={handleSubmit}>
            <label htmlFor="title">Nuovo articolo</label>
            <div className="row">
                <input
                    id="title"
                    type="text"
                    placeholder="Inserisci il titolo..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    aria-label="Titolo nuovo articolo"
                />
                <button type="submit">Aggiungi</button>
            </div>
            <p className="hint">Inserisci solo il titolo.</p>
        </form>
    );
}
