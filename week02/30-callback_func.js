function chkMood(mood, goodCallback, badCallback) {
  if (mood === "good") {
    goodCallback();
  } else {
    badCallback();
  }
}

function cry() {
  console.log("ACTION: CRY");
}

function sing() {
  console.log("ACTION: SING");
}

function dance() {
  console.log("ACTION: DANCE");
}

chkMood("good", sing, cry);
