// * VARIABLES / CONSTANTS
let bill = Number(document.getElementById("bill").value);
let numberOfPeople = Number(document.getElementById("numberOfPeople").value);
let tips = document.getElementsByName("tips");
let customTip = document.getElementById("custom");
let amountPerson = document.getElementById("amountPerson");
let totalamount = document.getElementById("totalamount");
// * Function DECLARATIONS

const checkTip = () => {
  let Tip;
  tips.forEach((tip) => {
    if (tip.checked) {
      Tip = Number(tip.value);
    }
  });
  return Tip;
};

const checkCustomTip = (input) => {
  if (input.value) {
    return input.value;
  }
  return;
};

const calculateAmount = () => {
  result = (bill * (checkTip() / 100)) / numberOfPeople;
  return result;
};
const calculateTotal = () => {};

// * Function CALLS
checkTip();
checkCustomTip(customTip);
calculateAmount();
