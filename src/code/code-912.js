class Solution_912_SortAnArray {
  sortArray(nums) {
    return this.mergeSort(nums);
  }

  // Merge Sort
  mergeSort(nums) {
    if (nums.length <= 1) {
      return nums;
    }
    const mid = Math.floor(nums.length / 2);
    const left = nums.slice(0, mid);
    const right = nums.slice(mid);
    return this.merge(this.mergeSort(left), this.mergeSort(right));
  }

  merge(left, right) {
    let i = 0;
    let j = 0;
    let result = [];
    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        result.push(left[i]);
        i++;
      } else {
        result.push(right[j]);
        j++;
      }
    }
    while (i < left.length) {
      result.push(left[i]);
      i++;
    }
    while (j < right.length) {
      result.push(right[j]);
      j++;
    }
    return result;
  }

  // Quick Sort
  quickSort(nums) {
    if (nums.length <= 1) {
      return nums;
    }
    let n = [...nums];
    this._quickSort(n, 0, n.length - 1);
    return n;
  }

  _quickSort(nums, left, right) {
    if (left < right) {
      const pivot = this._partition(nums, left, right);
      this._quickSort(nums, left, pivot - 1);
      this._quickSort(nums, pivot + 1, right);
    }
  }

  _partition(nums, left, right) {
    const pivot = nums[right];
    let i = left;
    for (let j = left; j < right; j++) {
      if (nums[j] < pivot) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
        i++;
      }
    }
    [nums[i], nums[right]] = [nums[right], nums[i]];
    return i;
  }
}
