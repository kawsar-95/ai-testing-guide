import type { PrepItem } from "../../lib/prep/types.ts";

export const items: readonly PrepItem[] = [
  {
    kind: "qa",
    id: "programming-problems-001",
    question: "How do you reverse a string?",
    template:
      "Questions I ask first: ...\nMy approach: ...\nThe code, in JavaScript: ...\nWhy it keeps every character whole: ...\nMy test inputs and results: ...\nThe cost of my code: ...",
    example:
      "I write this in JavaScript. First I ask what the input can be, for example an empty string or an emoji. My approach: I turn the string into an array of characters, reverse the array, and join it back into a string.\nfunction reverseString(text) {\nreturn [...text].reverse().join(\"\");\n}\nThe spread syntax works on a string, because a string is iterable. The string iterator gives the Unicode code points, so the emoji in my last test stays in one piece. The reverse method reverses the array in place and returns the same array. That is safe here, because the array is my own copy. The join method makes one new string from the elements. I ran it in Node: \"hello\" gives \"olleh\", \"\" gives \"\", \"a\" gives \"a\", \"Ab Cd\" gives \"dC bA\", and \"a😀b\" gives \"b😀a\". My code handles each character a fixed number of times, so the work grows in line with the length of the string.",
    behind:
      "The interviewer checks that you ask about the input before you code. They check that you test the empty string, one character, and an emoji. They also listen for whether you can say what each built-in method does, and how the cost of your code grows.",
    source: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse",
  },
  {
    kind: "qa",
    id: "programming-problems-002",
    question: "How do you check if a string is a palindrome?",
    template:
      "Questions I ask first: ...\nHow I clean the text: ...\nMy approach after cleaning: ...\nThe code, in JavaScript: ...\nMy test inputs and results: ...\nWhat my code does not cover: ...\nThe cost of my code: ...",
    example:
      "I write this in JavaScript. A palindrome reads the same forwards and backwards. First I ask if case, spaces and punctuation count. I assume that they do not, so I lower-case the text and remove every character except a to z and 0 to 9. Then I compare with two pointers. One starts at the left end, one at the right end, and they move toward the middle.\nfunction isPalindrome(text) {\nconst clean = text.toLowerCase().replaceAll(/[^a-z0-9]/g, \"\");\nlet left = 0;\nlet right = clean.length - 1;\nwhile (left < right) {\nif (clean[left] !== clean[right]) return false;\nleft++;\nright--;\n}\nreturn true;\n}\nThe toLowerCase method returns a new string in lower case, and replaceAll returns a new string with all matches replaced. Both leave the original text unchanged. In Node, \"racecar\", \"Racecar\" and \"A man, a plan, a canal: Panama\" give true. \"hello\" and \"ab\" give false. \"\" and \"a\" give true, because there is nothing to compare, and I would confirm that rule with the interviewer. My pattern keeps only English letters and digits, so for other languages I would change it. Each loop step does one comparison, so the work grows in line with the length of the text.",
    behind:
      "The interviewer checks that you ask whether case and punctuation count, and that you state your rule for the empty string. They want two clear steps: clean the text, then compare from both ends. They also listen for the limit of your pattern and the cost of the loop.",
    source: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll",
  },
  {
    kind: "qa",
    id: "programming-problems-003",
    question: "How do you find the duplicate values in an array?",
    template:
      "What my result contains: ...\nMy approach: ...\nThe code, in JavaScript: ...\nWhy a Set fits: ...\nMy test inputs and results: ...\nThe cost of my code: ...",
    example:
      "I write this in JavaScript. First I decide what the result contains: each repeated value once, in the order of its first repeat. My approach: I walk through the array one time with two Sets. One Set holds the values that I have seen. The other holds the values that I have seen again.\nfunction findDuplicates(items) {\nconst seen = new Set();\nconst repeated = new Set();\nfor (const item of items) {\nif (seen.has(item)) repeated.add(item);\nelse seen.add(item);\n}\nreturn [...repeated];\n}\nA Set keeps each value only once, so adding a value that is already inside does not add a copy. The has method returns a boolean that tells me if a value is in the Set. A Set also gives its values in the order that they were added, so my result lists the repeated values in the order of their first repeat. In Node, [1, 2, 3, 2, 1] gives [2, 1]. [] gives [], [7] gives [], [4, 4, 4, 4] gives [4], and [1, 2, 3] gives []. The Set docs say that the specification requires access times that are, on average, sublinear in the number of elements, so a lookup does less work than a scan of all elements. My loop visits each element once, so the time grows in line with the input size. The two Sets use memory that also grows with the input size.",
    behind:
      "The interviewer checks that you say what the result should contain, for example each repeated value once. They check that you pick a structure with fast lookups and say why. They also check the empty array, one element, and a value that repeats many times, and that you name the memory cost and not only the time.",
    source: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set",
  },
  {
    kind: "qa",
    id: "programming-problems-004",
    question: "How do you solve FizzBuzz?",
    template:
      "The rules: ...\nQuestions I ask first: ...\nMy approach: ...\nThe order of the checks and why: ...\nThe code, in JavaScript: ...\nMy test inputs and results: ...\nThe cost of my code: ...",
    example:
      "I write this in JavaScript. The rules: for each number from 1 to n, give \"Fizz\" if it divides by 3, \"Buzz\" if it divides by 5, \"FizzBuzz\" if it divides by both, and the number itself otherwise. First I ask what to return if n is 0 or negative. I return an empty array. Then I loop from 1 to n and test the remainder. I test the \"both\" case first. If I tested 3 first, 15 would give \"Fizz\" and never reach the \"both\" check.\nfunction fizzBuzz(n) {\nconst out = [];\nfor (let i = 1; i <= n; i++) {\nif (i % 15 === 0) out.push(\"FizzBuzz\");\nelse if (i % 3 === 0) out.push(\"Fizz\");\nelse if (i % 5 === 0) out.push(\"Buzz\");\nelse out.push(String(i));\n}\nreturn out;\n}\nThe remainder operator % returns what is left over when one number is divided by another. So i % 3 === 0 means that i divides by 3 with nothing left. A number divides by both 3 and 5 when it divides by 15. In Node, fizzBuzz(15) gives 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz. fizzBuzz(0) and fizzBuzz(-5) give an empty array, fizzBuzz(1) gives [\"1\"], and the 30th item of fizzBuzz(30) is FizzBuzz. The loop runs n times with a fixed amount of work in each step, so the time grows in line with n.",
    behind:
      "The interviewer checks the order of the conditions: the \"both\" case must come first. They check that you handle n of 0 or a negative n, and that you can explain the remainder operator. A short list of test inputs, with the 15th and 30th items, shows that you verify your code.",
    source: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder",
  },
  {
    kind: "qa",
    id: "programming-problems-005",
    question: "How do you count the characters in a string?",
    template:
      "Questions I ask first: ...\nMy approach: ...\nThe code, in JavaScript: ...\nWhy I use a Map: ...\nMy test inputs and results: ...\nThe cost of my code: ...",
    example:
      "I write this in JavaScript. First I ask if upper case and lower case count as different characters, and if spaces count. I decide that every character counts, so \"a\" and \"A\" are different. My approach: I use a Map from a character to its count. For each character, I read the current count, add one, and store it.\nfunction countCharacters(text) {\nconst counts = new Map();\nfor (const ch of text) {\ncounts.set(ch, (counts.get(ch) ?? 0) + 1);\n}\nreturn counts;\n}\nA Map holds key-value pairs, and any value can be a key. Here the key is a character and the value is its count. The get method returns undefined when the key is missing. The ?? operator returns its right side when its left side is null or undefined, so a new character starts at 0. The for...of loop works on a string, and it gives one code point at a time. A Map also remembers the order of insertion, so the result lists the characters in the order of their first appearance. In Node, \"hello\" gives h 1, e 1, l 2, o 1. \"\" gives an empty Map, \"aaa\" gives a 3, \"aAa\" gives a 2 and A 1, and \"a b a\" gives a 2, a space 2 and b 1. If the interviewer wants case to be ignored, I lower-case the text first. My loop visits each character once, so the time grows in line with the length of the text.",
    behind:
      "The interviewer checks that you pick a fitting structure (a Map), that you give a missing key a start value of 0, and that you ask about case. They also check the empty string and a text with repeated characters, and that you can state the cost of the loop.",
    source: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map",
  },
  {
    kind: "qa",
    id: "programming-problems-006",
    question: "How do you check if two strings are anagrams?",
    template:
      "Questions I ask first: ...\nHow I clean both texts: ...\nMy approach: ...\nThe code, in JavaScript: ...\nMy test inputs and results: ...\nThe cost of my code, and one other way: ...",
    example:
      "I write this in JavaScript. Two texts are anagrams if they use the same characters the same number of times. First I ask if case and spaces count. I decide that they do not, so I lower-case both texts and remove the spaces. If the lengths differ, the answer is false. Then I count the characters of the first text in a Map. For each character of the second text, I subtract one. If a character is missing or used up, the answer is false.\nfunction isAnagram(first, second) {\nconst a = first.toLowerCase().replaceAll(\" \", \"\");\nconst b = second.toLowerCase().replaceAll(\" \", \"\");\nif (a.length !== b.length) return false;\nconst counts = new Map();\nfor (const ch of a) counts.set(ch, (counts.get(ch) ?? 0) + 1);\nfor (const ch of b) {\nconst left = counts.get(ch);\nif (left === undefined || left === 0) return false;\ncounts.set(ch, left - 1);\n}\nreturn true;\n}\nThe toLowerCase method and the replaceAll method return new strings. The get method of a Map returns undefined when a key is missing, and the ?? operator turns that into 0 when I count. In Node, \"listen\" and \"silent\" give true. \"Listen\" and \"Silent\" give true, and \"Dormitory\" and \"dirty room\" give true. \"abc\" and \"abd\", \"aab\" and \"abb\", and \"abc\" and \"ab\" all give false. Two empty strings give true. I read each text once, so the time grows in line with the total length. Sorting both texts is another way, but I prefer counting because it needs no sort step.",
    behind:
      "The interviewer checks that you ask about case and spaces, that you add a quick exit for different lengths, and that you handle a missing or used-up character. They also want to hear one other way, sorting, and why you picked counting, together with the cost of your code.",
    source: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/get",
  },
  {
    kind: "qa",
    id: "programming-problems-007",
    question: "How do you find the second largest number in an array?",
    template:
      "Questions I ask first: ...\nMy approach: ...\nThe code, in JavaScript: ...\nHow each number is handled: ...\nMy test inputs and results: ...\nThe cost of my code: ...",
    example:
      "I write this in JavaScript. First I ask what to do with repeated values and with too few values. I decide that \"second largest\" means the second largest distinct value, so [5, 5, 3] gives 3. If there is no such value, I return null. My approach: one pass over the array, with two variables for the largest and the second largest value so far. Both start as null, which means \"nothing yet\".\nfunction secondLargest(numbers) {\nlet first = null;\nlet second = null;\nfor (const n of numbers) {\nif (first === null || n > first) {\nsecond = first;\nfirst = n;\n} else if (n < first && (second === null || n > second)) {\nsecond = n;\n}\n}\nreturn second;\n}\nFor each number n: if it is larger than the largest, the old largest becomes the second and n becomes the largest. Otherwise, if n is smaller than the largest and larger than the second, n becomes the second. A number equal to the largest changes nothing, so repeated values are safe. In Node, [3, 1, 4, 1, 5, 9, 2, 6] gives 6. [5, 5, 3] gives 3, [-5, -1, -3] gives -3, and [3, 3, 5] gives 3. [7], [] and [2, 2, 2] give null. My loop visits each element once and keeps two variables, so the time grows in line with the input size and the extra memory stays the same. Sorting the array also works, but it does more work than I need.",
    behind:
      "The interviewer checks how you handle repeated values and inputs with fewer than two distinct values, and that you state your rule. They check that your code works with negative numbers and needs one pass. They also listen for the cost: one pass and two variables.",
  },
  {
    kind: "qa",
    id: "programming-problems-008",
    question: "How do you check that the parentheses in a string are valid?",
    template:
      "The rules: ...\nMy approach: ...\nThe code, in JavaScript: ...\nWhat happens at an opener, a closer and the end: ...\nMy test inputs and results: ...\nThe cost of my code: ...",
    example:
      "I write this in JavaScript. A text is valid if each opening bracket is closed by the same kind of bracket, in the right order. The brackets are (), [] and {}, and I ignore other characters. My approach: I use an array as a stack. At an opening bracket, I push it onto the end. At a closing bracket, I pop the last opening bracket and check that it matches. At the end, the stack must be empty.\nfunction isValid(text) {\nconst pairs = new Map([[\")\", \"(\"], [\"]\", \"[\"], [\"}\", \"{\"]]);\nconst stack = [];\nfor (const ch of text) {\nif (ch === \"(\" || ch === \"[\" || ch === \"{\") {\nstack.push(ch);\n} else if (pairs.has(ch)) {\nif (stack.pop() !== pairs.get(ch)) return false;\n}\n}\nreturn stack.length === 0;\n}\nThe push method adds an element to the end of an array. The pop method removes the last element and returns it. If the array is empty, pop returns undefined, so a closing bracket with no opening bracket fails the check, because undefined never equals a bracket. A Map holds each closer with its opener. In Node, \"()\", \"()[]{}\" and \"{[]}\" give true. \"(]\", \"([)]\", \"(\", \")\" and \"(()\" give false. \"\" gives true, and \"a(b)c\" gives true. I would confirm with the interviewer that the empty text is valid. The loop visits each character once, and the stack can hold one entry for each character, so time and memory grow in line with the length of the text.",
    behind:
      "The interviewer checks that you use a stack, and that you handle the three failure cases: a wrong pair, a closer with no opener, and openers left at the end. They also check that you can explain why pop on an empty array is safe here. The edge cases are the empty text and other characters.",
    source: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop",
  },
];
