const nextBtn = document.getElementById("next");
const checkBtn = document.getElementById("check");
const errorMsgAmountNegative = document.querySelector(".error-msg");
const errorMsgLessCash = document.querySelector(".error-msg2");
const bill = document.getElementById("bill-amount");
const noReturn = document.getElementById("no-return");
const table = document.getElementById("table");
const cash = document.getElementById("cash-given");

errorMsgAmountNegative.style.display = "none";
errorMsgLessCash.style.display = "none";

nextBtn.addEventListener("click", function () {
  if (bill.value <= 0) {
    errorMsgAmountNegative.style.display = "block";
  } else {
    errorMsgAmountNegative.style.display = "none";
    document.getElementById("cash").style.display = "block";
  }
});

checkBtn.addEventListener("click", function () {
  let billAmount = Number(bill.value);
  let cashGiven = Number(cash.value);

  if (cashGiven < billAmount) {
    errorMsgLessCash.style.display = "block";
    table.style.display = "none";
  } else if (cashGiven === billAmount) {
    errorMsgLessCash.style.display = "none";
    noReturn.style.display = "block";
    table.style.display = "none";
  } else {
    errorMsgLessCash.style.display = "none";
    noReturn.style.display = "none";
    table.style.display = "block";
  }

  let notes = [2000, 500, 100, 20, 10, 5, 1];
  let balance = cashGiven - billAmount;
  for (let i = 0; i < notes.length; i++) {
    if (balance > 0 && balance >= notes[i]) {
      let numOfNotes = Math.floor(balance / notes[i]);
      document.getElementById(notes[i]).innerText = numOfNotes;
      balance = balance - notes[i] * numOfNotes;
    }
  }
});
