import "../styles/imageResults.css";

export default function ImageResults({ data }) {
  return (
    <div className="image-results">
      {data.map((el, idx) => {
        const { image, link } = el;
        const { href } = link;
        const [title, url] = link.title.split("  ");
        return (
          <div key={idx}>
            <div className="img">
              <img {...image} alt="" />
            </div>
            <a href={href} target="_blank" rel="noreferrer">
              <span>{title}</span>
              <span>{url}</span>
            </a>
          </div>
        );
      })}
      ;
    </div>
  );
}
