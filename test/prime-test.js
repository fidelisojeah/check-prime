import { expect, assert } from 'chai';
import chai from 'chai';

import CheckPrimeNumbers from '../check-prime';

const should = chai.should();

describe('An array of prime numbers', () => {
  describe('When the inputs are invalid', () => {
    it('Should return string message when limit is not a number', (done) => {
      expect(CheckPrimeNumbers.listPrime('someinvaliddigits'))
        .to.equal('Ensure Higher limit of range is a number');
      done();
    });
    it('Should return string message when limit more than 100', (done) => {
      expect(CheckPrimeNumbers.listPrime(300))
        .to.equal('Higher Limit can not be greater than 100');
      done();
    });
    it('Should return error when limit is a negative number', (done) => {
      expect(CheckPrimeNumbers.listPrime(-30))
        .to.equal('Ensure Higher Limit is a positive number');
      done();
    });
  });
  describe('When the inputs are valid', () => {
    it('Should return string message when there are no prime numbers', (done) => {
      expect(CheckPrimeNumbers.listPrime(1))
        .to.equal('No Prime Numbers');
      done();
    });
    it('Should return just 2 when higher limit is 2', (done) => {
      expect(CheckPrimeNumbers.listPrime(2))
        .to.eql([2]);
      done();
    });
    it('Should return prime number list when limit is 10', (done) => {
      expect(CheckPrimeNumbers.listPrime(10))
        .to.eql([2, 3, 5, 7]);
      done();
    });
    it('Should return prime number list when higher limit is 20', (done) => {
      expect(CheckPrimeNumbers.listPrime(20))
        .to.eql([2, 3, 5, 7, 11, 13, 17, 19]);
      done();
    });
    it('Should return prime number list when higher limit is 15', (done) => {
      expect(CheckPrimeNumbers.listPrime(15))
        .to.eql([2, 3, 5, 7, 11, 13]);
      done();
    });
    it('Should return prime number list when higher limit is 50', (done) => {
      expect(CheckPrimeNumbers.listPrime(50))
        .to.eql([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]);
      done();
    });
    it('Should return prime number list when higher limit is 30', (done) => {
      expect(CheckPrimeNumbers.listPrime(30))
        .to.eql([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
      done();
    });
    it('Should return prime number list when higher limit is 45', (done) => {
      expect(CheckPrimeNumbers.listPrime(45))
        .to.eql([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43]);
      done();
    });
    it('Should return prime number list when higher limit is 65', (done) => {
      expect(CheckPrimeNumbers.listPrime(70))
        .to.eql([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67]);
      done();
    });
    it('Should return prime number list when higher limit is 85', (done) => {
      expect(CheckPrimeNumbers.listPrime(85))
        .to.eql([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83]);
      done();
    });
    it('Should return prime number list when higher limit is 100', (done) => {
      expect(CheckPrimeNumbers.listPrime(100))
        .to.eql([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]);
      done();
    });
  });
});
