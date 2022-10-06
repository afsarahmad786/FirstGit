function store() {
  //stores items in the localStorage
  var brand = document.getElementById("name").value;
  var key = document.getElementById("key").value;

  const car = {
    brand: brand,
  };

  window.localStorage.setItem(key, JSON.stringify(car));
  //gets key from user
  console.log("retrive records");
  var records = window.localStorage.getItem(key); //searches for the key in localStorage
  var paragraph = document.createElement("p");
  var infor = document.createTextNode(records);
  paragraph.appendChild(infor);
  var element = document.getElementById("retrieve");

  element.appendChild(paragraph);
  //converting object to string
}

window.onload = function () {
  //ensures the page is loaded before functions are executed.
  document.getElementById("testform").onsubmit = store;
};
