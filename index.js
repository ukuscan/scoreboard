let homeScore = 0
let awayScore = 0
let homeScoreEl = document.getElementById("homeScore-el")
let awayScoreEl = document.getElementById("awayScore-el")

function homePlusOne(){
  homeScore = homeScore +1
  homeScoreEl.textContent = homeScore
}

function homePlusTwo(){
  homeScore = homeScore +2
  homeScoreEl.textContent = homeScore
}

function homePlusThree(){
  homeScore = homeScore +3
  homeScoreEl.textContent = homeScore
}

function awayPlusOne(){
  awayScore = awayScore +1
  awayScoreEl.textContent = awayScore
}

function awayPlusTwo(){
  awayScore = awayScore +2
  awayScoreEl.textContent = awayScore
}

function awayPlusThree(){
  awayScore = awayScore +3
  awayScoreEl.textContent = awayScore
}

function resetScore(){
  homeScoreEl.textContent = 0
  awayScoreEl.textContent = 0
  homeScore = 0
  awayScore = 0
}