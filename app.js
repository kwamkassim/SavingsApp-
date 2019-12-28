const btn = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
//
const inp = document.querySelector(".in");
const onp = document.querySelector(".on");
const goal = document.querySelector(".goal");
const time = document.querySelector(".time");
const percent2 = document.querySelector(".percentOfCheck");
const check2 = document.querySelector(".checkAmount");
const goalAmount2 = document.querySelector(".goalAmount");

//  btns for event listeners
btn.addEventListener("click", percentOfCheck);
btn2.addEventListener("click", saveAmountEvent);
btn3.addEventListener("click", monthAmount);

// algorithyms of calculations below
// finding percentage

function percentageOfCheckToSave(checkAmount, percent) {
  let calc = (percent / 100) * checkAmount;

  let ans = Math.round(100 * calc) / 100;

  if (!checkAmount || !percent) {
    return " ";
  } else {
    return (
      "$" +
      ans +
      " " +
      "is" +
      " " +
      percent +
      "%" +
      " " +
      "of" +
      " " +
      "$" +
      checkAmount
    );
  }
}

console.log(percentageOfCheckToSave(1650, 20));

// time itll take to reach goal and how much u need in time frame u want

function savingAmount(goal, timeFrame) {
  let calc = goal / timeFrame;

  let CalcAmount = Math.round(100 * calc) / 100;

  if (!goal || !timeFrame) {
    return " ";
  } else {
    return (
      "You must save " +
      " " +
      "$" +
      CalcAmount +
      " " +
      "per month to reach your goal in " +
      " " +
      timeFrame +
      " " +
      "months"
    );
  }
}

console.log(savingAmount(10000, 12));

// adding percentage to an amount

// function addingPercentage(checkAmount, percent) {
//   let calc = (percent / 100) * checkAmount;

//   let total = calc + checkAmount;

//   // return Math.round(total);
//   return Math.round(100 * total) / 100;
// }

// console.log(addingPercentage(56.47, 15));

// adding savings

//  havve their savings goal and it reminds them when they reach their goal and motivates them to keep going

function savingsGoalTimeFrame(per, checkA, goalAmo) {
  let calc = (per / 100) * checkA;

  let CalcAmount = Math.round(100 * calc) / 100;

  let totalMonths = goalAmo / CalcAmount;

  let finalCalc = Math.round(totalMonths);

  if (!per || !checkA || !goalAmo) {
    return " ";
  } else {
    return "It'll take" + " " + months2years(finalCalc);
  }

  // ------- practice date n time below -----

  // return finalCalc;
}

function months2years(months) {
  var dur1 = Math.floor(months / 12);
  var dur2 = months / 12 - dur1;
  var dur3 = Math.floor(dur2 * 12);

  // if (dur1 >= 2) {
  //   return dur1 + " years and " + dur3 + " months";
  // } else if (dur1 < 2) {
  //   return dur1 + " year and " + dur3 + " months";
  // } else if (dur3 < 2) {
  //   return dur1 + " years and " + dur3 + " month";
  // }

  if (dur1 >= 2 && dur3 <= 1) {
    return dur1 + " years and " + dur3 + " month";
  } else if (dur1 >= 2 && dur3 >= 2) {
    return dur1 + "years and " + dur3 + "months";
  } else if (dur1 == 1 && dur3 == 0) {
    return dur1 + "year and " + dur3 + "months";
  } else if (dur1 <= 1 && dur3 <= 1) {
    return dur1 + "years and " + dur3 + "month";
  } else if (dur1 <= 1 && dur3 > 2) {
    return dur1 + "years and " + dur3 + "months";
  }
}

console.log(months2years(51));

// console.log(savingsGoalTimeFrame(20, 1650, 10000));

// // algorithyms of calculations above

// EVENT LISTENERS CODE INPUT

function percentOfCheck(e) {
  let output1 = (document.getElementById(
    "demo"
  ).innerHTML = percentageOfCheckToSave(inp.value, onp.value));

  if (!inp.value || !onp.value) {
    showErr("Calculation incomplete , Please Fill In Blank");
  }

  e.preventDefault();
  // console.log(percentageOfCheckToSave(200, 2));
}

// ----------- fix showerror bug-------
function showErr(error) {
  const errorDiv = document.createElement("div");

  const card = document.querySelector(".section-1");
  const hea = document.querySelector(".hea");

  errorDiv.className = "alert alert-danger";

  errorDiv.appendChild(document.createTextNode(error));

  card.insertBefore(errorDiv, hea);

  setTimeout(clearRemove, 3000);
}

// -----------------below show error for section 2 --------

function showErr2(error) {
  const errorDiv = document.createElement("div");

  const card = document.querySelector(".section-2");
  const hea = document.querySelector(".section2-hea");

  errorDiv.className = "alert alert-danger";

  errorDiv.appendChild(document.createTextNode(error));

  card.insertBefore(errorDiv, hea);

  setTimeout(clearRemove, 3000);
}

// ------- below is show error for section 3--
function showErr3(error) {
  const errorDiv = document.createElement("div");

  const card = document.querySelector(".section-3");
  const hea = document.querySelector(".section3-hea");

  errorDiv.className = "alert alert-danger";

  errorDiv.appendChild(document.createTextNode(error));

  card.insertBefore(errorDiv, hea);

  setTimeout(clearRemove, 3000);
}

function clearRemove() {
  document.querySelector(".alert").remove();
}

// ------------------------------------------------------------------
function saveAmountEvent(e) {
  let output2 = (document.getElementById(
    "outputForMonthlySavings"
  ).innerHTML = savingAmount(goal.value, time.value));

  if (!goal.value || !time.value) {
    showErr2("Calculation incomplete , Please Fill In Blank");
  }

  e.preventDefault;
  // console.log(percentageOfCheckToSave(200, 2));
}

// -------------------------------------------------------
function monthAmount(e) {
  let output3 = (document.getElementById(
    "amountOfMonths"
  ).innerHTML = savingsGoalTimeFrame(
    percent2.value,
    check2.value,
    goalAmount2.value
  ));

  if (!percent2.value || !check2.value || !goalAmount2.value) {
    showErr3("Calculation incomplete , Please Fill In Blank");
  }

  e.preventDefault;
}

// if (dur1 >= 2) {
//   return dur1 + " years and " + dur3 + " months";
// } else if (dur1 < 2) {
//   return dur1 + " year and " + dur3 + " months";
// } else if ( dur3 < 2) {
//   return dur1 + " years and " + dur3 + " month";
// }
