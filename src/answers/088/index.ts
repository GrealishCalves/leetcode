function merge(nums1: number[], m: number, nums2: number[], n: number): number[] {
  // Initialize pointers for nums1 and nums2
  let p1 = m - 1;
  let p2 = n - 1;

  // Initialize pointer for the end of nums1
  let p = m + n - 1;

  // While there are still elements to place
  while (p1 >= 0 || p2 >= 0) {
    const val1 = p1 >= 0 ? nums1[p1] : -Infinity;
    const val2 = p2 >= 0 ? nums2[p2] : -Infinity;

    // Place the larger of the two values in its position
    if (val1 > val2) {
      nums1[p] = val1;
      p1--;
    } else {
      nums1[p] = val2;
      p2--;
    }

    // Move the position backwards
    p--;
  }

  // Return the updated nums1
  return nums1;
}

// Example usage:
const nums1 = [1, 2, 3, 0, 0, 0];
const m = 3;
const nums2 = [2, 5, 6];
const n = 3;

const result: number[] = merge(nums1, m, nums2, n);

console.log(result); // Output: [1, 2, 2, 3, 5, 6]
