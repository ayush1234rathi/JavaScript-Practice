const st = document.getElementById('start');
const stop = document.getElementById('stop');
const code = document.getElementById('code');
function genrateRandom() {
  const s = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += s.charAt(Math.floor(Math.random() * 16));
  }
  return color;
}
let p = null;
st.addEventListener('click', () => {
  if(!p)  
  p = setInterval(() => {
    let c=genrateRandom();
    document.querySelector('body').style.background = c;
    code.textContent=`Color Code is: ${c}`;

  }, 1000);
});
stop.addEventListener('click', () => {
  clearInterval(p);
  p = null;
});
