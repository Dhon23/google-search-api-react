import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BsBookmarkFill } from "react-icons/bs";
import { deleteMark, fetchMarks } from "../store/action";
import timeAgo from "../helpers/timeAgo";
import { Link } from "react-router-dom";

export default function NewsMarked() {
  const dispatch = useDispatch();
  const marks = useSelector((state) => state);

  useEffect(() => dispatch(fetchMarks()), []);

  return (
    <div className="news-results">
      {marks.length !== 0 ? (
        marks.map((el, idx) => {
          const { id, title, link, source, published } = el;
          return (
            <div key={idx} data-testid={`news-results-${idx}`}>
              <a href={link}>
                <span>{source.title}</span>
                <h3>{title}</h3>
                <span>{timeAgo(published)}</span>
              </a>
              <BsBookmarkFill
                onClick={() => dispatch(deleteMark(id))}
                data-testid={`mark-${idx}`}
              />
            </div>
          );
        })
      ) : (
        <div>
          <p data-testid="bookmark-some-news">
            Bookmark some <Link to={"/news"}>news</Link> ...
          </p>
        </div>
      )}
    </div>
  );
}
