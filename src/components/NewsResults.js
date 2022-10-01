import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import timeAgo from "../helpers/timeAgo";
import { addMark, fetchMarks, deleteMark } from "../store/action";
import "../styles/newsResults.css";

export default function NewsResults({ data }) {
  const marks = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchMarks()), [dispatch]);

  const handleMark = (payload) => () => {
    dispatch(addMark(payload));
  };

  const handleUnMark = (id) => () => {
    dispatch(deleteMark(id));
  };

  function mark(id, payload) {
    if (marks.length !== 0) {
      const idStored = marks.map((el) => el.id);
      for (const el of idStored) {
        if (el === id) {
          return <BsBookmarkFill onClick={handleUnMark(id)} />;
        }
      }
    }
    return <BsBookmark onClick={handleMark(payload)} />;
  }

  return (
    <div className="news-results">
      {data.map((el, idx) => {
        const { id, title, link, source, published } = el;
        return (
          <div key={idx}>
            <a href={link}>
              <span>{source.title}</span>
              <h3>{title}</h3>
              <span>{timeAgo(published)}</span>
            </a>
            {mark(id, { id, title, link, source, published })}
          </div>
        );
      })}
      ;
    </div>
  );
}
