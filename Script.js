function updateDateTime() {
    const now = new Date();
    
    // Format options for date
    const dateOptions = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    
    // Format options for time
    const timeOptions = { 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit', 
        hour12: true 
    };

    // Display current date
    document.getElementById("date").innerText = Today is: ${now.toLocaleDateString("en-US", dateOptions)};

    // Display current time
    document.getElementById("time").innerText = Current Time: ${now.toLocaleTimeString("en-US", timeOptions)};

    // Display greeting based on time of day
    const hour = now.getHours();
    let greeting = "Good Evening 🌙"; // Default
    if (hour >= 5 && hour < 12) greeting = "Good Morning ☀️";
    else if (hour >= 12 && hour < 18) greeting = "Good Afternoon 🌤️";
    
    document.getElementById("greeting").innerText = greeting;

    // Smooth fade-in effect
    const elements = document.querySelectorAll("#date, #time, #greeting, #future-date");
    elements.forEach(el => {
        el.style.opacity = 0;
        setTimeout(() => el.style.opacity = 1, 300);
    });
}

// Function to predict future date (e.g., 7 days ahead)
function getFutureDate(daysAhead) {
    const future = new Date();
    future.setDate(future.getDate() + daysAhead);
    
    const futureDateOptions = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
    document.getElementById("future-date").innerText = Future Date (+${daysAhead} days): ${future.toLocaleDateString("en-US", futureDateOptions)};
}

// Initialize on page load
updateDateTime();
getFutureDate(7);  // Change number to set different future days

// Auto-update date & time every second
setInterval(updateDateTime, 1000);