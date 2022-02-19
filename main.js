let bill = document.getElementById("bill");
let numberOfPeople = document.getElementById("numberOfPeople");
let tips = document.getElementsByName("tips");

const checkTip = (array) => {
    array.forEach((tip, i) => {
      if (tips[i].checked) {
        tip = console.log(array[i].value);
      }
    });
}

checkTip(tips)