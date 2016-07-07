//js fizzbuzz challenge
/*
var mytest
mytest=10;
document.write(mytest);
*/

var numbers = [];

for (var i =0; i<100; i++){
	numbers[i] = i + 1;
	if (0==(numbers[i]%3)) {
		if(0==(numbers[i]%5)){
		numbers[i] ="FizzBuzz";
		}
		else{
		numbers[i] ="Fizz";
		}
	}
	else if (0==numbers[i]%5) {
		numbers[i]="Buzz";
	}
}
//displays array data in quick & dirty horizontal list
for (var i =0; i<100; i++){
	document.write(numbers[i] + "<br/>")
}


