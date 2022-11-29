   // op laden wachten
   const onload = document.querySelector('html');
   onload.addEventListener("onunload",showMovies);

 //create listitems with a element with link to imdb and img element with imglink poster
 movies.forEach(movie => {
const ListElement = document.createElement("li");
ListElement
ListElement.classList.add(".item");
ListElement
const outboundLink = document.createElement("a");
  outboundLink.href = "https://imdb.com/title/" + movie.imdbID;

const poster = document.createElement("img");
  poster.src = movie.poster;
const List = document.getElementById("moviepostergrid");
List
List.appendChild(ListElement);
ListElement
ListElement.appendChild(outboundLink);
outboundLink
outboundLink.appendChild(poster);
poster
});
function showMovies() {
return movies;
};
// console.log(movies);
//search movies title


const search = document.getElementById("searchField");
search.addEventListener("input", (e) =>{

const value = e.target.value.toLowerCase();
console.log(value);

});


function submit(e){

if(this.submit)  { 

const input = movies.filter(movies => movies.title.toLowerCase().includes(search.value));
const List = document.getElementById("moviepostergrid");
List
List.remove(List);
const newgrid = document.querySelector(".flexcentercontainer");
newgrid
const ul = document.createElement("ul");
ul
ul.setAttribute("id","moviepostergrid");
ul
input.forEach(movie =>{
const newListElement = document.createElement("li");
newListElement
newListElement.classList.add(".item");
newListElement
const outboundLink = document.createElement("a");
  outboundLink.href = "https://imdb.com/title/" + movie.imdbID;
const poster = document.createElement("img");
  poster.src = movie.poster;
newgrid.appendChild(ul);
ul
ul.appendChild(newListElement);
newListElement
newListElement.appendChild(outboundLink);
outboundLink
outboundLink.appendChild(poster);
poster  
})}};
console.log(search);

//const checkbox .filters maakt nieuwe grid met resultaten van selecteren checkbox

const checkbox1 = movies.filter(movies => movies.year > 2013);

const select = document.querySelector("#checkbox1");
select.addEventListener("change",checkbox1Filter);
function checkbox1Filter(){
if(this.select)  { 
const List = document.getElementById("moviepostergrid");
List
List.remove(List);
const newgrid = document.querySelector(".flexcentercontainer");
newgrid
const ul = document.createElement("ul");
ul
ul.setAttribute("id","moviepostergrid");
ul
checkbox1.forEach(movie =>{
const newListElement = document.createElement("li");
newListElement
newListElement.classList.add(".item");
newListElement
const outboundLink = document.createElement("a");
  outboundLink.href = "https://imdb.com/title/" + movie.imdbID;
const poster = document.createElement("img");
  poster.src = movie.poster;
newgrid.appendChild(ul);
ul
ul.appendChild(newListElement);
newListElement
newListElement.appendChild(outboundLink);
outboundLink
outboundLink.appendChild(poster);
poster  
}
);
}}; 
//console.log(select);
//console.log(checkbox1);
//2e filter ook nog geen result in browser dom

const select2 = document.querySelector("#checkbox2");
select2.addEventListener("change", checkbox2Filter);

const checkbox2 = movies.filter(movies => movies.title.includes("Avengers"));

function checkbox2Filter(){
if(this.select)  { 
const List = document.getElementById("moviepostergrid");
List
List.remove(List);
const newgrid = document.querySelector(".flexcentercontainer");
newgrid
const ul = document.createElement("ul");
ul
ul.setAttribute("id","moviepostergrid");
ul
checkbox2.forEach(movie =>{
const newListElement = document.createElement("li");
newListElement
newListElement.classList.add(".item");
newListElement
const outboundLink = document.createElement("a");
  outboundLink.href = "https://imdb.com/title/" + movie.imdbID;
const poster = document.createElement("img");
  poster.src = movie.poster;
newgrid.appendChild(ul);
ul
ul.appendChild(newListElement);
newListElement
newListElement.appendChild(outboundLink);
outboundLink
outboundLink.appendChild(poster);
poster  
})}};
//console.log(checkbox2);

//3e filter werkt niet goed genoeg mist titels in filter en nog geen result in dom
const select3 = document.querySelector("#checkbox3");
select3.addEventListener("change", checkbox3Filter);

const checkbox3 = movies.filter(movies => movies.title.includes("X-Men"));

function checkbox3Filter(){
if(this.select)  { 
const List = document.getElementById("moviepostergrid");
List
List.remove(List);
const newgrid = document.querySelector(".flexcentercontainer");
newgrid
const ul = document.createElement("ul");
ul
ul.setAttribute("id","moviepostergrid");
ul
checkbox3.forEach(movie =>{
const newListElement = document.createElement("li");
newListElement
newListElement.classList.add(".item");
newListElement
const outboundLink = document.createElement("a");
  outboundLink.href = "https://imdb.com/title/" + movie.imdbID;
const poster = document.createElement("img");
  poster.src = movie.poster;
newgrid.appendChild(ul);
ul
ul.appendChild(newListElement);
newListElement
newListElement.appendChild(outboundLink);
outboundLink
outboundLink.appendChild(poster);
poster
})}};
//console.log(checkbox3);

//4e filter vindt niet alle titels en nog geen result in dom

const select4 = document.querySelector("#checkbox4");
select4.addEventListener("change", checkbox4Filter);

const checkbox4 = movies.filter(movies => movies.title.includes("Princess"));

function checkbox4Filter(){
if(this.select)  { 
const List = document.getElementById("moviepostergrid");
List
List.remove(List);
const newgrid = document.querySelector(".flexcentercontainer");
newgrid
const ul = document.createElement("ul");
ul
ul.setAttribute("id","moviepostergrid");
ul
checkbox4.forEach(movie =>{
const newListElement = document.createElement("li");
newListElement
newListElement.classList.add(".item");
newListElement
const outboundLink = document.createElement("a");
  outboundLink.href = "https://imdb.com/title/" + movie.imdbID;
const poster = document.createElement("img");
  poster.src = movie.poster;
newgrid.appendChild(ul);
ul
ul.appendChild(newListElement);
newListElement
newListElement.appendChild(outboundLink);
outboundLink
outboundLink.appendChild(poster);
poster
})}};
//console.log(checkbox4);

//5e filter als hiervoor de 4e filter

const select5 = document.querySelector("#checkbox5");
select5.addEventListener("change", checkbox5Filter);

const checkbox5 = movies.filter(movies => movies.title.includes("Batman"));

function checkbox5Filter(){
if(this.select)  { 
const List = document.getElementById("moviepostergrid");
List
List.remove(List);
const newgrid = document.querySelector(".flexcentercontainer");
newgrid
const ul = document.createElement("ul");
ul
ul.setAttribute("id","moviepostergrid");
ul
checkbox5.forEach(movie =>{
const newListElement = document.createElement("li");
newListElement
newListElement.classList.add(".item");
newListElement
const outboundLink = document.createElement("a");
  outboundLink.href = "https://imdb.com/title/" + movie.imdbID;
const poster = document.createElement("img");
  poster.src = movie.poster;
newgrid.appendChild(ul);
ul
ul.appendChild(newListElement);
newListElement
newListElement.appendChild(outboundLink);
outboundLink
outboundLink.appendChild(poster);
poster
})}};

//console.log(checkbox5);























