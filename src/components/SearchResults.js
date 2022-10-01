import "../styles/searchResults.css";

export default function SearchResults({ data }) {
  return (
    <div className="search-results">
      {data.map((el, idx) => (
        <a key={idx} href={el.link}>
          <p>{el.link}</p>
          <h3>{el.title}</h3>
          <p>{el.description}</p>
        </a>
      ))}
      ;
    </div>
  );
}
