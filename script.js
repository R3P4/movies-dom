   // op laden wachten
   const onload = document.querySelector('html');
   onload.addEventListener("onunload",showMovies);
   // .map 
const moviesgrid = movies.map(movies => movies.poster);
moviesgrid.forEach( moviesgrid  =>  { 
 //create listitems with a element with link to imdb and img element with imglink
const ListElement = document.createElement("li");
ListElement
ListElement.classList.add(".item");
ListElement
const newA = document.createElement("a");
newA
movies.forEach (movies => {
newA.href ="https://imdb.com/title/"+ movies.imdbID +"/?ref_=fn_tt_tt_1";
});
const newImg = document.createElement("img");
newImg 
const List = document.getElementById("moviepostergrid");
List
List.appendChild(ListElement);
ListElement
ListElement.appendChild(newA);
newA
newA.appendChild(newImg);
newImg.src = moviesgrid 
});

function showMovies() {
return moviesgrid
};
console.log(showMovies);
console.log(moviesgrid);

//const checkbox .filters 
const select = document.querySelector("#checkbox1");
select.addEventListener("click",checkbox1Filter);

const checkbox1 = movies.filter(movies => movies.year > 2014);
const ListElement = document.createElement("li");
  ListElement
  ListElement.classList.add(".item");
  ListElement
const newA = document.createElement("a");
  newA

const newImg = document.createElement("img");
  newImg 
const List = document.getElementById("moviepostergrid");
  List
List.appendChild(ListElement);

  ListElement.appendChild(newA);
  newA
  newA.appendChild(newImg);
  newImg.src = checkbox1 , checkbox1 ; 

function checkbox1Filter(){console.log(checkbox1)};
//2e filter

const select2 = document.querySelector("#checkbox2");
select2.addEventListener("click", checkbox2Filter);

const checkbox2 = movies.filter(movies => movies.title == "The Avengers");

function checkbox2Filter(){console.log(checkbox2)};

//3e filter
const select3 = document.querySelector("#checkbox3");
select3.addEventListener("click", checkbox3Filter);

const checkbox3 = movies.filter(movies => movies.title === "X-Men");

function checkbox3Filter(){console.log(checkbox3)};

//4e filter

const select4 = document.querySelector("#checkbox4");
select4.addEventListener("click", checkbox4Filter);

const checkbox4 = movies.filter(movies => movies.title === "Princess");

function checkbox4Filter(){console.log(checkbox4)};

//5e filter

const select5 = document.querySelector("#checkbox5");
select5.addEventListener("click", checkbox5Filter);

const checkbox5 = movies.filter(movies => movies.title === "Batman");

function checkbox5Filter(){console.log(checkbox5)};







