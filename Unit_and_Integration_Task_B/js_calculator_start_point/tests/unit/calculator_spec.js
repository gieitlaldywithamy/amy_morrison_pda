var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // - calculator.add()
  // - calculator.subtract()
  // - calculator.multiply()
  // - calculator.divide()
  // - calculator.numberClick()
  // - calculator.operatorClick() NOT SURE ABOUT THIS ONE
  // - calculator.clearClick()


  // write unit tests here in the form of "it should do something..."
  it('can add to running total', function(){
    calculator.add(17)
    assert.equal(17, calculator.runningTotal)
  })

  it('can add negative numbers to running total', function(){
    calculator.add(-4)
    assert.equal(-4, calculator.runningTotal)
  })

  it('can subtract numbers from running total', function(){
    calculator.subtract(20)
    assert.equal(-20, calculator.runningTotal)
  })

  it('can multiply number and previous total', function(){
    calculator.previousTotal = 2
    calculator.multiply(2)
    assert.equal(4, calculator.runningTotal)
  })

  it('can multiply 0 and previous total', function(){
    calculator.previousTotal = 2
    calculator.multiply(0)
    assert.equal(0, calculator.runningTotal)
  })

  it('can divide the running total by a number', function(){
    calculator.previousTotal = 30
    calculator.divide(10)
    assert.equal(3, calculator.runningTotal)
  })

  it('can divide the running total by a number and return a floating number', function(){
    calculator.previousTotal = 30
    calculator.divide(4)
    assert.equal(7.5, calculator.runningTotal)
  })

  it('can divide the running total a negative number and return a floating number', function(){
    calculator.previousTotal = 30
    calculator.divide(-5)
    assert.equal(-6, calculator.runningTotal)
  })

  it('can clear the running total and reset new total to 0', function(){
    calculator.newTotal = true
    calculator.runningTotal = 30
    calculator.numberClick(4)
    assert.equal(4, calculator.runningTotal)
  })

  it('can clear the running total and reset new Total', function(){
    calculator.newTotal = true
    calculator.runningTotal = 60
    calculator.numberClick(-5)
    assert.equal(false, calculator.newTotal)
  })

  it('updates previous + operator clicked twice', function(){
    calculator.runningTotal = 9;
    calculator.previousOperator = '+';
    assert.equal('+', calculator.previousOperator)
  })

  it('updates previous operator * clicked twice', function(){
    calculator.previousTotal = true;
    calculator.previousOperator = '*';
    calculator.operatorClick('*');
    assert.equal('*', calculator.previousOperator)
  })

  it('sets the previous operator to null if = clicked', function(){
    calculator.previousOperator = '/';
    calculator.operatorClick('=')
    assert.equal(null, calculator.previousOperator)
  })

  it('flags the new total to true if * clicked twice', function(){
    calculator.runningTotal = 2;
    calculator.previousOperator = '*';
    calculator.operatorClick = '*';
    assert.equal(true, calculator.newTotal)
  })

  it('sets running total to 0 if clear is clicked', function(){
    calculator.runningTotal = 10;
    calculator.clearClick();
    assert.equal(0, calculator.runningTotal)
  })

  it('sets the previous operator and total to null if running total is 0', function(){
    calculator.runningTotal = 0;
    calculator.previousOperator = '*';
    calculator.previousTotal = 6;
    calculator.clearClick();
    assert.equal(null, calculator.previousOperator);
  })

  it('sets the previous operator and total to null if running total is 0', function(){
    calculator.runningTotal = 0;
    calculator.previousOperator = '*';
    calculator.previousTotal = 6;
    calculator.clearClick();
    assert.equal(null, calculator.previousTotal);
  })

});
