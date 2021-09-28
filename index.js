//1
function countToFifty(){
 for(let i = 1;  i <= 50; i++) {
 console.log(i);
 }
}


//2
function countFromOne(){
    for(let i = 1; i <= 10; i++) {
        console.log(i);
    }
  
}

//3
function threeAndFiveInFifty(){
  for ( var num = 1; num < 50; num ++ ) {
  
  // check if the number is divisible by 3 or 5
  var checkForThree = num % 3;
  var checkForFive = num % 5;
  
  // if the number is divisible by both 3 and 5, then print FizzBuzz
  if ( (checkForThree == 0) && (checkForFive == 0) ) 
  	console.log( "FizzBuzz");
  
  // if the number is divisible by 3, then print Fizz
  else if (checkForThree == 0)
    console.log( "Fizz");
  
  // if the number is divisible by 5, then print Buzz
  else if (checkForFive == 0)
    console.log( "Buzz");
  
  // otherwise just print the number
  else
    console.log( num );
} 

}

//4
function threeAndFive(){
   for (let num = 0; num < 30; num++)
    {
        // Short-circuit operator is used
        if (num % 3 == 0 && num % 5 == 0)
           console.log( num+ " ");
    }
}

//countToFifty()
//countFromOne()
//threeAndFiveInFifty()
//threeAndFive()
