isPrime = n => {
  if (n < 2) {
    return console.log(false);
  }

  var sqr = Math.floor(Math.sqrt(n));

  for (let i = 2; i <= sqr; i++) {
    if (n % i === 0) {
      return console.log(false);
    }
  }
  return console.log(true);
};

isPrime(121); // false

isPrime(11); // true

isPrime(2); // true

isPrime(6); // false

// {
//   if (n % 2 === 0 || n % 3 === 0 || n % 5 === 0 || n % 7 === 0) {
//     console.log(false);
//   } else if(){
//     console.log(true);
//   }
// };
