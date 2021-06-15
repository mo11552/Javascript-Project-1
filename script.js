/*The initial count should be zero. Have two buttons, one to increase the count by 1,
and one button to lower the count by 1. And, yes, the count can be negative.
*/

var counterNumber = document.getElementById("firstNumber");
var addByOne = document.getElementById("addOne");
var minusByOne = document.getElementById("minOne");

var count = 0;

getCount();

  addByOne.addEventListener("click",()=> {
    count++;
    getCount();
});

  minusByOne.addEventListener("click",()=> {
    count--;
    getCount();
});

function getCount() {
  counterNumber.innerHTML = count;
};

