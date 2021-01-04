function frequencyCounter(word) 
{
  var search = {};
  var letters = word.split("");
  letters.forEach(element =>
  {
    if(!(element in search))
      search[element] = 1;
    else
      search[element]++;
  });
  return search;
}

// Do not edit this line;
module.exports = frequencyCounter;