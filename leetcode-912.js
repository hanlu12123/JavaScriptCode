class Solution_912_SortAnArray {
    sortArray(nums) {
        return this.quickSort(nums);
    }

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
            let pivot = this._partition(nums, left, right);
            this._quickSort(nums, left, pivot - 1);
            this._quickSort(nums, pivot + 1, right);
        }
    }

    _partition(nums, left, right) {
        let pivot = nums[right];
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
