// the first solution
1534. Count Good Triplets
var countGoodTriplets = function(arr, a, b, c) {
  let triplets = 0;  
  for(let i = 0; i<arr.length-2; i++){
      for(let j = i+1; j<arr.length-1; j++){
        for(let k = j+1; k<arr.length; k++){
          if(Math.abs(arr[i]-arr[j])<=a){
            if(Math.abs(arr[j]-arr[k])<=b){
              if(Math.abs(arr[i]-arr[k])<=c){
                triplets++;
              }
            }
          }
        }
      }
    }
  return triplets;
}

1491. Average Salary Excluding the Minimum and Maximum Salary
var average = function (salary) {
    const sum = salary.reduce((a, b) => a + b);
    return (sum - Math.max(...salary) - Math.min(...salary)) / (salary.length - 2);
};

657. Robot Return to Origin
var judgeCircle = function (m) {
    const moves = { "U": [0, 1], "D": [0, -1], "L": [-1, 0], "R": [1, 0] };
    const coordinates = [...m].map(move => moves[move]);
    const result = coordinates.reduce((sum, coordinate) => {
        sum[0] += coordinate[0];
        sum[1] += coordinate[1];
        return sum;
    }, [0, 0]);
    return result[0] === 0 && result[1] === 0;
};

268. Missing Number
var missingNumber = function(nums) {
    const max = Math.max(...nums) + 1;
    for (let i = 0; i <= max; i++) {
        if (!nums.includes(i)) {
            return i;
        }
    }
};


392. Is Subsequence
var isSubsequence = function(s, t) {
    let start = 0,
        index;
    for (let letter of s) {
        t = t.slice(start);
        index = t.indexOf(letter);
        if (index === -1) {
            return false;
        }
        start = index + 1;
    }
    return true;
};


792. Number of Matching Subsequences
var numMatchingSubseq = function(s, words) {
    var isSubsequence = function(s, t) {
        let start = 0,
            index;
        for (let letter of s) {
            t = t.slice(start);
            index = t.indexOf(letter);
            if (index === -1) {
                return false;
            }
            start = index + 1;
        }
        return true;
    };
    let matches = 0;
    words.forEach(word => {
        if(isSubsequence(word, s)){
            matches++;
        }
    })
    return matches;
};


345. Reverse Vowels of a String
var reverseVowels = function(s) {
    const regex = /[aeiou]/gi;
    let vowelsArray = s.match(regex);
    if(!vowelsArray){
        return s;
    }
    vowelsArray = vowelsArray.reverse();
    let vowel, str = "";
    for (let letter of s) {
        if (letter.match(regex)) {   
            vowel = vowelsArray.shift();
            str += vowel;
        } else {
            str += letter;
        }
    }
    return str;
};

389. Find the Difference
var findTheDifference = function(s, t) {
    const sArr = s.split("").sort();
    const tArr = t.split("").sort();
    for (let i = 0; i < tArr.length; i++) {
        if (tArr[i] !== sArr[i]) {
            return tArr[i];
        }
    }
};

1952. Three Divisors
var isThree = function(n) {
    let numberOfDivisors = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            numberOfDivisors++;
        }
        if(numberOfDivisors>=3){
            return true;
        }
    }
    return false;

};

1979. Find Greatest Common Divisor of Array
var findGCD = function(nums) {
    const min = Math.min(...nums);
    const max = Math.max(...nums);
    for (let i = min; i > 0; i--) {
        if (min % i === 0 && max % i === 0) {
            return i;
        }
    }
};
