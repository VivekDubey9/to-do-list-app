const formtodo = document.querySelector(".form-todo");
const todo_list = document.querySelector(".todo_list");
console.log(formtodo);

const inputText = document.querySelector(".form-todo input[type='text']");

formtodo.addEventListener("submit", function (e) {
  e.preventDefault();
  const inputTextval = inputText.value;
  console.log(inputTextval);
  inputText.value = "";
  const newLi = document.createElement("li");
  newLi.innerHTML = `<span class="text">${inputTextval}</span>
  <div class="todo_buttons">
      <button class="tbtn done">Done</button>
      <button class=" tbtn remove">Delete</button>
  </div>
</li>`;
  todo_list.append(newLi);
});

todo_list.addEventListener("click", function (e) {
  console.log(e.target);
  if (e.target.classList.contains("done")) {
    const span = e.target.parentNode.previousElementSibling;
    console.log(span);
    span.style.textDecoration = "line-through";
  }
  if (e.target.classList.contains("remove")) {
    const li = e.target.parentNode.parentNode;
    li.remove();
  }
});

//addding day in my todo list project...

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const wtext = document.querySelector(".subheading");

//showing day...

const myDate = new Date();
const dayOfWeek = myDate.getDay();
const dayName = daysOfWeek[dayOfWeek];

wtext.textContent = dayName;

//showing date...
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const currentDate = new Date();

const day = currentDate.getDate();
const month = months[currentDate.getMonth()];

const formattedDate = `${day} ${month}`;
console.log(formattedDate);
wtext.textContent += "," + formattedDate;

//Implementing weather app inside my todo list project

const API_KEY = "4ca36d96026e45259ff73750232511";
const URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=allahabad`;

console.log(wtext);

fetch(URL)
  .then((response) => {
    //console.log(response.json());  //this is a promise response.json()
    return response.json();
  })
  .then((data) => {
    console.log(typeof data);
    console.log(data.location.name);
    const name = data.location.name;
    const cur = data.location.localtime;
    // wtext.textContent += `, ${data.current.temp_c.toFixed(1)}C`;
    const newele = document.createElement("h4");
    newele.textContent = `${name},${data.current.temp_c.toFixed(1)}C`;
    newele.setAttribute("class", "weather-text");
    const icon = document.createElement("div");
    icon.setAttribute("class", "img-div");
    icon.innerHTML = `
                        <img src='${data.current.condition.icon}' />`;

    wtext.append(newele);
    newele.appendChild(icon);

    console.log(name, cur);
  });
