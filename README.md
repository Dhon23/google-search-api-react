<br />
<div align="center">

<h1 align="center">Google search API react</h1>

  <p align="center">
    make search engine with google search api
    <br />
    <a href="https://rapidapi.com/apigeek/api/google-search3"><strong>Google search API >></strong></a>
    <br />
    <br />
    <a href="https://search-api-project-85e76.web.app">View Demo</a>
  </p>
</div>

## About The Project

[![product-screenshot]](https://search-api-project-85e76.web.app)

This is a search engine project using google search API and Reactjs. This website has features such as searching for pictures and news. in the news section you can save it into bookmarks and also remove it from bookmarks

### Built With

- [![React][react.js]][react-url]

## Getting Started

### Development

- Install all dependencies

```sh
npm install
```

- Start app

```sh
npm run start
```

### Testing

- use JSON server `to speed up fetching data`

  - Install json server

  ```sh
  npm i -g json-server
  ```

  - run JSON server

  ```sh
  json-server --watch db_result.json --port 3001
  ```

  - in src/pages/ResultPage.js command this

  ```js
  return axios.get(
    `https://google-search3.p.rapidapi.com/api/v1/${type}/q=${keyword}`,
    {
      headers: {
        "X-User-Agent": "desktop",
        "X-Proxy-Location": "EU",
        "X-RapidAPI-Key": "29c10a4edbmsh98f3f9db1830a0ep18d7d6jsn9071d9e0cf3c",
        "X-RapidAPI-Host": "google-search3.p.rapidapi.com",
      },
    }
  );
  ```

  - and in src/pages/ResultPage.js uncommand this

  ```js
  return axios.get("http://localhost:3001/" + type);
  ```

- run test

```sh
npm run test
```

- run test with coverage

```sh
npm run coverage
```

- this is the last coverage I get with `JSON server db_results.json`

![test-coverage]

### Production

- build app

```sh
npm run build
```

and I have deployed this to firebase. <a href="https://search-api-project-85e76.web.app">demo link</a>

## Contact

Email - [m.ramadhan.ak@gmail.com](https://gmail:m.ramadhan.ak@gmail.com)

Project Link: [https://github.com/Dhon23/google-search-api-react](https://github.com/Dhon23/google-search-api-react)

Project Demo Link: [https://search-api-project-85e76.web.app](https://search-api-project-85e76.web.app)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/landing-page.png
[test-coverage]: images/test-coverage.png
[react.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[react-url]: https://reactjs.org
