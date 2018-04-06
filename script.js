
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
  userinput = prompt("do you want to play?");
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

var username = prompt("would you like to print your name?");
while (username == "yes"){
  var name;
  var name = prompt("what is your name?");
  var username = prompt("would you like to print your name again?");
  if (username == "no"){
    console.log(name);
  } else if (username != "yes"){
    alert("please say, yes or no")
    var username = prompt("would you like to print your name again?")
  }
}

// problem#4

var time = prompt("What time of the day is it?")
  if (time == "morning"){
    console.log("since is morning, you should eat breakfast, we suggest eggs and toast")
  } else if (time == "noon"){
    console.log("since is noon, you should eat lunch, we suggest a salad")
  } else if (time == "evening"){
    console.log("since is evening, you should eath dinner, we suggest chicken and rice")
  } 
