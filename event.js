//event bubbling and event delegation and event capturing....

//add event listener to container

const grandpar = document.querySelector(".container");

grandpar.addEventListener("click", (e) => {
  console.log("grand parent was clicked");
  console.log(e.target);
});

const child = document.querySelector(".subheading");

child.addEventListener("click", (e) => {
  console.log("child was clicked");
});
