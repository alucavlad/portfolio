let startScoreHome = 0;
// home
function plusOne() {
    startScoreHome = startScoreHome + 1;
    document.getElementById('home-btn').textContent = startScoreHome;
}

function plusTwo() {
    startScoreHome = startScoreHome + 2;
    document.getElementById('home-btn').textContent = startScoreHome;
}

function plusThree() {
    startScoreHome = startScoreHome + 3;
    document.getElementById('home-btn').textContent = startScoreHome;
}


//guest
let startScoreGuest = 0;
function guestPlusOne() {
    startScoreGuest = startScoreGuest + 1;
    document.getElementById('guest-btn').textContent = startScoreGuest;
}

function guestPlusTwo() {
    startScoreGuest = startScoreGuest + 2;
    document.getElementById('guest-btn').textContent = startScoreGuest;
}

function guestPlusThree() {
    startScoreGuest = startScoreGuest + 3;
    document.getElementById('guest-btn').textContent = startScoreGuest;
}

// save

let container1 = startScoreHome;
let container2 = startScoreGuest;

function save() {
    container1 = startScoreHome + ' ';
    document.getElementById('homeCount').textContent = document.getElementById('homeCount').textContent + container1;
    container2 = startScoreGuest + ' ';
    document.getElementById('guestCount').textContent = document.getElementById('guestCount').textContent + container2;

    document.getElementById('home-btn').textContent = 0;
    document.getElementById('guest-btn').textContent = 0;
    startScoreHome = 0;
    startScoreGuest = 0;
}
