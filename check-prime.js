class CheckPrimeNumbers {
  /**
   * @description method checks that number is a prime number
   * @param {integer} number
   * @param {array} primeList 
   * @return {bool} true if prime number, false if not
   */
  static checkPrime(num, primeList) {
    let isDiv = true;
    primeList.map(primes => {
      if (num % primes === 0) {
        return isDiv = false;
      }
    });
    return isDiv;
  }
  /**
   * @description Method lists all prime numbers between 0 and limit
   * @param {integer} upperLimit 
   * @return {array} an array of all prime numbers between 0 and limit
   */
  static listPrime(upperLimit) {
    const upperLim = parseInt(upperLimit, 10);
    if (isNaN(upperLim)) {
      return 'Ensure Higher limit of range is a number';
    }
    if (upperLim < 0) {
      return 'Ensure Higher Limit is a positive number';
    }
    if (upperLim > 100) {
      return 'Higher Limit can not be greater than 100';
    }
    if (upperLim < 2) {
      return 'No Prime Numbers';
    }
    const primeList = [2];

    for (let i = 2; i <= upperLim; i += 1) {
      let isDiv = CheckPrimeNumbers.checkPrime(i, primeList);
      if (isDiv) {
        primeList.push(i);
      }
    }
    return primeList;
  }
}
export default CheckPrimeNumbers;

