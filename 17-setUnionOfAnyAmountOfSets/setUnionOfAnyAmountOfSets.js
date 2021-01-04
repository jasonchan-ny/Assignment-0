function setUnionOfAnyAmountOfSets(...args) 
{
  var union = new Set();

  for(var x of args)
  {
    for(var nums of x)
      union.add(nums);
  }
  return union;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;