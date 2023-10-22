// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var dateTracker = $('#currentDay')
var currentHour = dayjs().hour();
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
 
  /* Applies the past, present, or future class to each time block by comparing the id to the current hour. */
  var timeBlock = function() {
    
    for (let index = 9; index < 18; index++) {
      var timeSlot = $('#hour-' + index);
      
      if (currentHour < index) {
        timeSlot.addClass("future");
      } else if (currentHour > index) {
        timeSlot.addClass("past");
      } else {
        timeSlot.addClass("present");
      }
    }
  }
  
  timeBlock();
  
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  

/* References Day.js to keep current date and time displayed */
var updateDate = function() {
  var now = dayjs().format('MMMM DD, YYYY [at] h:mm:ss A')
  dateTracker.text("It is currently: " + now)
}

updateDate();
setInterval(updateDate, 1000);