function pairSum(nums, target) 
{
  for(var i = 0;i < nums.length;i++)
    for(var k = i+1;k < nums.length;k++))
      if(nums[i]+nums[k] == target)
        return true;
  }
  return false;
}

// Do not edit this line;
module.exports = pairSum;