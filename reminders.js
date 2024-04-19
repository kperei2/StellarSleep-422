function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var ampm = 'am';
    if (h > 11) { ampm = 'pm'};
    h = militaryToAMPM(h);
    m = leadingZero(m);
    document.getElementById('clock').innerHTML =
        h + ":" + m + " " + ampm;
}
function leadingZero(i) {
    if (i < 10) { i = "0" + i };
    return i;
}
function militaryToAMPM(i) {
    if (i > 12) { i = i - 12 };
    if (i == 0) { i = 12 };
    return i;
}

