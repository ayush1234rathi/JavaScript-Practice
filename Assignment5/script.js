const url = 'https://api.chucknorris.io/jokes/random';
const btn=document.getElementById("getJoke");
const setJoke=document.getElementById("display-joke");
async function fetchData(){
  await fetch(url)
    .then(res => res.json())
    .then(res => {
      let joke = res.value;
      setJoke.innerHTML = `<h3>${joke}</h3>`;
    })
    .catch(err => console.log(err));
}

btn.addEventListener("click", () => {
  fetchData();
});
