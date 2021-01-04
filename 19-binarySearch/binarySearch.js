class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) 
  {
    var first = 0;
    var last = nums.length - 1;

    while(first <= last)
    {
      var mid = parseInt((first+last)/2)

      if (mid === target)
        return true;
      else if (nums[mid] < target)
        first = mid + 1;
      else if (nums[mid] > target)
        last = mid - 1;
    }
    return false;
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;