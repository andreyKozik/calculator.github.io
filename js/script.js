function insert(num) {
  document.getElementById("numb").value =
    document.getElementById("numb").value + num;
}

function clean() {
  document.getElementById("numb").value = "";
}

function back() {
  var exp = document.getElementById("numb").value;
  document.getElementById("numb").value = exp.substring(0, exp.length - 1);
}

function aqual() {
  var exp = document.getElementById("numb").value;
  var value = exp.indexOf("/0");
  if (value >= 0) {
    return (document.getElementById("numb").value = "Error");
  }
  if (exp) {
    document.getElementById("numb").value = eval(exp);
  }
}

function percent() {
  var exp = document.getElementById("numb").value;
  document.getElementById("numb").value = exp / 100;
}

function root() {
  var exp = document.getElementById("numb").value;
  document.getElementById("numb").value = Math.sqrt(exp);
}
