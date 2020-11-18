// Set the date we're counting down to
var timerEnd = new Date().getTime() + 180,000;

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = timerEnd - now;

  // Time calculations for days, hours, minutes and seconds
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = minutes + ":" + seconds;

  // If the count down is finished....
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "Timer done";
  }
}, 1000);