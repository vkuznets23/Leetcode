/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let i = 0;
    let j = 0;

    while (i < m)
        i++;
    for (; i < nums1.length; i++) {
        nums1[i] = nums2[j];
        j++;
    }
    nums1.sort((a, b) => (a - b));
};
