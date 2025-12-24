const title = document.getElementById('title');
const author = document.getElementById('author');
const year = document.getElementById('year');
const bookList = document.getElementById('book-list');
const btn = document.querySelector('.btn');

btn.addEventListener('click', function (e) {
    e.preventDefault();
    if(!title.value || !author.value || !year.value){
        alert("Empty")
        return;
    }
    const sec=document.createElement("section");
    const t=document.createElement("div");
    t.innerText=title.value;
    sec.appendChild(t)
    const a=document.createElement("div");
    a.innerText=author.value;
    sec.appendChild(a)
    const y=document.createElement("div");
    y.innerText=year.value;
    sec.appendChild(y);
    bookList.appendChild(sec);
    title.value='';
    author.value='';
    year.value='';

});
