/**
 * This is the unction to check if there exists a contiguous subarray that sums up to the target
 * @param {number[]} arr - Array of integers
 * @param {number} target - Target sum
 * @returns {boolean} - True if  a subarray exists, otherwise false
 */
function hasTargetSumSubarray(arr, target) {
    // Initializing the current sum and a map to store the sums
    let currSum = 0;
    let sumMap = new Map();

    for (let i = 0; i < arr.length; i++) {
        currSum += arr[i];

        // Then check if the current sum is equal to the target
        if (currSum === target) {
            return true;
        }

        // And also check if there is a subarray whose sum is the target
        if (sumMap.has(currSum - target)) {
            return true;
        }

        // And add the current sum to the map
        sumMap.set(currSum, i);
    }

    return false;
}

// The test cases
// The test case 1
console.log("Test Case 1:");
console.log(`Input: arr = [4, 2, 7, 1, 9, 5], target = 14`);
console.log(`Expected: true, Actual: ${hasTargetSumSubarray([4, 2, 7, 1, 9, 5], 14)}`);

// The test case 2
console.log("Test Case 2:");
console.log(`Input: arr = [1, 2, 3, 4, 5], target = 9`);
console.log(`Expected: true, Actual: ${hasTargetSumSubarray([1, 2, 3, 4, 5], 9)}`);

// The test case 3
console.log("Test Case 3:");
console.log(`Input: arr = [1, 2, 3, 4, 5], target = 15`);
console.log(`Expected: true, Actual: ${hasTargetSumSubarray([1, 2, 3, 4, 5], 15)}`);

// The test case 4
console.log("Test Case 4:");
console.log(`Input: arr = [1, 2, 3, 4, 5], target = 16`);
console.log(`Expected: false, Actual: ${hasTargetSumSubarray([1, 2, 3, 4, 5], 16)}`);

// The test case 5
console.log("Test Case 5:");
console.log(`Input: arr = [0, 0, 0, 0], target = 0`);
console.log(`Expected: true, Actual: ${hasTargetSumSubarray([0, 0, 0, 0], 0)}`);

// The test case 6
console.log("Test Case 6:");
console.log(`Input: arr = [5], target = 10`);
console.log(`Expected: false, Actual: ${hasTargetSumSubarray([5], 10)}`);

// The test case 7
console.log("Test Case 7:");
console.log(`Input: arr = [5, -3, 2, 3, 1], target = 5`);
console.log(`Expected: true, Actual: ${hasTargetSumSubarray([5, -3, 2, 3, 1], 5)}`);

// The test case 8
console.log("Test Case 8:");
console.log(`Input: arr = [1, -1, 1, -1, 1, -1], target = 0`);
console.log(`Expected: true, Actual: ${hasTargetSumSubarray([1, -1, 1, -1, 1, -1], 0)}`);
