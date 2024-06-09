# COA-TASKFORCE-CHALLENGE-HABIYAREMYE-Laurier

## Overview

This repository contains the implementation of an interactive photo gallery and solutions to two coding challenges. The purpose of this project is to demonstrate skills in HTML, CSS, JavaScript, and problem-solving abilities.

## Contents

1. [Interactive Photo Gallery](#interactive-photo-gallery)
2. [Coding Challenges](#coding-challenges)
3. [Setup Instructions](#setup-instructions)
4. [Testing](#testing)
5. [Conclusion](#conclusion)

## Interactive Photo Gallery

### Features

- Responsive Design: The gallery adapts seamlessly to different screen sizes and devices.
- Figma Design Accuracy: The implementation matches the provided Figma designs pixel-perfectly, including layout, spacing, typography, and visual styles.
- Hover Interaction: Displays additional details when a user hovers over a photo.
- Cross-browser Compatibility: Ensures consistent performance across modern web browsers such as Chrome, Firefox, Safari, and Edge.

### Implementation

#### Directory Structure
/interactive-photo-gallery
index.html
styles.css
script.js

vbnet
Copy code

## Coding Challenges

### Array Manipulation

#### Problem Statement

Given an array of integers and a target sum, determine if there exists a contiguous subarray within the array that sums up to the target. Return true if such a subarray exists, otherwise return false.

#### Example

```javascript
Input: arr = [4, 2, 7, 1, 9, 5], target = 17
Output: true
Explanation: The subarray [7, 1, 9] sums up to 17, which is equal to the target.
Solution
javascript
Copy code
function hasTargetSumSubarray(arr, target) {
    let currSum = 0;
    let sumMap = new Map();

    for (let i = 0; i < arr.length; i++) {
        currSum += arr[i];

        if (currSum === target) {
            return true;
        }

        if (sumMap.has(currSum - target)) {
            return true;
        }

        sumMap.set(currSum, i);
    }

    return false;
}
String Transformation
Problem Statement
Given a string, transform it based on certain rules.

Example
javascript
Copy code
Input: "Hamburger"
Output: "regrubmaH"
Explanation: The length of the string is 9, which is divisible by 3 but not by 5 or 15. Therefore, the string is reversed, resulting in "regrubmaH".
Solution
javascript
Copy code
function stringTransform(input) {
    let transformed = input;

    if (input.length % 15 === 0) {
        transformed = transformed.split('').reverse().join('');
        transformed = transformed.split('').map(char => char.charCodeAt(0)).join(' ');
    } else if (input.length % 3 === 0) {
        transformed = transformed.split('').reverse().join('');
    } else if (input.length % 5 === 0) {
        transformed = transformed.split('').map(char => char.charCodeAt(0)).join(' ');
    }
    return transformed;
}
Setup Instructions
Clone the Repository:

sh
Copy code
git clone https://github.com/your-username/repo-name.git
Navigate to the Project Directory:

sh
Copy code
cd repo-name
Open the Interactive Photo Gallery:
Open index.html in your web browser to view the photo gallery.

Testing
Test Cases for Array Manipulation
javascript
Copy code
console.log(hasTargetSumSubarray([4, 2, 7, 1, 9, 5], 17)); // true
console.log(hasTargetSumSubarray([1, 2, 3, 4, 5], 15)); // true
console.log(hasTargetSumSubarray([1, 2, 3, 4, 5], 16)); // false
Test Cases for String Transformation
javascript
Copy code
console.log(stringTransform("abcabcabc")); // "cbacbacba"
console.log(stringTransform("hello")); // "104 101 108 108 111"
console.log(stringTransform("abcdef")); // "fedcba"
console.log(stringTransform("Hello World!!!!")); // "33 33 33 33 100 108 114 111 87 32 111 108 108 101 72"
Conclusion
This project demonstrates the implementation of a responsive and interactive photo gallery and solutions to two coding challenges. The code follows best practices and ensures cross-browser compatibility. Detailed instructions and testing cases are provided to facilitate setup and verification of functionality.
