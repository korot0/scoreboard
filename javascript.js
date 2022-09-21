let homeScore = 0
let guestScore = 0
document.getElementById('home-points').textContent = homeScore
document.getElementById('guest-points').textContent = guestScore


//home score

function homePlusOne() {
    homeScore += 1
    document.getElementById('home-points').textContent = homeScore
}

function homePlusTwo() {
    homeScore += 2
    document.getElementById('home-points').textContent = homeScore
}

function homePlusThree() {
    homeScore += 3
    document.getElementById('home-points').textContent = homeScore
}

//guest score

function guestPlusOne() {
    guestScore += 1
    document.getElementById('guest-points').textContent = guestScore
}

function guestPlusTwo() {
    guestScore += 2
    document.getElementById('guest-points').textContent = guestScore
}

function guestPlusThree() {
    guestScore += 3
    document.getElementById('guest-points').textContent = guestScore
}

//new game

function newGame() {
    homeScore = 0
    guestScore = 0
    document.getElementById('guest-points').textContent = guestScore
    document.getElementById('home-points').textContent = homeScore
}