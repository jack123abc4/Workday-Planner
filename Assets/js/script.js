// calendar element in jumbotron
var calendarEl = document.querySelector("#currentDay")
calendarEl.textContent = moment().format("dddd, MMM Do");