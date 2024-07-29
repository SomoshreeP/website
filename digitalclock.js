function clock() {
    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    var today = new Date();
    
    // Update Date
    document.getElementById('Date').innerHTML = `${dayNames[today.getDay()]} ${today.getDate()} ${monthNames[today.getMonth()]} ${today.getFullYear()}`;
    
    // Get time components
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    
    // Determine AM/PM
    var amPm = h < 12 ? 'AM' : 'PM';
    
    // Convert to 12-hour format
    h = h % 24;
    h = h ? h : 24; // the hour '0' should be '12'
    
    // Format time components with leading zeros
    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;
    
    // Update time display
    document.getElementById('hours').innerHTML = h;
    document.getElementById('min').innerHTML = m;
    document.getElementById('sec').innerHTML = s;
    document.getElementById('day').innerHTML = amPm;
}

// Update the clock every second
setInterval(clock, 1000);

// Initialize the clock immediately
clock();
