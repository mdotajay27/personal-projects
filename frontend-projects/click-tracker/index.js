let count = 0;

function trackClick() {
    count++;
    document.getElementById("clickCount").textContent = `Clicks: ${count}`;
}

document.getElementById("clickButton").addEventListener("click", trackClick);
