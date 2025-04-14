const minutesInput = document.getElementById('minutes');
const secondsInput = document.getElementById('seconds');
const startButton = document.getElementById('start');
const countdownDisplay = document.getElementById('countdown');

let timerInterval;

function startTimer() {
    let minutes = parseInt(minutesInput.value) || 0;
    let seconds = parseInt(secondsInput.value) || 0;
    let totalSeconds = minutes * 60 + seconds;

    if (totalSeconds <= 0) return;

    timerInterval = setInterval(() => {
        if (totalSeconds <= 0) {
            clearInterval(timerInterval);
            countdownDisplay.textContent = '00:00';
            return;
        }

        const displayMinutes = Math.floor(totalSeconds / 60);
        const displaySeconds = totalSeconds % 60;

        countdownDisplay.textContent = `${String(displayMinutes).padStart(2, '0')}:${String(displaySeconds).padStart(2, '0')}`;
        totalSeconds--;
    }, 1000);
}

startButton.addEventListener('click', () => {
    clearInterval(timerInterval); // Clear any existing timer
    startTimer();
});
