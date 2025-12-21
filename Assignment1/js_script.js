const button =document.querySelectorAll(".button");
const body = document.querySelector("body")
button.forEach((b)=>{
  b.addEventListener("click",(e)=>{
    body.style.background=e.target.id;
  });
})