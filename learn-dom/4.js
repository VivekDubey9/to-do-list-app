const navItem = document.getElementsByTagName("a");
console.log(navItem);

for (let i = 0; i < navItem.length; i++) {
  navItem[i].style.backgroundColor = "black";
  navItem[i].style.color = "#fff";
}

//can use all 3 loops with queryselectorall but foreach is restricted to htmlcollection....
