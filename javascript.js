let homeScore = 0
let guestScore = 0

//home score
function homePoints(points) {
    homeScore += points
    document.getElementById('home-points').textContent = homeScore
    colorLeader()
}

//guest score
function guestPoints(points) {
    guestScore += points
    document.getElementById('guest-points').textContent = guestScore
    colorLeader()
}

// function addPoints(team, points) {
//     team += points
// }

function colorLeader() {
if (homeScore > guestScore) {
    document.getElementById("home-points").style.color="green"
    document.getElementById("guest-points").style.color="#ff1b45"
} else if (homeScore < guestScore) {
    document.getElementById("guest-points").style.color="green"
    document.getElementById("home-points").style.color="#ff1b45"
} else {
    document.getElementById("home-points").style.color="white"
    document.getElementById("guest-points").style.color="white"
}
}

//new game
function newGame() {
    homeScore = 0
    guestScore = 0
    document.getElementById('guest-points').textContent = guestScore
    document.getElementById('home-points').textContent = homeScore
    colorLeader()
}