function sumAll() { //2nd: then the function takes all the parameters,
    let sum = 0;
    for(let i = 0; i < arguments.length; i++) { //3rd: create a loop that increment the "i" until the condition is met(i < argument.length),
      sum += arguments[i]; //4th: this will take value of indeces(inside the sum all function), then add it to the "sum variable" until 
    }                      // the condition(i < argument.length) is finally met.
    return sum;
  }
  console.log(sumAll(1, 123, 500, 115, 44, 88)); //1st: this declares parameter.

/* 
so the execution will go like this:
array ideces are 0 1 2 3 4 5 6
so first index is 0 which equivale
sum += arguments[i](which is 1) is sum = 1
then increment the index(from 0 incremented to 1 which has a value of 123)
sum += arguments[i](sum variable has a value of 1 and the arguments[i] is now 123; so 1 + 123 = 124)
sum += arguments[i](124 + 500 = 624)
sum += arguments[i](624 + 115 = 739)
sum += arguments[i](739 + 44  = 783)
sum += arguments[i](783 + 88  = 871)

871
*/