import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";
import SearchResults from "../components/SearchResults";
import ImageResults from "../components/ImageResults";
import NewsResults from "../components/NewsResults";
import LoadingAnimation from "../components/LoadingAnimation";

export default function ResultPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [data, setData] = useState();
  const [type, setType] = useState();
  const [isLoading, setIsLoading] = useState(true);

  function fetchData({ keyword, type }) {
    return axios.get(
      `https://google-search3.p.rapidapi.com/api/v1/${type}/q=${keyword}`,
      {
        headers: {
          "X-User-Agent": "desktop",
          "X-Proxy-Location": "EU",
          "X-RapidAPI-Key":
            "29c10a4edbmsh98f3f9db1830a0ep18d7d6jsn9071d9e0cf3c",
          "X-RapidAPI-Host": "google-search3.p.rapidapi.com",
        },
      }
    );
    // return axios.get("http://localhost:3001/" + type);
  }

  function typeResults({ type, data }) {
    switch (type) {
      case "search":
        return <SearchResults data={data.results} />;
      case "image":
        return <ImageResults data={data.image_results} />;
      case "news":
        return <NewsResults data={data.entries} />;
      default:
        break;
    }
  }

  useEffect(() => {
    const query = {};
    for (const entry of searchParams.entries()) {
      query[entry[0]] = entry[1];
    }
    if (!query.type) query.type = "search";
    if (!query.keyword) navigate("/");
    setType(query.type);
    setIsLoading(true);
    fetchData(query)
      .then((result) => {
        setData(result.data);
      })
      .catch((err) => {
        if (err.response) {
          if (err.response.status === 404) navigate("/notfound");
        }
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  }, [searchParams]);

  return isLoading ? <LoadingAnimation /> : typeResults({ type, data });
}
