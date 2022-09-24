let button = document.querySelector('button')
let joke = document.querySelector('#joke')
const url =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";
function display_joke() {
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
    //   console.log(data.joke);
      joke.innerText=data.joke
    });
}
button.addEventListener("click", display_joke);
