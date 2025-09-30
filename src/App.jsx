import { useRef, useState } from "react";
import ArticleList from "./components/ArticleList.jsx";
import ArticleForm from "./components/ArticleForm.jsx";
import "./App.css";

export default function App() {
  const [articles, setArticles] = useState([
    { id: 1, title: "Benvenuto nel mio blog" },
    { id: 2, title: "Come ho creato questo progetto" },
    { id: 3, title: "Idee per i prossimi post" },
  ]);

  const nextId = useRef(4);

  const handleAddArticle = (title) => {
    const trimmed = title.trim();
    if (!trimmed) return;
    setArticles((prev) => [
      ...prev,
      { id: nextId.current++, title: trimmed },
    ]);
  };

  return (
    <div className="app">

      <ArticleForm onAdd={handleAddArticle} />

      <ArticleList articles={articles} />
    </div>
  );
}
