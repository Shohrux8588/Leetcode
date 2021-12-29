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

1200. Minimum Absolute Difference
var minimumAbsDifference = function(arr) {
    let difference, minDifference = Infinity,
        pairs = [];

    const sortedArr = arr.sort((a, b) => a - b);

    for (let i = 0; i < sortedArr.length - 1; i++) {
        difference = Math.abs(sortedArr[i] - sortedArr[i + 1]);
        if (minDifference > difference) {
            minDifference = difference;
            pairs = [];
            pairs.push([sortedArr[i], sortedArr[i + 1]]);
        } else if (minDifference === difference) {
            pairs.push([sortedArr[i], sortedArr[i + 1]])
        }
    }
    return pairs;
};


// 819. Most Common Word
var mostCommonWord = function(paragraph, banned) {
    const regex = /\w+/gi;
    
    const words = paragraph.match(regex).map(word => word.toLowerCase());
    
    let countWords = words.reduce((obj, word) => {
        if (obj.hasOwnProperty(word)) {
            obj[word]++;
        } else {
            obj[word] = 1;
        }
        return obj;
    }, {});

    const sortedPairs = Object.entries(countWords).sort((a, b) => b[1] - a[1]);

    for (let i = 0; i < sortedPairs.length; i++) {
        if (!banned.includes(sortedPairs[i][0])) {
            return sortedPairs[i][0];
        }
    }
};


// 485. Max Consecutive Ones
var findMaxConsecutiveOnes = function(nums) {
    let max = 0,
        counter = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            counter++
        } else {
            if (max < counter) {
                max = counter;
            }
            counter = 0;
        }
    }
    if (counter > max) {
        max = counter;
    }
    return max;
};

// 1446. Consecutive Characters
var maxPower = function(s) {
    let max = 0,
        counter = 1;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i + 1]) {
            counter++;
        } else {
            if (counter > max) {
                max = counter;
            }
            counter = 1;
        }
    }
    return max;
};


// 1869. Longer Contiguous Segments of Ones than Zeros
var checkZeroOnes = function(s) {
    let zeroMax = 0,
        zeroCounter = 0,
        oneMax = 0,
        oneCounter = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] == 0) {
            zeroCounter++
            if (oneMax < oneCounter) {
                oneMax = oneCounter;
            }
            oneCounter = 0;
        } else {
            oneCounter++;
            if (zeroMax < zeroCounter) {
                zeroMax = zeroCounter;
            }
            zeroCounter = 0;
        }
    }
    if (oneMax < oneCounter) {
        oneMax = oneCounter;
    }
    if (zeroMax < zeroCounter) {
        zeroMax = zeroCounter;
    }
    return oneMax > zeroMax;
};


// 2089. Find Target Indices After Sorting Array
var targetIndices = function(nums, target) {
    let listOfIndexes = [];
    const sortedNums = nums.sort((a, b) => a - b);
    sortedNums.forEach((num, index) => {
        if (num === target) {
            listOfIndexes.push(index);
        }
    })
    return listOfIndexes;
};


// 1331. Rank Transform of an Array
var arrayRankTransform = function(arr) {
    const sortedArr = [...arr].sort((a, b) => a - b);
    const uniqueSortedArr = [...new Set(sortedArr)];
    const rankArr = arr.map(num => uniqueSortedArr.indexOf(num) + 1);
    return rankArr;
};


// 2037. Minimum Number of Moves to Seat Everyone
var minMovesToSeat = function(seats, students) {
    let minimumNumberOfMoves = 0;
    const sortedSeats = seats.sort((a, b) => a - b);
    const sortedStudents = students.sort((a, b) => a - b);

    sortedSeats.forEach((seat, index) => {
        minimumNumberOfMoves += Math.abs(seat - sortedStudents[index]);
    })

    return minimumNumberOfMoves;
};

// 1732. Find the Highest Altitude
var largestAltitude = function(gain) {
    let altitudes = [0];
    
    for (let i = 0; i < gain.length; i++) {
        altitudes[i + 1] = altitudes[i] + gain[i];
    }
    
    return Math.max(...altitudes);
};

// 2114. Maximum Number of Words Found in Sentences
var mostWordsFound = function(sentences) {
    let lengthOfSentence, maximumNumberOfWords = 0;
    sentences.forEach(sentence => {
        lengthOfSentence = sentence.split(" ").length;
        if (maximumNumberOfWords < lengthOfSentence) {
            maximumNumberOfWords = lengthOfSentence;
        }
    })
    return maximumNumberOfWords;
};
