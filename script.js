function sumTwoSmallestNums(AK) {
    AK.sort(function(c, d) {
      return c - d;
    });
    var sum = AK[0] + AK[1];
    return sum;
  }
  console.log(sumTwoSmallestNums([12, 5, 24, 55, 18]));
  console.log(sumTwoSmallestNums([190, 300, 230, 800]));  