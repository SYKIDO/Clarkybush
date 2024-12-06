// JavaScript to display a greeting message based on the time of day
function greetUser() {
    const greetingElement = document.getElementById("greeting");
    const currentHour = new Date().getHours();
    
    let greetingMessage;

    if (currentHour >= 0 && currentHour < 12) {
        greetingMessage = "Good Morning!";
    } else if (currentHour >= 12 && currentHour < 18) {
        greetingMessage = "Good Afternoon!";
    } else {
        greetingMessage = "Good Evening!";
    }

    greetingElement.textContent = greetingMessage + " Welcome to my personal website.";
}

window.onload = greetUser; // Call greetUser function when the page loads