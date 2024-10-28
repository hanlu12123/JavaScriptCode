class Solution_704_BinarySearch {
  // non-recursion
  searchNonRecursion(nums, target) {
    let startIndex = 0;
    let endIndex = nums.length - 1;
    while (startIndex <= endIndex) {
      let midIndex = Math.floor((startIndex + endIndex) / 2);
      if (nums[midIndex] === target) {
        return midIndex;
      } else if (nums[midIndex] > target) {
        endIndex = midIndex - 1;
      } else if (nums[midIndex] < target) {
        startIndex = midIndex + 1;
      }
    }
    return -1;
  }

  // recursion
  searchRecursion(nums, target) {
    return this.binarySearch(nums, 0, nums.length - 1, target);
  }

  binarySearch(nums, left, right, target) {
    if (left > right) {
      return -1;
    }
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      return this.binarySearch(nums, left, mid - 1, target);
    } else {
      return this.binarySearch(nums, mid + 1, right, target);
    }
  }
}
