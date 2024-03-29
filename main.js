var answerArr = [];
var questionArr = [];

$(document).ready(function () {
  var mainScreen = document.getElementById("mainView");
  var resultScreen = document.getElementById("resultView");
  mainScreen.style.display = "block";
  resultScreen.style.display = "none";

  var htmlToAdd = "";
  for (var i = 1; i <= 20; i++) {
    //(max+1-min)+min
    var max = 12;
    var min = 0;
    var multiple = Math.floor(Math.random() * (max + 1 - min)) + min;
    var firstMulti = Math.floor(Math.random() * (max + 1 - min)) + min;
    answerArr.push(multiple * firstMulti);
    questionArr.push(multiple + " x " + firstMulti);
    htmlToAdd +=
      '<div class="row col-lg-3 col-md-3 col-12 mt-3"><div class="col-md-12 col-12 text-center"><h6 id="question">Q' +
      i +
      ". " +
      multiple +
      " x " +
      firstMulti +
      '</h6></div><div class="col-md-12 col-12 mt-3"><input type="number" class="form-control" id="input' +
      i +
      '" /></div></div>';
  }
  $("#mainContent").html(htmlToAdd);

  var maxTime = 75;

  var x = setInterval(function () {
    maxTime--;
    var minute = Math.floor(maxTime / 60);
    var seconds = Math.floor(maxTime % 60);
    document.getElementById("timerSet").innerHTML =
      "Time Left: " + minute + "mins " + seconds + "s";

    if (minute < 0 && seconds < 0) {
      document.getElementById("timerSet").innerHTML = "FAILED";
      const button = document.querySelector("button");
      button.classList.remove("btn-primary");
      button.classList.add("btn-danger");
      button.disabled = true;
    }
  }, 1000);
});

function submitBtn() {
  var messageText = "";
  var correctAns = 0;
  var wrongAns = 0;

  var mainScreen = document.getElementById("mainView");
  var resultScreen = document.getElementById("resultView");
  mainScreen.style.display = "none";
  resultScreen.style.display = "block";

  for (var i = 1; i <= 20; i++) {
    if (document.getElementById("input" + i).value.trim() != "") {
      var answerVal = parseInt(
        document.getElementById("input" + i).value.trim()
      );
      var ques = questionArr[i - 1];
      if (answerArr[i - 1] == answerVal) {
        messageText += ques + " = " + answerVal + " (CORRECT)\n";
        correctAns++;
      } else {
        messageText += ques + " = " + answerVal + " (WRONG)\n";
        wrongAns++;
      }
    } else {
      var answerVal = parseInt(
        document.getElementById("input" + i).value.trim()
      );
      var ques = questionArr[i - 1];
      if (answerArr[i - 1] == 0) {
        messageText += ques + " = 0" + " (CORRECT)\n";
        correctAns++;
      } else {
        messageText += ques + " = 0" + " (WRONG)\n";
        wrongAns++;
      }
    }
  }

  if (correctAns > 9) {
    document.getElementById("passText").innerHTML = "PASSED";
    document.getElementById("scoringResult").innerHTML = correctAns + "/20";
  } else {
    document.getElementById("passText").innerHTML = "FAILED";
    document.getElementById("scoringResult").innerHTML = correctAns + "/20";
  }
}
