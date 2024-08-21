async function myFun() {
  try {
    const response = await fetch("https://dummyjson.com/products/");
    const result = await response.json();
    console.log(result);

    let card = document.querySelectorAll(".m_card");
    console.log(card);

    card.forEach((value, index) => {
      value.getElementsByTagName("h5")[0].innerHTML = result.products[index].title;
      value.getElementsByTagName("img")[0].attributes[0].value = result.products[index].images
      value.getElementsByClassName("movie_time")[0].innerHTML = result.products[index].price;
    });
  } catch (error) {
    console.error(error);
  }
}

myFun();
