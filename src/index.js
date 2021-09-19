import "./styles.scss";

// document.getElementById("app").innerHTML = `
// <h1>Get Movie info by year</h1>
//   `;

// function selectedMove(movie) {
//   console.log(movie);
//   console.log("text");
// }
let log = document.getElementById("mySelect");
document.getElementById("movieResults").style.display = "none";
log.onchange = myFunction;

function myFunction(e) {
  getMovieInfo(e.target.value);
}

function getMovieInfo(movieId) {
  const getInfro = async () => {
    const url = `https://imdb-api.com/en/API/Title/k_vW0A3kY2/${movieId}`;
    const getInfo = await fetch(url);
    const data = await getInfo.json();
    document.getElementById("movieResults").style.display = "flex";
    document.getElementById("poster").src = data.image;
    document.getElementById("title").innerHTML = `Title: ${data.title}`;
    document.getElementById("year").innerHTML = `Year: ${data.year}`;
    document.getElementById("plot").innerHTML = `Stars: ${data.plot}`;
    document.getElementById("stars").innerHTML = `Plot: ${data.stars}`;
    document.getElementById(
      "runtimeStr"
    ).innerHTML = `Run time: ${data.runtimeStr}`;
    document.getElementById(
      "contentRating"
    ).innerHTML = `Rating: ${data.contentRating}`;
  };
  getInfro();
}
