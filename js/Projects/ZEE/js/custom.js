async function myFun() {
  const url = "https://imdb-top-100-movies.p.rapidapi.com/";
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "e5303ab02fmshca47a7d87b71f7ap1b9436jsn9190148ba1a7",
      "x-rapidapi-host": "imdb-top-100-movies.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);

    let card = document.querySelectorAll(".m_card");
    card.forEach((value, index) => {
      value.getElementsByTagName("h5")[0].innerHTML = result[index].title;

      value.getElementsByTagName("img")[0].attributes[0].value =
        result[index].image;

      value.getElementsByClassName("movie_time")[0].innerHTML =
        result[index].genre[0];

      value.getElementsByClassName("movie_type1")[0].innerHTML =
        result[index].year;

      value.getElementsByClassName("movie_type2")[0].innerHTML =
        result[index].rank;
    });

    let slideImg = document.querySelectorAll(".carousel-inner");
    slideImg.forEach((value, index) => {
      value.getElementsByTagName("img")[0].attributes[0].value =
        result[index].image;
    });
  } catch (error) {
    console.error(error);
  }
}

myFun();
