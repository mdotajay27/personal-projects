let startTime;
let elapsedTime = 0;
let running = false;
let interval;

function startStop() {
    if (running) {
        clearInterval(interval);
        document.getElementById('startStop').textContent = 'Start';
        running = false;
    } else {
        startTime = Date.now() - elapsedTime;
        interval = setInterval(updateDisplay, 10);
        document.getElementById('startStop').textContent = 'Stop';
        running = true;
    }
}

function reset() {
    clearInterval(interval);
    elapsedTime = 0;
    document.getElementById('display').textContent = '00:00:00.00';
    document.getElementById('startStop').textContent = 'Start';
    running = false;
    startTime = undefined;
    document.getElementById('standingsList').innerHTML = '';
}

function updateDisplay() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    const formattedTime = formatTime(elapsedTime);
    document.getElementById('display').textContent = formattedTime;
}

function formatTime(milliseconds) {
    const date = new Date(milliseconds);
    const hours = date.getUTCHours().toString().padStart(2, '0');
    const minutes = date.getUTCMinutes().toString().padStart(2, '0');
    const seconds = date.getUTCSeconds().toString().padStart(2, '0');
    const millis = Math.floor(date.getUTCMilliseconds() / 10).toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}.${millis}`;
}

function recordTime() {
    if (running || elapsedTime > 0) {
        const formattedTime = formatTime(elapsedTime);
        const listItem = document.createElement('li');
        listItem.textContent = formattedTime;
        document.getElementById('standingsList').appendChild(listItem);
    }
}