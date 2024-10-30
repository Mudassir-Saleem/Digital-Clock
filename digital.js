     
    
    function updateClock() {
      var now = new Date();
      var hours = now.getHours();
      var minutes = now.getMinutes();
      var seconds = now.getSeconds();

      // Add leading zeros to minutes and seconds if they are less than 10
      minutes = (minutes < 10 ? "0" : "") + minutes;
      seconds = (seconds < 10 ? "0" : "") + seconds;

      var timeString = hours + ":" + minutes + ":" + seconds;
      document.getElementById('time').textContent = timeString;
      var amPm = hours >= 12 ? 'PM' : 'AM';

    document.getElementById('timeformat').textContent=amPm;
    


    }

    // Call updateClock function every second
    setInterval(updateClock, 1000);

    // Initial call to display the clock immediately
    updateClock();
 

