function processArrayTasks(inputArray) {
    // Reverse the Array manually
    function reverseArray(arr) {
        let reversed = [];
        for (let i = arr.length - 1; i >= 0; i--) {
            reversed.push(arr[i]);
        }
        return reversed;
    }

    // Calculate the sum of even numbers at even indices
    function sumEvenNumbersAtEvenIndices(arr) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            if (i % 2 === 0 && arr[i] % 2 === 0) {
                sum += arr[i];
            }
        }
        return sum;
    }

    // Check if the array is a palindrome
    function isPalindrome(arr) {
        let len = arr.length;
        for (let i = 0; i < Math.floor(len / 2); i++) {
            if (arr[i] !== arr[len - 1 - i]) {
                return false;
            }
        }
        return true;
    }

    // Process the input array with the defined functions
    return {
        reversedArray: reverseArray(inputArray),
        sumEven: sumEvenNumbersAtEvenIndices(inputArray),
        isPalindrome: isPalindrome(inputArray)
    };
}

// Example usage:
let result = processArrayTasks([6, 2, 4, 3, 7, 1]);
console.log(result.reversedArray); // Output: [1, 7, 3, 4, 2, 6]
console.log(result.sumEven);       // Output: 10
console.log(result.isPalindrome);  // Output: false

// Additional test cases:
result = processArrayTasks([1, 2, 3, 2, 1]);
console.log(result.reversedArray); // Output: [1, 2, 3, 2, 1]
console.log(result.sumEven);       // Output: 2
console.log(result.isPalindrome);  // Output: true

result = processArrayTasks([2, 4, 6, 8, 10]);
console.log(result.reversedArray); // Output: [10, 8, 6, 4, 2]
console.log(result.sumEven);       // Output: 18
console.log(result.isPalindrome);  // Output: false
