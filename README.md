# Programming Basics: Loops Using Arrays
[![Status overview badge](../../blob/badges/.github/badges/main/badge.svg)](#-results)


* Work from the `solution.js` file provided in this repository.

## 1. sumOfNumbers
- Create a program that adds up the numbers in an array (of at least 3 numbers)
- It prints the result to the Terminal in the following format: "The sum of the array is [**sum**]; the product of the array is [**product**].".  
- **Bonus**: Print to screen both the sum and the product of these numbers.

## 2. Hello Friend
- Create an array filled with your friends' and family's names.
- Loop over the array and greet each friend in the format:  
"Hello [friend]!"   
- Print the index of each item in the array. Example:  
"[friend] is at index [i] of my friends array!"  
* [Maria, Mike, Paul, Doven] ➞ expected output: "Hello Maria! Hello Mike! Hello Paul! Hello Doven!" 

* [Susan, Rezvane, Hadi] ➞ expected output: "Susan is at index 0 of my friends and family array, Rezvane is at index 1 of my friends and family array, Hadi is at index 2 of my friends and family array". 

## 3. City Names
- Create an array of city names named `cityArr`.
- Loop through the array and add the city names to a string. 
- Print the string to the terminal  
Examples:

* [Berlin, Paris, Prague, Rome] ➞ expected output: "Berlin, Paris, Prague, Rome".

## 4. Odds and Evens
- Write a function named `oddsEvens` that changes a given array by adding 1 to each odd integer and subtracting 1 from each even integer. 
- It should return the new array  
Examples:
* oddsEvens([3, 5, 2, 4]) ➞ expected output: [4, 6, 1, 3]
* oddsEvens([6, 9, 10, 20]) ➞ expected output: [5, 10, 9, 19]

## 5. Capitalize
- Create a function named `capitalize` that capitalizes the first letter of each element in an array of names.  
Examples:
* capitalize(["matt", "sara", "lara"]) ➞ ["Matt", "Sara", "Lara"]
* capitalize(["samuel", "MARIA", "luke", "mary"]) ➞ ["Samuel", "Maria", "Luke", "Mary"]
* capitalize(["Cynthia", "Karen", "Jane", "Carrie"]) ➞ ["Cynthia", "Karen", "Jane", "Carrie"]

* **Note:** Keep names in the same order and make sure that only the first letter of the name is capitalised (See "Maria" in the second above example). 
	
## 6. No Duplicates!
- A set is a collection of unique items.
- A set can be formed from an array by removing all duplicate items.
- Write a function named `noDuplicates` which transforms an array into a set of unique values. See the examples below. 

Example:
* noDuplicates([1, 4, 4, 7, 7, 7]) ➞ [1, 4, 7]

* noDuplicates([1, 6, 6, 9, 9]) ➞ [1, 6, 9]
* noDuplicates([2, 2, 2, 2, 2, 2]) ➞ [2]
* noDuplicates([5, 10, 15, 20, 25]) ➞ [5, 10, 15, 20, 25]

## 7. Repeat it 
- Write a function named `repeatItem`
- The function should create a string where the string passed as first argument is repeated as many times as denoted by the number in the second argument
- The function should return the resulting array
 Examples:

* repeatItem("example", 3) ➞ ["example", "example", "example"]

## 8. Factors
- A factor chain is an array where each previous element is a factor of the next consecutive element. The following is a factor chain:
[3, 6, 12, 36]

* // 3 is a factor of 6 (3 * 2 = 6)
* // 6 is a factor of 12 (6 * 2 = 12)
* // 12 is a factor of 36 (12 * 3 = 36)

Write a function named `isFactorChain` that determines whether or not a given array is a factor chain. Examples:
* isFactorChain([1, 2, 4, 8, 16, 32]) ➞ true
* isFactorChain([1, 1, 1, 1, 1, 1]) ➞ true
* isFactorChain([2, 4, 6, 7, 12]) ➞ false
* isFactorChain([10, 1]) ➞ false

[//]: # (autograding info start)
# <img src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" alt="" data-canonical-src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" height="31" /> Results
> ⌛ Give it a minute. As long as you see the orange dot ![processing](https://raw.githubusercontent.com/DCI-EdTech/autograding-setup/main/assets/processing.svg) on top, CodeBuddy is still processing. Refresh this page to see it's current status.
>
> This is what CodeBuddy found when running your code. It is to show you what you have achieved and to give you hints on how to complete the exercise.


### 1. sumOfNumber

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status0.svg) | Sum of numbers in array is printed to the terminal |
| ![Status](../../blob/badges/.github/badges/main/status1.svg) | Product of numbers in array is printed to the terminal |

### 2. Hello Frien

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status2.svg) | Greetings to all friends in array are printed to the terminal |
| ![Status](../../blob/badges/.github/badges/main/status3.svg) | Index of each friend in array is printed to the terminal |

### 3. City Names

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status4.svg) | `cityArr` variable exists |
| ![Status](../../blob/badges/.github/badges/main/status5.svg) | Cities from array are printed in terminal as single string |

### 4. Odds and Evens

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status6.svg) | `oddsEvens` function exists |
| ![Status](../../blob/badges/.github/badges/main/status7.svg) | Adds 1 to each 'Odd' number and subtract 1 from each 'Even' number and returns new array |

### 5. Capitalize

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status8.svg) | `capitalize` function exists |
| ![Status](../../blob/badges/.github/badges/main/status9.svg) | Takes an Array of words and capitalizes first letter of each word, returns new array |

### 6. No Duplicates!

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status10.svg) | `noDuplicates` function exists |
| ![Status](../../blob/badges/.github/badges/main/status11.svg) | Should remove duplicates from Array & return set without duplicates |

### 7. Repeat it

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status12.svg) | `repeatItem` function exists |
| ![Status](../../blob/badges/.github/badges/main/status13.svg) | Should take 'item' and 'times' arguments and return 'item' repeated number of 'times' as array |

### 8. Factors

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status14.svg) | `isFactorChain` function exists |
| ![Status](../../blob/badges/.github/badges/main/status15.svg) | Should return `true` if numbers in passed array are factor chain |
| ![Status](../../blob/badges/.github/badges/main/status16.svg) | Should return `false` if numbers in passed array are not factor chain |



[🔬 Results Details](../../actions)
[🐞 Tips on Debugging](https://github.com/DCI-EdTech/autograding-setup/wiki/How-to-work-with-CodeBuddy)
[📢 Report Problem](https://docs.google.com/forms/d/e/1FAIpQLSfS8wPh6bCMTLF2wmjiE5_UhPiOEnubEwwPLN_M8zTCjx5qbg/viewform?usp=pp_url&entry.652569746=PB-arrays-loops)


[//]: # (autograding info end)