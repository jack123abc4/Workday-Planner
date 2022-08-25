// calendar element in jumbotron
var calendarEl = document.querySelector("#currentDay")
calendarEl.textContent = moment().format("dddd, MMM Do");



function init() {
    // create rows
var containerEl = document.querySelector(".container")
for (var i = 0; i < 9; i++) {
    // add row to container
    var rowEl = document.createElement("div")
    rowEl.classList.add("row");
    rowEl.setAttribute("id", "row" + i)
    containerEl.appendChild(rowEl);
    // console.log(rowEl.id,rowEl.id.split("row")[1]);

    // add hour block to row
    var hourColEl = document.createElement("div");
    hourColEl.classList.add("hour", "time-block", "col-1");
    var hourBlock = moment({hour:9+i, minute:0})
    var hourColPEl = document.createElement("p");
    hourColPEl.textContent = hourBlock.format("hh:mm");
    hourColEl.appendChild(hourColPEl);
    rowEl.appendChild(hourColEl);

    // add event block to row
    var timeblockColEl = document.createElement("input");
    timeblockColEl.classList.add("description", "time-block", "col-10");
    if (localStorage.getItem(i)) {
        timeblockColEl.value = localStorage.getItem(i);
    }
    rowEl.appendChild(timeblockColEl);

    // add save block to row
    var saveColEl = document.createElement("div");
    saveColEl.classList.add("saveBtn", "time-block", "col-1");
    rowEl.appendChild(saveColEl);

    // add save icon to save block
    var saveColIconEl = document.createElement("i");
    saveColIconEl.classList.add("fa-solid", "fa-floppy-disk");
    saveColEl.appendChild(saveColIconEl);

    // set past, present, future styles
    
    var timeNow = moment();
    //var timeNow = moment({hour:13, minute:0});
    console.log("Block: " + hourBlock.format("hh:mm") + "\n" + "Current time: " + timeNow.format("hh:mm"));
    if (timeNow.hour() > hourBlock.hour()) {
        console.log("past");
        rowEl.classList.add("past");
    }
    else if (timeNow.hour() < hourBlock.hour()) {
        console.log("future");
        rowEl.classList.add("future");
    }
    else {
        console.log("present");
        rowEl.classList.add("present");
    }
}
}


init();

// click listener for all save buttons
var saveButtonEls = document.querySelectorAll(".saveBtn");
for (var i = 0; i < saveButtonEls.length; i++) {
    saveButtonEls[i].addEventListener("click", function(event) {
        // get parent row el + num
        var parentRow = $(event.target).parent()
        while (!parentRow.attr("id")) {
            parentRow = parentRow.parent();
        }
        var rowNum = parentRow.attr("id").split("row")[1];
        console.log("Row: " + rowNum);

        // save event
        var currentTimeblockEl = parentRow.children()[1];
        var timeblockText = currentTimeblockEl.value.trim();
        localStorage.setItem(rowNum, timeblockText);
        
        

    })
}
