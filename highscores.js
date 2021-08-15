const highScoresList = document.getElementById("highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

highScoresList.innerHTML = highScores
  .map(score => {
    //returns list item from the score object with formatting of the high-score class
    return `<li class="high-score">${score.name} - ${score.score}</li>`;
  })
  .join("");