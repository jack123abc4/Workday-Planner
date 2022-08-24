// calendar element in jumbotron
var calendarEl = document.querySelector("#currentDay")
calendarEl.textContent = moment().format("dddd, MMM Do");


// create rows
// var rowEl = document.querySelector("row")
var containerEl = document.querySelector(".container")
for (var i = 0; i < 8; i++) {
    // add row to container
    var rowEl = document.createElement("div")
    rowEl.classList.add("row");
    containerEl.appendChild(rowEl);

    // add timeblocks to row
    var hourColEl = document.createElement("div");
    hourColEl.classList.add("hour", "time-block", "col-1");
    var hourBlock = moment({hour:9+i, minute:0})
    hourColEl.textContent = hourBlock.format("hh:mm");
    rowEl.appendChild(hourColEl);

    var timeblockColEl = document.createElement("div");
    timeblockColEl.classList.add("description", "time-block", "col-10");
    rowEl.appendChild(timeblockColEl);

    var saveColEl = document.createElement("div");
    saveColEl.classList.add("saveBtn", "time-block", "col-1");
    rowEl.appendChild(saveColEl);

    // set past, present, future styles
    // var hourNow = moment();
    var hourNow = moment({hour:13, minute:0});
    console.log("Block: " + hourBlock.format("hh:mm") + "\n" + "Current time: " + hourNow.format("hh:mm"));
    if (hourNow > hourBlock) {
        console.log("past");
        rowEl.classList.add("past");
    }
    else if (hourNow < hourBlock) {
        console.log("future");
        rowEl.classList.add("future");
    }
    else {
        console.log("present");
        rowEl.classList.add("present");
    }
}
