var time = new Date().getHours();
var wakeUpTime = 6;
var lunchTime = 13;
var noon = 12;
var napTime = 15;
var evening = 18;
var partyTime = 23;

var updateClock = function()
{
  var timeEventJS = document.getElementById("timeEvent");
  var message;
  var catImage = document.getElementById("lolCatImg");
  var image;

  if (time == wakeUpTime)
  {
    message = "Wake Up!";
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
  }

  else if (time == lunchTime)
  {
    message = "Lunch Time!";
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
  }

  else if (time == napTime)
  {
    message = "Nap Time!";
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
  }

  else if (time == partyTime)
  {
    message = "Party Time!";
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
  }

  else if (time < noon)
  {
    message = "Good Morning!";
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
  }

  else if (time >= evening)
  {
    message = "Good Evening!";
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
  }

  else
  {
    message = "Good Afternoon!";
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
  }

  timeEventJS.innerText = message;
  lolCatImg.src = image;

  var showCurrentTime = function()
  {
    var clock = document.getElementById('clock');

    var currentTime = new Date();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";

    if (hours >= noon)
    {
        meridian = "PM";
    }
    if (hours > noon)
    {
        hours = hours - 12;
    }

    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }

    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }

    var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";

    clock.innerText = clockTime;
  };

  showCurrentTime();
};

updateClock();

var oneSecond = 1000;
setInterval(updateClock, oneSecond);

var partyButton = document.getElementById("partyTimeButton");
var partyEvent = function()
{
  if (partyTime < 0)
  {
    partyTime = new Date().getHours();
    document.getElementById('partyTimeButton').style.background = "#0A8DAB";
    document.getElementById('partyTimeButton').innerText = "Party Over";
        // text in the button should read "Party Over"
        // color of the button should be "#0A8DAB" (bonus!)
   }
   else
   {
     partyTime = -1;
     document.getElementById('partyTimeButton').style.background = "#222";
     document.getElementById('partyTimeButton').innerText = "PARTY TIME!";
        // text in the button should read "PARTY TIME!"
        // color of the button should be "#222" (bonus!)
   }
};
partyButton.addEventListener("click", partyEvent);
partyEvent();

var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");
var wakeUpEvent = function ()
{
  wakeUpTime = wakeUpTimeSelector.value;
};
wakeUpTimeSelector.addEventListener("change", wakeUpEvent);

var lunchTimeSelector = document.getElementById("lunchTimeSelector");
var lunchTimeEvent = function ()
{
  lunchTime = lunchTimeSelector.value;
};
lunchTimeSelector.addEventListener("change", lunchTimeEvent);

var napTimeSelector = document.getElementById("napTimeSelector");
var napTimeEvent = function ()
{
  napTime = napTimeSelector.value;
};
napTimeSelector.addEventListener("change", napTimeEvent);
