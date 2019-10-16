describe("Numbers", () => {
  it("Should use remainder operator '%' ", () => {
    const a = 15;
    const b = 10;

    expect(a % b).toBe(5);
    expect(b % b).toBe(0);
  });

  test("Should get average of 3 numbers", () => {
    function average() {
      let result = 0;
      for (let i = 0; i < arguments.length; i++) {
        result += arguments[i];
      }
      return result / arguments.length;
    }
    expect(average(2, 4, 6)).toBe(4);
    expect(average(-5, 12, -7)).toBe(0);
  });

  test("Should get a last digit of the number", () => {
    function last(num) {
      let arrayOfDigits = Array.from(String(num), Number);
      let lastPosition = arrayOfDigits.length - 1;
      return arrayOfDigits[lastPosition];
    }
    expect(last(123)).toBe(3);
    expect(last(3982)).toBe(2);
  });

  test("Should sum the digits of a given number", () => {
    function sumDigits(num) {
      let arrayOfDigits = Array.from(String(num), Number);
      let sum = 0;
      for (let i=0; i < arrayOfDigits.length; i++) {
        sum += arrayOfDigits[i];
      }
      return sum;
    }
    expect(sumDigits(123)).toBe(6);
    expect(sumDigits(53)).toBe(8);
  });

  test("Should return true if specified number is prime", () => {
    function isPrime(num) {
      for(let i = 2; i < num; i++)
        if(num % i === 0) return false;
      return num > 1;
    }
    expect(isPrime(7)).toBe(true);
    expect(isPrime(4)).toBe(false);

    // TODO: Write additional tests
  });

  test("Should convert string to number", () => {
    function convert(str) {
      return Number(str);
    }
    expect(convert('234')).toBe(234);
  });

  test("Should find highest value", () => {
    // TODO: Write 2 functions max and max2. Only one of them should use Math
    function max() {
      let maxValue = arguments[0];
      for (let i=1; i < arguments.length; i++) {
        if (arguments[i] > maxValue) maxValue = arguments[i];
      }
      return maxValue;
    }

    function max2() {
      return Math.max.apply(null, arguments);
    }
    expect(max(1, 2)).toBe(2);
    expect(max2(1, 7, 2, 8, 5)).toBe(8);
  });

  test("Should find lowest value", () => {
    function min() {
      let minValue = arguments[0];
      for (let i=1; i < arguments.length; i++) {
        if (arguments[i] < minValue) minValue = arguments[i];
      }
      return minValue;
    }

    function min2() {
      return Math.min.apply(null, arguments);
    }
    expect(min(2, 3, 9, 4, 1, 5)).toBe(1);
    expect(min2(2, 3, 9, 4, 1, 5)).toBe(1);
    // TODO: Write additional tests
  });

  test("Should round up a value to the nearest integer", () => {
    function round1(num) {
      return Math.round(num);
    }

    function round2(num){
      return Number(num.toFixed());
    }

    expect(round1(0.5)).toBe(1);
    expect(round1(2.2)).toBe(2);
    expect(round2(1.33333)).toBe(1);
    expect(round2(5)).toBe(5);
  });

  test("Should get the largest integer less than or equal to a given number.  ", () => {
    expect(Math.floor(1)).toBe(1);
    expect(Math.floor(1.2)).toBe(1);
    expect(Math.floor(1.8)).toBe(1);

    // TODO: Write additional tests
  });

  test("Should return the base10 representation of a binary string", function() {
    expect(parseInt('11000000',2)).toBe(192);
  });

  test("Should convert an eight-bit string number to a binary string", function() {
    expect(parseInt('127',8).toString(2)).toBe("1010111");
    expect(parseInt('65',8).toString(2)).toBe("110101");
  });
});
