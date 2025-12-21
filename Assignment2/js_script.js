const r = document.getElementById("results");
const b = document.querySelector("button");

b.addEventListener("click", (e) => {
  e.preventDefault(); // stop page refresh

  const h = parseFloat(document.getElementById("height").value);
  const w = parseFloat(document.getElementById("weight").value);

  if (isNaN(h) || isNaN(w) || h <= 0 || w <= 0) {
    r.innerHTML = "Please enter valid height and weight";
    return;
  }
  const bmi = (w / ((h * h) / 10000)).toFixed(2);

  r.innerHTML = `<h2>Your BMI is ${bmi}</h2>`;
});
