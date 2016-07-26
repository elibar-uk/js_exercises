'use strict';
describe('exer', function(){
  it('returns the longest word', function(){
    var result = findLongestWord("The quik brown fox junped over the lazy dog");
    expect(result).toEqual(6);
  });
  it('capitalizes the first letter of each word', function(){
    var result = titleCase("I'm a little tea pot");
    expect(result).toEqual("I'm A Little Tea Pot");
  });
  it('finds the largest number in each array', function(){
    var result = largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
    expect(result).toEqual([5,27,39,1001]);
  });
  it('confirms the ending of the end', function(){
    var result = confirmEnding("Bastian", "n");
    expect(result).toBeTruthy
  });
  it('repeats a string given amount of times', function(){
    var result = repeatStringNumTimes("abc", 3);
    expect(result).toEqual('abcabcabc');
  });
  it("strancates the tring if it's length larger the num, adds'...'", function(){
    var result = truncateString("A-tisket a-tasket A green and yellow basket", 11);
    expect(result).toEqual('A-tisket...');
  });
  it('chunks array into zise number of elements each array', function(){
    var result = chunkArrayInGroups(["a", "b", "c", "d"], 2);
    expect(result).toEqual([ [ 'a', 'b' ], [ 'c', 'd' ] ]);
  });
  it('chopps off howMany elements of array', function(){
    var result = slasher([1, 2, 3], 2);
    expect(result).toEqual([ 3 ]);
  });
});
