
// for loop that will add to that number//
var x;
x = prompt("Enter a number!!");
var result = 0;
		var input = x; //However you do it.
		for (var i = 1; i <= input; i++) {
		  result += i;
    }
alert("result:" + result);

// do..while loop//
do {
var correct = "no";
correct = prompt ("Do you want to play?", "");
// if (correct !="no" && correct !="yes") {
  do {
  alert("Invalid choice. Please say, yes or no");
  correct = prompt("Please say, yes or no!");
} while (correct !="no" && correct !="yes") {
  // correct = prompt("Please say, yes or no!");
}

while (correct != "no") {
  correct = prompt ("Enter a Word!");
if (correct != "no") {
  correct = prompt ("Do you want to play again?");
  do {
  alert("Invalid choice. Please say, yes or no");
  correct = prompt("Please say, yes or no!");
} while (correct !="no" && correct !="yes") {
}
}
}
} while (correct =! "no") {
  if (correct == "no") {
    document.write(correct+"<br/>");
  }

}
