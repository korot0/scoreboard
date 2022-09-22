let homeScore = 0
let guestScore = 0


//home score
function homePoints(points) {
    homeScore += points
    document.getElementById('home-points').textContent = homeScore
}

//guest score

function guestPoints(points) {
    guestScore += points
    document.getElementById('guest-points').textContent = guestScore
}


//new game

function newGame() {
    homeScore = 0
    guestScore = 0
    document.getElementById('guest-points').textContent = guestScore
    document.getElementById('home-points').textContent = homeScore
}

// if (homeScore > guestScore) {
//     document.getElementById("home-points").style.backgroundColor="green"
// } else if (homeScore < guestScore) {
// }