const rewire = require("rewire");

beforeAll(() => (consoleSpy = jest.spyOn(console, "log")));

describe("1. sumOfNumber", () => {
    it("Sum of numbers in array is printed to the terminal", () => {
        const solution = require("../solution");
        expect(consoleSpy).toHaveBeenCalledWith(expect.stringMatching(/sum of the array/i));
    })
    it("Product of numbers in array is printed to the terminal", () => {
        const solution = require("../solution");
        expect(consoleSpy).toHaveBeenCalledWith(expect.stringMatching(/product/i));
    })
})

describe("2. Hello Frien", () => {
    it("Greetings to all friends in array are printed to the terminal", () => {
        const solution = require("../solution");
        expect(consoleSpy).toHaveBeenCalledWith(expect.any(String));
        expect(consoleSpy).toHaveBeenCalledWith(expect.stringMatching(/Hello/i));
    })
    it("Index of each friend in array is printed to the terminal", () => {
        const solution = require("../solution");
        expect(consoleSpy).toHaveBeenCalledWith(expect.any(String));
        expect(consoleSpy).toHaveBeenCalledWith(expect.stringMatching(/is at index 0 of my friends array/i));
        expect(consoleSpy).toHaveBeenCalledWith(expect.stringMatching(/is at index 1 of my friends array/i));
    })
})

describe("3. City Names", () => {
    it("`cityArr` variable exists", () => {
        const cityArr = rewire('../solution').__get__("cityArr");
        expect(cityArr).toBeDefined();
    })
    it("Cities from array are printed in terminal as single string", () => {
        const cityArr = rewire('../solution').__get__("cityArr");
        expect(consoleSpy).toHaveBeenCalledWith(expect.stringMatching(`${cityArr.join(', ')}`));
    })
})

describe("4. Odds and Evens", () => {
    it("`oddsEvens` function exists", () => {
        const oddsEvens = rewire('../solution').__get__("oddsEvens");
        expect(oddsEvens).toBeDefined();
    })
    it("Adds 1 to each 'Odd' number and subtract 1 from each 'Even' number and returns new array", () => {
        const oddsEvens = rewire('../solution').__get__("oddsEvens");
        const integerArr = [6, 9, 10, 20];
        expect(oddsEvens(integerArr)).toEqual([5, 10, 9, 19]);
    })
})

describe("5. Capitalize", () => {
    it("`capitalize` function exists", () => {
        const capitalize = rewire('../solution').__get__("capitalize");
        expect(capitalize).toBeDefined();
    })
    it("Takes an Array of words and capitalizes first letter of each word, returns new array", () => {
        const capitalize = rewire('../solution').__get__("capitalize");
        const wordsArr = ["hello", "world", "i", "am", "in", "the", "sky"];
        expect(capitalize(wordsArr)).toEqual(["Hello", "World", "I", "Am", "In", "The", "Sky"]);

    })
})

describe("6. No Duplicates!", () => {
    it("`noDuplicates` function exists", () => {
        const noDuplicates = rewire('../solution').__get__("noDuplicates");
        expect(noDuplicates).toBeDefined();
    })
    it("Should remove duplicates from Array & return set without duplicates", () => {
        const noDuplicates = rewire('../solution').__get__("noDuplicates");
        const numArr = [1, 6, 6, 9, 9, 0, 0];
        expect(noDuplicates(numArr)).toEqual([1, 6, 9, 0]);

    })
})

describe("7. Repeat it", () => {
    it("`repeatItem` function exists", () => {
        const repeatItem = rewire('../solution').__get__("repeatItem");
        expect(repeatItem).toBeDefined();
    })
    it("Should take 'item' and 'times' arguments and return 'item' repeated number of 'times' as array", () => {
        const repeatItem = rewire('../solution').__get__("repeatItem");
        expect(repeatItem("Github", 3)).toEqual(["Github", "Github", "Github"]);

    })
})

describe("8. Factors", () => {
    it("`isFactorChain` function exists", () => {
        const isFactorChain = rewire('../solution').__get__("isFactorChain");
        expect(isFactorChain).toBeDefined();
    })
    it("Should return `true` if numbers in passed array are factor chain", () => {
        const isFactorChain = rewire('../solution').__get__("isFactorChain");
        expect(isFactorChain([1, 2, 4, 8, 16, 32])).toBe(true);
    })
    it("Should return `false` if numbers in passed array are not factor chain", () => {
        const isFactorChain = rewire('../solution').__get__("isFactorChain");
        expect(isFactorChain([1, 2, 4, 7, 16, 32])).toBe(false);
    })
})