//Score var
let homeScore = 0
let guestScore = 0
let homePointsEl = document.getElementById('home-points')
let guestPointsEl = document.getElementById('guest-points')

//Fouls var
let homeFoulEl = document.getElementById('home-foul-points')
let guestFoulEl = document.getElementById('guest-foul-points')
let homeFouls = 0
let guestFouls = 0

//Team score add
function addPoints (team, points) {
    if (team == 'home') {
        homeScore += points
        homePointsEl.textContent = homeScore
    } else if (team == 'guest') {
        guestScore += points
        guestPointsEl.textContent = guestScore
    }
    colorLeader()
}

//Foul score add
function foul(foulTeam) {
   if (foulTeam == 'home') {
        homeFouls++
        homeFoulEl.textContent = homeFouls 
   } else if (foulTeam == 'guest') {
        guestFouls++
        guestFoulEl.textContent = guestFouls
   }
}

//Highlight leader
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

//New game btn
function newGame() {
    homeScore = 0
    guestScore = 0
    homeFouls = 0
    guestFouls = 0
    guestPointsEl.textContent = guestScore
    homePointsEl.textContent = homeScore
    homeFoulEl.textContent = homeFouls
    guestFoulEl.textContent = guestFouls
    colorLeader()
}