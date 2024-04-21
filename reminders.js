var reminderTime = '8:30';

function startTime() {
    setReminder();
    toggleAlarm(1);
    toggleAlarm(2);
    toggleAlarm(3);
    toggleAlarm(4);
    toggleAlarm(5);
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

function addAlarm() {
    let h = document.getElementById('hour').value;
    let m = document.getElementById('minute').value;
    var ampm = 'am';
    if (h < 0 || h > 23 || h === '') {
        h = 8;
    }
    if (m < 0 || m > 59 || m === '') {
        m = 30;
    }
    if (m < 10) 
        m = '0' + m;
    if (h > 11) { ampm = 'pm'};
    h = militaryToAMPM(h);
    
    reminderTime = h + ':' + m + ' ' + ampm;
    localStorage.setItem('reminderTime', reminderTime);
    window.location.href = 'reminders.html';
    //alert(reminderTime);    
}


function setReminder() {
    reminderTime = localStorage.getItem('reminderTime');
    if (reminderTime === null) 
        reminderTime = '8:15';
    //alert(reminderTime);
    document.getElementById('alarm1').innerHTML = reminderTime;
}

function toggleAlarm(x) {
    var d = document.getElementById('alarmset' + x);;
    var c = document.getElementById('check' + x);
    if(c.checked) {
        d.style.opacity = 1;
    } else {
        d.style.opacity = .5;
    }
};