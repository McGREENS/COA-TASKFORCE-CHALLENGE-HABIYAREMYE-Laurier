

# COA-TASKFORCE-CHALLENGE-HABIYAREMYE-Laurier

This repository contains the implementation of an interactive photo gallery and solutions to two coding challenges. The purpose of this project is to demonstrate skills in HTML, CSS, JavaScript, and problem-solving abilities.

### Contents

* Interactive Photo Gallery
* Coding Challenges
    * Array Manipulation
    * String Transformation
* Setup Instructions
* Testing
    * Array Manipulation
    * String Transformation
* Conclusion

### Interactive Photo Gallery

#### Features

* Responsive Design: The gallery adapts seamlessly to different screen sizes and devices.
* Figma Design Accuracy: The implementation matches the provided Figma designs pixel-perfectly, including layout, spacing, typography, and visual styles.
* Hover Interaction: Displays additional details when a user hovers over a photo.
* Cross-browser Compatibility: Ensures consistent performance across modern web browsers such as Chrome, Firefox, Safari, and Edge.

#### Implementation

* HTML Structure: Created the necessary elements for the gallery.
* CSS Styling: Followed the design guidelines from Figma.
* JavaScript Functionality: Implemented interactivity and functionality.

#### Directory Structure

```
/interactive-photo-gallery
    index.html
    styles.css
    script.js
```

### Coding Challenges

#### Array Manipulation

**Problem Statement**

Given an array of integers and a target sum, determine if there exists a contiguous subarray within the array that sums up to the target. Return true if such a subarray exists, otherwise return false.

**Example**

```javascript
Input: arr = [4, 2, 7, 1, 9, 5], target = 17
Output: true
Explanation: The subarray [7, 1, 9] sums up to 17, which is equal to the target.
```

**Solution**

```javascript
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
```

#### String Transformation

**Problem Statement**

Given a string, transform it based on the following rules:

* If the length of the string is divisible by 3, reverse the entire string.
* If the length of the string is divisible by 5, replace each character with its ASCII code.
* If the length of the string is divisible by both 3 and 5 (i.e., divisible by 15), perform both operations in the order specified above.

**Example**

```javascript
Input: "Hamburger"
Output: "regrubmaH"
Explanation: The length of the string is 9, which is divisible by 3 but not by 5 or 15. Therefore, the string is reversed, resulting in "regrubmaH".
```

**Solution**

```javascript
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
```

### Setup Instructions

1. Clone the Repository:

```sh
git clone https://github.com/McGREENS/COA-TASKFORCE-CHALLENGE-HABIYAREMYE-Laurier.git
```

2. Navigate to the Project Directory:

```sh
cd COA-TASKFORCE-CHALLENGE-HABIYAREMYE-Laurier
```

3. Open the Interactive Photo Gallery:

Open index.html in your web browser to view the photo gallery.

### Testing

#### Array Manipulation

```javascript
console.log(hasTargetSumSubarray([4, 2, 7, 1, 9, 5], 17)); // true
console.log(hasTargetSumSubarray([1, 2, 3, 4, 5], 15)); // true
console.log(hasTargetSumSubarray(
```

### Conclusion
This project demonstrates the implementation of a responsive and interactive photo gallery and solutions to two coding challenges. The code follows best practices and ensures cross-browser compatibility. Detailed instructions and testing cases are provided to facilitate setup and verification of functionality.

## Author
Created by: **HABIYAREMYE Laurier**
- **GIThub**: https://github.com/McGREENS
- **Address**: Rwanda

