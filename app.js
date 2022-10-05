// // document.title = 123;
// // var headerTitle = document.getElementById("header-title");
// // headerTitle.style.borderBottom = "solid 3px #000";

// // var item = document.getElementById("itemss");
// // item.style.fontWeight = "bold";
// // item.style.backgroundColor = "green";

// // // var it = document.getElementsByClassName("list-group-item");
// // // it[1].style.fontWeight = "bold";
// // // it[0].style.fontWeight = "bold";
// // // it[2].style.fontWeight = "bold";
// // // it[3].style.fontWeight = "bold";

// // // var li = document.getElementsByTagName("li");
// // // li[1].style.fontWeight = "bold";
// // // li[0].style.fontWeight = "bold";
// // // li[2].style.fontWeight = "bold";
// // // li[3].style.fontWeight = "bold";

// // // for (var i = 0; i < li.length; i++) {
// // //   li[i].style.backgroundColor = "#f4f4f4";
// // // }

// // var header = document.querySelector("#main-header");
// // header.style.borderBottom = "solid 4px #ccc";

// // var input = document.querySelector("input");
// // input.value = "Helo Wold";

// // var item = document.querySelector(".list-group-item");
// // item.style.color = "red";
// // var last = document.querySelector(".list-group-item:nth-child(2)");
// // last.style.color = "green";
// // var last = document.querySelector(".list-group-item:nth-child(3)");
// // last.style.display = "none";

// // // querysselectorall
// // var titles = document.querySelectorAll(".title");
// // console.log(titles);
// // titles[0].textContent = "Hello";

// // var odd = document.querySelectorAll("li:nth-child(odd");
// // for (var i = 0; i < odd.length; i++) {
// //   odd[i].style.backgroundColor = "#f4f4f4";
// // }

// var itemList = document.querySelector("#items");
// // parentNode
// // console.log(itemList.parentNode);
// // itemList.parentNode.style.backgroundColor = "#f4f4f4";

// // // parentElement
// // console.log(itemList.parentElement);
// // itemList.parentElement.style.backgroundColor = "#f4f4f4";
// // console.log(itemList.parentElement.parentElement.parentElement);

// // console.log(itemList.children);
// // console.log(itemList.children[1]);
// // itemList.children[1].style.backgroundColor = "yellow";

// // // FirstChild
// // console.log(itemList.firstChild);
// // // firstElementChild
// // console.log(itemList.firstElementChild);
// // itemList.firstElementChild.textContent = "Hello 1";

// // lastChild
// // console.log(itemList.lastChild);
// // lastElementChild;
// // console.log(itemList.lastElementChild);
// // itemList.lastElementChild.textContent = "Hello 4";

// // nextSibling
// // console.log(itemList.nextSibling);
// // // nextElementSibling
// // console.log(itemList.nextElementSibling);

// // previousSibling
// // console.log(itemList.previousSibling);
// // // previousElementSibling;
// // console.log(itemList.previousElementSibling);
// // itemList.previousElementSibling.style.color = "green";

// // Create a div
// var newDiv = document.createElement("div");

// // Add class
// newDiv.className = "hello";

// // Add id
// newDiv.id = "hello1";

// // Add attr
// newDiv.setAttribute("title", "Hello Div");

// // Create text node
// var newDivText = document.createTextNode("Hello World");

// newDiv.appendChild(newDivText);

// var container = document.querySelector("header .container");
// var h1 = document.querySelector("header h1");

// console.log(newDiv);

// newDiv.style.fontSize = "30px";

// container.insertBefore(newDiv, h1);
// a

var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
var filter = document.getElementById("filter");

form.addEventListener("submit", addItem);
itemList.addEventListener("click", removeItem);
// Filter event
filter.addEventListener("keyup", filterItems);

function addItem(e) {
  e.preventDefault();
  var newItem = document.getElementById("item").value;
  var li = document.createElement("li");
  li.className = "list-group-item";
  li.appendChild(document.createTextNode(newItem));

  var deleteBtn = document.createElement("button");
  deleteBtn.className = "btn btn-danger btn-sm float-right delete";
  deleteBtn.appendChild(document.createTextNode("X"));
  li.appendChild(deleteBtn);

  itemList.appendChild(li);
  console.log(li);
}

function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are You Sure?")) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

function filterItems(e) {
  var text = e.target.value.toLowerCase();
  var items = itemList.getElementsByTagName("li");
  Array.from(items).forEach(function (item) {
    var itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
