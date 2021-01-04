function sumOfAllEvenNumbers(nums) 
{
  var count = 0;
  for (var i = 0; i < nums.length; i++)
  {
    var temp = nums[i] % 2
    if (temp == 0)
      count++;
  }
  return count;
}

// Do not edit this line;
module.exports = sumOfAllEvenNumbers;