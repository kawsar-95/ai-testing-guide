# Prep: Programming Problems — research notes (2026-10-13)

Area: `programming-problems` (kind `qa`, 8 items).

## Sources
S1. MDN, Array.prototype.reverse() — Mozilla — https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse — accessed 2026-10-13
S2. MDN, Array.prototype.join() — Mozilla — https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join — accessed 2026-10-13
S3. MDN, String.prototype[Symbol.iterator]() — Mozilla — https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Symbol.iterator — accessed 2026-10-13
S4. MDN, Spread syntax (...) — Mozilla — https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax — accessed 2026-10-13
S5. MDN, String.prototype.toLowerCase() — Mozilla — https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase — accessed 2026-10-13
S6. MDN, String.prototype.replaceAll() — Mozilla — https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll — accessed 2026-10-13
S7. MDN, Set — Mozilla — https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set — accessed 2026-10-13
S8. MDN, Set.prototype.has() — Mozilla — https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/has — accessed 2026-10-13
S9. MDN, Remainder (%) — Mozilla — https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder — accessed 2026-10-13
S10. MDN, Map — Mozilla — https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map — accessed 2026-10-13
S11. MDN, Map.prototype.get() — Mozilla — https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/get — accessed 2026-10-13
S12. MDN, Nullish coalescing operator (??) — Mozilla — https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing — accessed 2026-10-13
S13. MDN, for...of — Mozilla — https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of — accessed 2026-10-13
S14. MDN, Array.prototype.pop() — Mozilla — https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop — accessed 2026-10-13
S15. MDN, Array.prototype.push() — Mozilla — https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push — accessed 2026-10-13

Method: each page was downloaded with curl and converted to plain text (HTML tags removed, whitespace collapsed). A script matched every quote of the claims table against the text of its page. The match ignores only the difference between curly and straight quotes and between kinds of white space. All quotes matched.

Scope: the solutions are JavaScript, run in Node. Facts that the speaker states about the language (what a method or an operator does) have a row below. The complexity statements ("the time grows in line with the input size") are the speaker's own analysis of the code shown. They are not claims about the language, so they have no row. `programming-problems-007` states no language fact, so it has no row and no `source`. The test inputs and the results of each solution are in the section "Code checks" at the end.

Not used as a source: any blog, forum, interview-question site, or prep.galib.dev.

Item `source` pages (the page that holds the main claim of the item; the other pages are in the rows below):
- `programming-problems-001`: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse — S1 (MDN, Array.prototype.reverse()). Other pages in the rows: S4, S3, S2.
- `programming-problems-002`: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll — S6 (MDN, String.prototype.replaceAll()). Other pages in the rows: S5.
- `programming-problems-003`: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set — S7 (MDN, Set). Other pages in the rows: S8.
- `programming-problems-004`: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder — S9 (MDN, Remainder (%)).
- `programming-problems-005`: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map — S10 (MDN, Map). Other pages in the rows: S11, S12, S13, S3.
- `programming-problems-006`: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/get — S11 (MDN, Map.prototype.get()). Other pages in the rows: S12, S5, S6.
- `programming-problems-007`: no `source`. The item states no language or tool fact. The complexity statements are the speaker's own analysis.
- `programming-problems-008`: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop — S14 (MDN, Array.prototype.pop()). Other pages in the rows: S15, S10.

## Claims
| # | Item id | Claim | Exact short quote | Source |
|---|---|---|---|---|
| C1 | programming-problems-001 | The spread syntax expands an iterable, such as a string, into the elements of an array literal. | "allows an iterable, such as an array or string, to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected" | S4 |
| C2 | programming-problems-001 | The string iterator yields the Unicode code points of the string. | "It returns a string iterator object that yields the Unicode code points of the string value as individual strings." | S3 |
| C3 | programming-problems-001 | reverse() reverses an array in place and returns the same array. | "reverses an array in place and returns the reference to the same array" | S1 |
| C4 | programming-problems-001 | join() returns a new string made from all elements, with a separator. | "returns a new string that is the concatenation of all elements in this array, separated by commas or a specified separator string" | S2 |
| C5 | programming-problems-002 | toLowerCase() returns the string converted to lower case. | "returns this string converted to lower case" | S5 |
| C6 | programming-problems-002 | toLowerCase() does not change the original string. | "does not affect the value of the string str itself" | S5 |
| C7 | programming-problems-002 | replaceAll() returns a new string with all matches of a pattern replaced. | "returns a new string with all matches of a pattern replaced by a replacement" | S6 |
| C8 | programming-problems-002 | The pattern of replaceAll() can be a string or a RegExp. | "The pattern can be a string or a RegExp" | S6 |
| C9 | programming-problems-002 | replaceAll() leaves the original string unchanged. | "The original string is left unchanged." | S6 |
| C10 | programming-problems-003 | A value can occur only once in a Set. | "A value in the set may only occur once; it is unique in the set's collection." | S7 |
| C11 | programming-problems-003 | A Set is iterated in insertion order, and add() does not insert a value that is already in the Set. | "The insertion order corresponds to the order in which each element was inserted into the set by the add() method successfully (that is, there wasn't an identical element already in the set when add() was called)." | S7 |
| C12 | programming-problems-003 | You can iterate through the elements of a Set in insertion order. | "You can iterate through the elements of a set in insertion order." | S7 |
| C13 | programming-problems-003 | has() returns a boolean that tells if a value is in the Set. | "returns a boolean indicating whether the specified value exists in this Set or not" | S8 |
| C14 | programming-problems-003 | The specification requires sublinear access times on average. | "that, on average, provide access times that are sublinear on the number of elements in the collection" | S7 |
| C15 | programming-problems-004 | The remainder operator % returns the remainder left over after a division. | "The remainder (%) operator returns the remainder left over when one operand is divided by a second operand." | S9 |
| C16 | programming-problems-005 | A Map holds key-value pairs and remembers the insertion order of the keys. | "The Map object holds key-value pairs and remembers the original insertion order of the keys." | S10 |
| C17 | programming-problems-005 | Any value can be a key or a value of a Map. | "Any value (both objects and primitive values) may be used as either a key or a value." | S10 |
| C18 | programming-problems-005 | Iteration of a Map follows the order in which each pair was first inserted by set(). | "Iteration happens in insertion order, which corresponds to the order in which each key-value pair was first inserted into the map by the set() method" | S10 |
| C19 | programming-problems-005 | Map.get() returns undefined if there is no such key. | "returns the value corresponding to the key in this Map, or undefined if there is none" | S11 |
| C20 | programming-problems-005 | The ?? operator returns the right side when the left side is null or undefined. | "returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand" | S12 |
| C21 | programming-problems-005 | for...of loops over an iterable, and a String is an iterable. | "The for...of statement executes a loop that operates on a sequence of values sourced from an iterable object. Iterable objects include instances of built-ins such as Array, String" | S13 |
| C22 | programming-problems-005 | The string iterator yields the Unicode code points of the string. | "yields the Unicode code points of the string value as individual strings" | S3 |
| C23 | programming-problems-006 | Map.get() returns undefined if the key is missing. | "If the key can't be found, undefined is returned." | S11 |
| C24 | programming-problems-006 | The ?? operator returns the right side when the left side is null or undefined. | "returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand" | S12 |
| C25 | programming-problems-006 | toLowerCase() returns a new string in lower case. | "A new string representing the calling string converted to lower case." | S5 |
| C26 | programming-problems-006 | replaceAll() returns a new string with all matches replaced, and the pattern can be a string. | "returns a new string with all matches of a pattern replaced by a replacement" | S6 |
| C27 | programming-problems-006 | The pattern of replaceAll() can be a string or a RegExp. | "The pattern can be a string or a RegExp" | S6 |
| C28 | programming-problems-008 | push() adds elements to the end of an array. | "adds the specified elements to the end of an array and returns the new length of the array" | S15 |
| C29 | programming-problems-008 | pop() removes the last element of an array and returns it. | "removes the last element from an array and returns that element" | S14 |
| C30 | programming-problems-008 | pop() on an empty array returns undefined. | "If you call pop() on an empty array, it returns undefined." | S14 |
| C31 | programming-problems-008 | A Map holds key-value pairs, and any value can be a key or a value. | "The Map object holds key-value pairs and remembers the original insertion order of the keys." | S10 |

## Code checks

Each solution was run in Node (v26.8.1) before it was written into the item. The inputs and the results:

```text
## programming-problems-001 reverseString
OK   reverseString("hello") -> "olleh" 
OK   reverseString("") -> "" 
OK   reverseString("a") -> "a" 
OK   reverseString("Ab Cd") -> "dC bA" 
OK   reverseString("aab") -> "baa" 
OK   reverseString("racecar") -> "racecar" 
OK   reverseString("a😀b") -> "b😀a" 
## programming-problems-002 isPalindrome
OK   isPalindrome("racecar") -> true 
OK   isPalindrome("Racecar") -> true 
OK   isPalindrome("A man, a plan, a canal: Panama") -> true 
OK   isPalindrome("hello") -> false 
OK   isPalindrome("") -> true 
OK   isPalindrome("a") -> true 
OK   isPalindrome("ab") -> false 
OK   isPalindrome("abba") -> true 
OK   isPalindrome(".,") -> true 
OK   isPalindrome("0P") -> false 
## programming-problems-003 findDuplicates
OK   findDuplicates([1,2,3,2,1]) -> [2,1] 
OK   findDuplicates([]) -> [] 
OK   findDuplicates([7]) -> [] 
OK   findDuplicates([4,4,4,4]) -> [4] 
OK   findDuplicates([1,2,3]) -> [] 
OK   findDuplicates(["a","b","a","A"]) -> ["a"] 
OK   findDuplicates([1,"1",1]) -> [1] 
OK   findDuplicates(["NaN","NaN"]) -> ["NaN"] 
## programming-problems-004 fizzBuzz
OK   fizzBuzz(15) -> ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"] 
OK   fizzBuzz(0) -> [] 
OK   fizzBuzz(1) -> ["1"] 
OK   fizzBuzz(-5) -> [] 
OK   fizzBuzz(5) -> ["1","2","Fizz","4","Buzz"] 
OK   fizzBuzz(3) -> ["1","2","Fizz"] 
OK   fizzBuzz(30) -> ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz","16","17","Fizz","19","Buzz","Fizz","22","23","Fizz","Buzz","26","Fizz","28","29","FizzBuzz"] (length 30, last FizzBuzz, [14]=FizzBuzz)
## programming-problems-005 countCharacters
OK   countCharacters("hello") -> [["h",1],["e",1],["l",2],["o",1]] 
OK   countCharacters("") -> [] 
OK   countCharacters("a") -> [["a",1]] 
OK   countCharacters("aaa") -> [["a",3]] 
OK   countCharacters("aAa") -> [["a",2],["A",1]] 
OK   countCharacters("a b a") -> [["a",2],[" ",2],["b",1]] 
OK   countCharacters("__proto__") -> [["_",4],["p",1],["r",1],["o",2],["t",1]] 
OK   countCharacters("a😀😀") -> [["a",1],["😀",2]] 
## programming-problems-006 isAnagram
OK   isAnagram("listen", "silent") -> true 
OK   isAnagram("Listen", "Silent") -> true 
OK   isAnagram("Dormitory", "dirty room") -> true 
OK   isAnagram("abc", "abd") -> false 
OK   isAnagram("aab", "abb") -> false 
OK   isAnagram("", "") -> true 
OK   isAnagram("a", "a") -> true 
OK   isAnagram("a", "b") -> false 
OK   isAnagram("abc", "ab") -> false 
OK   isAnagram("rat", "car") -> false 
OK   isAnagram("😀a", "a😀") -> true 
## programming-problems-007 secondLargest
OK   secondLargest([3,1,4,1,5,9,2,6]) -> 6 
OK   secondLargest([5,5,3]) -> 3 
OK   secondLargest([7]) -> null 
OK   secondLargest([]) -> null 
OK   secondLargest([2,2,2]) -> null 
OK   secondLargest([-5,-1,-3]) -> -3 
OK   secondLargest([1,2]) -> 1 
OK   secondLargest([2,1]) -> 1 
OK   secondLargest([10,10,9,9]) -> 9 
OK   secondLargest([3,3,5]) -> 3 
OK   secondLargest([5,4,5,3]) -> 4 
OK   secondLargest([0,-1]) -> -1 
## programming-problems-008 isValid
OK   isValid("()") -> true 
OK   isValid("()[]{}") -> true 
OK   isValid("(]") -> false 
OK   isValid("([)]") -> false 
OK   isValid("{[]}") -> true 
OK   isValid("") -> true 
OK   isValid("(") -> false 
OK   isValid(")") -> false 
OK   isValid("((") -> false 
OK   isValid("a(b)c") -> true 
OK   isValid("(()") -> false 
failures: 0
```
