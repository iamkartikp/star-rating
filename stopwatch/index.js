const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");
const resetBtn = document.getElementById("reset-btn");
const timer = document.getElementById("timer");

startBtn.addEventListener("click", handleStart);
stopBtn.addEventListener("click", handleStop);
resetBtn.addEventListener("click", handleReset);

let timerId = null;
let lastTimerStart = null;
let secsBeforeLastStart = null;

function handleStart() {
    lastTimerStart = Date.now();

    timerId = requestAnimationFrame(updateTimer);
}

function handleStop() {
    secsBeforeLastStart += Date.now() - lastTimerStart;
    cancelAnimationFrame(timerId);
}

function handleReset() {

    timer.textContent = "00:00:000";
    secsBeforeLastStart = 0;
}

function updateTimer() {
    const milliSeconds = Date.now() - lastTimerStart + secsBeforeLastStart;
    const secs = milliSeconds / 1000;
    const mins = secs / 60;

    const milliStr = formatString(milliSeconds % 1000, 3);
    const secsStr = formatString(Math.floor(secs) % 60, 2);
    const minsStr = formatString(Math.floor(mins), 2);

    timer.textContent = `${minsStr}:${secsStr}:${milliStr}`;

    timerId = requestAnimationFrame(updateTimer);
}

function formatString(number, length) {
    return String(number).padStart(length, "0");
}