import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import SearchPage from "./pages/SearchPage";
import ResultPage from "./pages/ResultPage";
import NewsMarked from "./components/NewsMarked";
import NotFoundPage from "./pages/NotFoundPage";
import SecondPage from "./pages/SecondPage";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}>
        <Route path="" element={<SearchPage type="search" />} />
        <Route path="image" element={<SearchPage type="image" />} />
        <Route path="news" element={<SearchPage type="news" />} />
      </Route>
      <Route path="/" element={<SecondPage />}>
        <Route path="search" element={<ResultPage />} />
        <Route path="news/bookmark" element={<NewsMarked />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
