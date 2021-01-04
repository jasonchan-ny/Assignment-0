function sumOfMinimumAndMaximum(nums) 
{
  var count = 0;
  var min = nums[0];
  var max = nums[0]
  for (var i = 1; i < nums.length; i++)
  {
    if (nums[i] < min)
      min = nums[i];
    if (nums[i] > max)
      max = nums[i];
  }
  var result = min + max;
  return result;
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;