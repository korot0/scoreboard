let homeScore = 0
let guestScore = 0
let homePointsEl = document.getElementById('home-points')
let guestPointsEl = document.getElementById('guest-points')

//home score
function homePoints(points) {
    homeScore += points
    homePointsEl.textContent = homeScore
    colorLeader()
}

//guest score
function guestPoints(points) {
    guestScore += points
    guestPointsEl.textContent = guestScore
    colorLeader()
}

// function addPoints(team, points) {
//     team += points
// }

function colorLeader() {
if (homeScore > guestScore) {
    homePointsEl.style.color="green"
    guestPointsEl.style.color="#ff1b45"
} else if (homeScore < guestScore) {
    guestPointsEl.style.color="green"
    homePointsEl.style.color="#ff1b45"
} else {
    homePointsEl.style.color="#ff1b45"
    guestPointsEl.style.color="#ff1b45"
}
}

//new game
function newGame() {
    homeScore = 0
    guestScore = 0
    guestPointsEl.textContent = guestScore
    homePointsEl.textContent = homeScore
    colorLeader()
}