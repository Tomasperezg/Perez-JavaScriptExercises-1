
// for loop that will add to that number//
var x;
x = prompt("Enter a number!!");
var result = 0;
		var input = x; //However you do it.
		for (var i = 1; i <= input; i++) {
		  result += i;
    }
alert("result:" + result);
console.log(result);3

// do..while loop//
var userinput;
var user;
do{
  userinput = prompt("do you want to play");
  if (userinput =="yes"){
    var user = prompt("say something")
  } else if (userinput !="yes" && userinput !="no"){
    alert("please say yes or no");
  } else  {
    break;
  }
  console.log(user);
} while(userinput !="no");

// while loop
