# COA-TASKFORCE-CHALLENGE-HABIYAREMYE-Laurier

# Overview
This repository contains the implementation of an Interactive Photo Gallery and solutions to two coding challenges. The purpose of this project is to demonstrate skills in HTML, CSS, JavaScript, and problem-solving abilities.


## Introduction
The Interactive Photo Gallery & Coding Challenges project demonstrates the creation of a responsive photo gallery and solutions to two specific coding problems. The gallery showcases interactivity and design accuracy, while the coding challenges highlight problem-solving skills in JavaScript.

## Interactive Photo Gallery
Features
# Responsive Design: 
Adapts to different screen sizes and devices.
Figma Design Accuracy: Matches provided Figma designs pixel-perfectly.
Hover Interaction: Displays additional details on hover.
Cross-browser Compatibility: Consistent performance across Chrome, Firefox, Safari, and Edge.
Implementation
HTML Structure: Created the necessary elements for the gallery.
CSS Styling: Followed the design guidelines from Figma.
JavaScript Functionality: Implemented interactivity and functionality.
Coding Challenges
Array Manipulation
Problem Statement: Given an array of integers and a target sum, determine if there exists a contiguous subarray within the array that sums up to the target. Return true if such a subarray exists, otherwise return false.

Example:

javascript

Input: arr = [4, 2, 7, 1, 9, 5], target = 17
Output: true
Explanation: The subarray [7, 1, 9] sums up to 17, which is equal to the target.
Solution:

javascript

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
Problem Statement: Given a string, transform it based on the following rules:

If the length of the string is divisible by 3, reverse the entire string.
If the length of the string is divisible by 5, replace each character with its ASCII code.
If the length of the string is divisible by both 3 and 5 (i.e., divisible by 15), perform both operations in the order specified above.
Example:

javascript

Input: "Hamburger"
Output: "regrubmaH"
Explanation: The length of the string is 9, which is divisible by 3 but not by 5 or 15. Therefore, the string is reversed, resulting in "regrubmaH".
Solution:


javascript

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
Technologies Used
Frontend: HTML, CSS, JavaScript
Design Tool: Figma
Setup Instructions
Follow these steps to set up the project on your local machine.

Prerequisites
Web browser (Chrome, Firefox, Safari, Edge)
Steps


Clone the Repository:

git clone https://github.com/McGREENS/COA-TASKFORCE-CHALLENGE-HABIYAREMYE-Laurier.git
Navigate to the Project Directory:



cd COA-TASKFORCE-CHALLENGE-HABIYAREMYE-Laurier
Open the Interactive Photo Gallery:
Open index.html in your web browser to view the photo gallery.
Project Structure



COA-TASKFORCE-CHALLENGE-HABIYAREMYE-Laurier/
├── UI Challenge - Interactive Photo Gallery/
│   ├── images/
│   │   └── (image files)
│   ├── index.html
│   ├── script.js
│   └── styles.css
└── Coding Challenges/
    ├── array-manipulation.js
    └── string-transformation.js
Testing
Test Cases for Array Manipulation
javascript


console.log(hasTargetSumSubarray([4, 2, 7, 1, 9, 5], 17)); // true
console.log(hasTargetSumSubarray([1, 2, 3, 4, 5], 15)); // true
console.log(hasTargetSumSubarray([1, 2, 3, 4, 5], 16)); // false
Test Cases for String Transformation
javascript


console.log(stringTransform("abcabcabc")); // "cbacbacba"
console.log(stringTransform("hello")); // "104 101 108 108 111"
console.log(stringTransform("abcdef")); // "fedcba"
console.log(stringTransform("Hello World!!!!")); // "33 33 33 33 100 108 114 111 87 32 111 108 108 101 72"
Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes.

Author
Created by: Laurier Habiyareye

