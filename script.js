
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
var userinput;
do{
  userinput = prompt("do you want to play");
  if (userinput =="yes"){
    prompt("say something")
  } else if (userinput !="no"){
    alert("please say yes or no");
  } else {
    break;
  }
  document.write("your word is"+userinput+"<br/>");
  userinput++;
} while(userinput !="no");
