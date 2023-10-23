var dateTracker = $('#currentDay');
var currentHour = dayjs().hour();

/* References Day.js to keep the current date and time displayed. */
var updateDate = function() {
  var now = dayjs().format('MMMM DD, YYYY [at] h:mm:ss A')
  dateTracker.text("It is currently: " + now)
}

updateDate();
setInterval(updateDate, 1000);

/* Created a function that saves the user input to localStorage. */
var saveUserInput = function() {
  var closeArea = $(this).closest(".time-block");
  var hour = closeArea.attr("id");
  var task = closeArea.find(".description").val();
  localStorage.setItem(hour, task);
};

/* Uses the saveInput function to listen for the click event on the save button. */
$(".saveBtn").on("click", saveUserInput);

/* Created a function that retrieves and displays the saved data from localStorage and persists when the page is reloaded. */
var getSavedInput = function() {
  $(".time-block").each(function() {
    var hour = $(this).attr("id");
    var savedInput = localStorage.getItem(hour);
    $(this).find(".description").val(savedInput);
  });
};

getSavedInput();

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