function updateTime() {
    const now = new Date();
    const utcTime = now.toUTCString();
    const dayOfWeek = now.toLocaleString('en-us', { weekday: 'long' });
    document.querySelector('[data-testid="currentTimeUTC"]').textContent = `Current Time (UTC): ${utcTime}`;
    document.querySelector('[data-testid="currentDay"]').textContent = `Current Day: ${dayOfWeek}`;
}

window.onload = updateTime;

document.addEventListener('DOMContentLoaded', function (){
    const navToggle = document.getElementById("nav-toggle");
    const navContent = document.getElementById("nav-content");

    navToggle.addEventListener("click", function() {
        navContent.classList.toggle("hidden")
    })
})