document.title = 123;
var headerTitle = document.getElementById("header-title");
headerTitle.style.borderBottom = "solid 3px #000";

var item = document.getElementById("itemss");
item.style.fontWeight = "bold";
item.style.backgroundColor = "green";

// var it = document.getElementsByClassName("list-group-item");
// it[1].style.fontWeight = "bold";
// it[0].style.fontWeight = "bold";
// it[2].style.fontWeight = "bold";
// it[3].style.fontWeight = "bold";

// var li = document.getElementsByTagName("li");
// li[1].style.fontWeight = "bold";
// li[0].style.fontWeight = "bold";
// li[2].style.fontWeight = "bold";
// li[3].style.fontWeight = "bold";

// for (var i = 0; i < li.length; i++) {
//   li[i].style.backgroundColor = "#f4f4f4";
// }

var header = document.querySelector("#main-header");
header.style.borderBottom = "solid 4px #ccc";

var input = document.querySelector("input");
input.value = "Helo Wold";

var item = document.querySelector(".list-group-item");
item.style.color = "red";
var last = document.querySelector(".list-group-item:nth-child(2)");
last.style.color = "green";
var last = document.querySelector(".list-group-item:nth-child(3)");
last.style.display = "none";

// querysselectorall
var titles = document.querySelectorAll(".title");
console.log(titles);
titles[0].textContent = "Hello";

var odd = document.querySelectorAll("li:nth-child(odd");
for (var i = 0; i < odd.length; i++) {
  odd[i].style.backgroundColor = "#f4f4f4";
}
