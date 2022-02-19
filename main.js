// * VARIABLES / CONSTANTS
let bill = document.getElementById("bill");
let numberOfPeople = document.getElementById("numberOfPeople");
let tips = document.getElementsByName("tips");
let customTip = document.getElementById("custom");
let amountPerson = document.getElementById("amountPerson");
let totalamount = document.getElementById("totalamount");
// * Function DECLARATIONS

const checkTip = () => {
  let Tip;
  tips.forEach((tip) => {
    tip.addEventListener("change", (e) => {
      calculateTotalPricePerPerson();
    });
    if (tip.checked) {
      Tip = Number(tip.value);
    } else if (customTip.value) {
      Tip = Number(checkCustomTip());
    }
  });
  return Tip;
};

const checkCustomTip = () => {
  if (customTip.value) {
    tips.forEach((tip) => {
      if (tip.checked) {
        tip.checked = false;
      }
    });
    return Number(customTip.value).toFixed(2);
  }
  return;
};

const calculateAmountPerPerson = () => {
  let result;
  result =
    (Number(bill.value) * (checkTip() / 100)) / Number(numberOfPeople.value);
  result = Number(result).toFixed(2);
  return Number((amountPerson.value = result));
};

const calculateTotalPricePerPerson = () => {
  let total;
  total =
    Number(bill.value / numberOfPeople.value) + calculateAmountPerPerson();
  total = Number(total).toFixed(2);
  return Number((totalamount.value = total));
};

// * Function CALLS
// checkTip(); // ! WORKS
// checkCustomTip(); // ! WORKS
// calculateAmount(); // ! WORKS

// * EVENTLISTENER

bill.addEventListener("input", (e) => {
  calculateTotalPricePerPerson();
});

numberOfPeople.addEventListener("input", (e) => {
  calculateTotalPricePerPerson();
});

customTip.addEventListener("input", (e) => {
  calculateTotalPricePerPerson();
});

// checkTip(); nested Eventlistener !
