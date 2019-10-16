describe("Strings", () => {
  it("Should join two strings with a space.", () => {
    // TODO: write 2 function with different way for join string
    function combine1(str1, str2) {
      return str1 + ' ' + str2;
    }

    function combine2(str1, str2) {
      return str1.concat(' ',str2);
    }
    expect(combine1("hello", "world")).toBe("hello world");
    expect(combine2("hello", "world")).toBe("hello world");
  });

  it("Should get string length", () => {
    function getLength(par) {
      return par.length;
    }
    expect(getLength("")).toBe(0);
    expect(getLength("word")).toBe(4);
  });

  it("Should create greeting message from template", () => {
    function greeting(userName) {
      return "Hello, " + userName +  "!";
    }
    expect(greeting("Ivan")).toBe("Hello, Ivan!");
  });

  it("Should strip leading and trailing spaces from a string", () => {
    expect(' aaaa bbb   '.trim()).toBe("aaaa bbb");
  });

  it("Replace all word occurence in the sentences", () => {
    expect('aaa bbb ccc aaa bb'.replace(/aaa/g, 'eeeee')).toBe("eeeee bbb ccc eeeee bb");
  });

  it("Should validate string length", () => {
    function validateLength(str, num1, num2) {
      if (str.length >= num1 && str.length <= num2) return true;
      else return false;
    }
    expect(validateLength('abcde', 1, 5)).toBe(true);
    expect(validateLength('a', 1, 5)).toBe(true);
    expect(validateLength('ab', 1, 5)).toBe(true);
    expect(validateLength('', 1, 5)).toBe(false);
    expect(validateLength('abcdef', 1, 5)).toBe(false);
  });

  it("Should do case insensitive strings comparison", () => {
    function compare(str1, str2) {
      if (str1.toUpperCase() == str2.toUpperCase()) return true;
      else return false;
    }
    expect(compare('aBc', 'ABC')).toBe(true);
    expect(compare('abc', 'abc')).toBe(true);
  });

  it("Should trim string according symbols limit", () => {
    function trim(str, length) {
      return str.slice(0, length).trim();
    }
    expect(trim('Lorem ipsum dolor sit amet', 7)).toBe("Lorem i");
    expect(trim('Lorem ipsum dolor sit amet', 12)).toBe("Lorem ipsum");
    expect(trim('Lorem ipsum dolor sit amet', 11)).toBe("Lorem ipsum");
    expect(trim('Lorem ipsum dolor sit amet', 100)).toBe("Lorem ipsum dolor sit amet");
  });
});
