// For Quizz result
function resultQuestions() {
var correct = 0;
var incorrect = 0;

// For Quizz chapter "Propriétés"
  if (document.getElementById("correctNb1").checked) {
    correct++;
  } else {
    incorrect++;

  }

  if (document.getElementById("correctNb2").checked) {
    correct++;
  } else {
    incorrect++;
  }

  if (document.getElementById("correctNb3").checked) {
    correct++;
  } else {
    incorrect++;
  }

  if (document.getElementById("correctNb4").checked) {
    correct++;
  } else {
    incorrect++;
  }

  if (document.getElementById("correctNb5").checked) {
    correct++;
  } else {
    incorrect++;
  }

  if (document.getElementById("correctNb6").checked) {
    correct++;
  } else {
    incorrect++;
  }

  if (document.getElementById("correctNb7").checked) {
    correct++;
  } else {
    incorrect++;
  }

  if (document.getElementById("correctNb8").checked) {
    correct++;
  } else {
    incorrect++;
  }

  if (document.getElementById("correctNb9").checked) {
    correct++;
  } else {
    incorrect++;
  }

  if (document.getElementById("correctNb10").checked) {
    correct++;
  } else {
    incorrect++;
  }

  document.getElementById("nbCorrect").innerHTML = correct;
  document.getElementById("nbIncorrect").innerHTML = incorrect;
  document.getElementById("result").innerHTML = correct + "/10";

  if (correct == 10) {
    document.getElementById("appreciation").innerHTML = "Félicitation ! Vous avez répondu juste à toutes les questions.";
  }

  // For Quizz chapter "Opérations"


}

// For exercices result
function resultExercices() {

// For exercice 1 chapter "Propriétés"
  if (document.getElementById("reponseQ1").value == "Chaine marqueVoiture <- \"Ferrari\"") {
    alert("Bravo ! C'est la bonne réponse");
    document.getElementById("validQ1").value = "Valider";
  } else {
    document.getElementById("validQ1").value = "Réessayer";
    document.getElementById("reponseQ1").value = "";
  }
}

// For user can see the answer of exercices
function gotAnswer() {
  if (document.getElementById("answerQ1").click) {
    document.getElementById("reponseQ1").value = "Chaine marqueVoiture <- \"Ferrari\"";
  }
}
