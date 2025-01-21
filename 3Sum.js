/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b);  // Sort the array to handle duplicates easily.
    let result = [];

    for (let i = 0; i < nums.length - 2; i++) {
        // Skip duplicates for the first element (nums[i])
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        let j = i + 1;
        let k = nums.length - 1;

        while (j < k) {
            const sum = nums[i] + nums[j] + nums[k];

            if (sum === 0) {
                result.push([nums[i], nums[j], nums[k]]);
                
                // Skip duplicates for the second element (nums[j])
                while (j < k && nums[j] === nums[j + 1]) {
                    j++;
                }
                
                // Skip duplicates for the third element (nums[k])
                while (j < k && nums[k] === nums[k - 1]) {
                    k--;
                }

                j++;
                k--;
            } else if (sum < 0) {
                j++;  // Increase the sum by moving the left pointer
            } else {
                k--;  // Decrease the sum by moving the right pointer
            }
        }
    }

    return result;
};
