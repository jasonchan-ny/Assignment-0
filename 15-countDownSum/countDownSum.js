class MySolution {
  countDownSum(num) 
  {
    var sum = 0;
    if (num > 1)
    {
      sum = this.countDownSum(num-1);
      return sum+num;
    }
    else
      return 1;
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;