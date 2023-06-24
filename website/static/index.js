var audio = document.getElementById("myAudio");
var timeDisplay = document.getElementById("timeDisplay");

function togglePlay() {
    if (audio.paused) {
        audio.play();
        document.getElementById("playBtn").innerHTML = '<img src="{{ url_for('static', filename="images/icons/pause-50.png") }}" alt="">';
    } else {
        audio.pause();
        document.getElementById("playBtn").innerHTML = '<img src="{{ url_for('static', filename="images/icons/play-50.png") }}" alt="">';
    }
}

function updateTime() {
    var currentTime = formatTime(audio.currentTime);
    var duration = formatTime(audio.duration);
    timeDisplay.innerHTML = currentTime + " / " + duration;
}

function formatTime(time) {
    var minutes = Math.floor(time / 60);
    var seconds = Math.floor(time % 60);
    seconds = seconds < 10 ? "0" + seconds : seconds;
    return minutes + ":" + seconds;
}