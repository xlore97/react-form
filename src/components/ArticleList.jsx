import ArticleItem from "./ArticleItem.jsx";
import "./ArticleList.css";

export default function ArticleList({ articles }) {
    if (!articles?.length) {
        return (
            <div className="card list">
                <p className="empty">Nessun articolo presente.</p>
            </div>
        );
    }

    return (
        <div className="card list">
            <ul className="articles">
                {articles.map((a) => (
                    <ArticleItem key={a.id} title={a.title} />
                ))}
            </ul>
        </div>
    );
}
