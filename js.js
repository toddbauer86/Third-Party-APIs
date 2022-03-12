var containerEl = document.getElementById("time-container");
var dateEl = document.getElementById("currentDay");

dateEl.innerText = new Date().toDateString();

var hoursOfDay = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];

hoursOfDay.forEach(function (hour) {
  var a = new Date();
  var hourCurrent = a.getHours();
  // console.log(hourCurrent);
  // console.log(hoursOfDay[8]);

  var row = document.createElement("div");
  row.classList.add("row", "time-block");
  if (hourCurrent > localStorage.getItem(hour)) {
    row.classList.add("past");
  }
  if (hourCurrent === localStorage.getItem(hour)) {
    row.classList.add("present");
  }
  if (hourCurrent < localStorage.getItem(hour)) {
    row.classList.add("future");
  }

  var hourContainer = document.createElement("div");
  hourContainer.classList.add("col-md-1", "hour");
  hourContainer.innerText = hour;
  row.appendChild(hourContainer);

  var textContainer = document.createElement("textarea");
  textContainer.classList.add("col-md-10", "description");

  textContainer.placeholder = "Event...";
  if (localStorage.getItem(hour)) {
    textContainer.value = localStorage.getItem(hour);
  }
  textContainer.value = localStorage.getItem(hour) || "";
  row.appendChild(textContainer);

  var saveBtn = document.createElement("button");
  saveBtn.classList.add("col-md-1", "btn", "saveBtn");
  saveBtn.innerHTML = `<i class="fas fa-save"></i>`;
  saveBtn.addEventListener("click", function (event) {
    var storageKey = event.currentTarget.parentElement.children[0].innerText;
    var storageValue = event.currentTarget.parentElement.children[1].value;
    localStorage.setItem(storageKey, storageValue);
  });

  row.appendChild(saveBtn);

  containerEl.appendChild(row);
});

// hoursOfDay.forEach(function (index, value) {
//   var row2 = document.getElementsByClassName("row time-block");

//   var a = new Date();
//   var hourCurrent = a.getHours();

//   // console.log(hourCurrent);
//   console.log(index);
//   console.log(value);
// });

// function savePage() {
//   console.log("button was clicked");

// }

// function time() {
//   // var timeholder = new Date();
//   // var currentTime = timeholder.toLocaleTimeString();
//   // var currentHour = currentTime.charAt(0);
//   // console.log(currentHour);
//   // var today = new Date();
//   // var currentHour = today.getHours();
//   // console.log(currentHour);
// }

// time();
