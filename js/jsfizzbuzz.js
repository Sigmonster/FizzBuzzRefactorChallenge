//js fizzbuzz challenge
/*
var mytest
mytest=10;
document.write(mytest);
*/

var numbers = [];
var numfactor=.5;

function getIntegerPromptNumber(){
	do{
	numfactor = prompt("Please enter a number, no decimals please.");
	console.log(numfactor)
	}
	while (numfactor % 1 != 0);

	return numfactor = 0+parseInt(numfactor);
}
getIntegerPromptNumber();

for (var i =0; i<100; i++){
	numbers[i] = i + 1;
	if (0==(numbers[i]%numfactor)) {
		if(0==(numbers[i]%5)){
		numbers[i] ="FizzBuzz";
		}
		else{
		numbers[i] ="Fizz";
		}
	}
	else if (0==numbers[i]%5) {
		numbers[i]="Buzz";s
	}
}
//displays array data in quick & dirty horizontal list
for (var i =0; i<100; i++){
	document.write(numbers[i] + "<br/>")
}


