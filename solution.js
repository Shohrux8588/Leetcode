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
  
  var modifyString = function(s) {
   	let letters = "abcdefghijklmnopqrstuvwxyz";
   	let index = 0;
   	let arr = s.split("");
   	arr = arr.map((e, i) => {
   		if(e!=="?"){
   			return e;
   		}
        if(index===25){
            index=0;
        }
        index++;
   		while(arr[i-1]===letters[index]||arr[i+1]===letters[index]){
   			index++;
            if(index===25){
                index = 0;
            }
   		}
   		
   		return letters[index];
   	})
   	return arr.join("");
};
const s1 = "??zs";
const s2 = "ubv?w";

console.log(modifyString(s1));
console.log(modifyString(s2));


var majorityElement = function(nums) {
    const obj = nums.reduce((acc, num)=>{
    	if(acc.hasOwnProperty(num)){
    		acc[num]++;
    	}else{
    		acc[num] = 1;
    	}
    	return acc;
    },{})
    const max = Math.max(...Object.values(obj));
    for(let [key, value] of Object.entries(obj)){
    	if(value === max){
    		return Number(key);
    	}
    }
};

const nums = [2, 2, 1, 1, 1, 2, 2];
console.log(majorityElement(nums));

var freqAlphabets = function(s) {
    const alphabet = ['','a', 'b', 'c','d', 'e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let result = '';
    for(let i = 0; i < s.length; i++){
    	if(s[i + 2] === '#'){
    		result+=alphabet[s[i]+s[i+1]];
    		i+=2;
    	}else{
    		result+=alphabet[s[i]];
    	}
    }
    return result;
};

const s1 = "10#11#12";
const s2 = "1326#";
freqAlphabets(s1);
freqAlphabets(s2);


var getNoZeroIntegers = function(n) {
    let i = 1;
    while(String(n-i).includes('0')||String(i).includes('0')){
    	i++;
    }
    console.log([i, n-i]);
    return [i, n-i];
};

getNoZeroIntegers(2);
getNoZeroIntegers(11);

var countBits = function(n) {
	let result = [];
	for(let i = 0; i<=n; i++){
		let arrOfBits = i.toString(2).match(/1/gm);
		result.push(arrOfBits ? arrOfBits.length : 0 );
	}    
	return result;
};

countBits(5);

var isSubsequence = function(s, t) {
	let startIndex = 0, hasChar = false;
	for(let i = 0; i < s.length; i++){
		hasChar = false;
		for(let j = startIndex; j < t.length; j++){
			if(s[i] === t[j]){
				startIndex = j + 1;
				j = t.length;
				hasChar = true;
			}
		}
		if(!hasChar){
			return false;
		}
	}
	return true;
};

const s = "aaaaaa";
const t = "bbaaaa";
console.log(isSubsequence(s, t));

var shortestToChar = function(s, c) {
	let indexes = [], res = [], min;
	const len = s.length;
    for(let i = 0; i<len; i++){
    	if(s[i]===c){
    		indexes.push(i);
    	}
    }

    for(let i = 0; i<len;i++){
    	min = Math.min.apply(null, indexes.map(index=>Math.abs(index-i)));
    	res.push(min);
    }

	return res;
};

const s = "loveleetcode";
const c = "e";
shortestToChar(s,c);


var countGoodSubstrings = function(s) {
	let counter = 0, substring;
	s = s.split('');
    for(let i = 0; i<s.length-2; i++){
    	substring = s.slice(i, i + 3);
    	if(substring.length===[...new Set(substring)].length){
    		counter++;
    	}
    }
    return counter;
};

const s = "xyzzaz";
countGoodSubstrings(s);

var findLengthOfLCIS = function(nums) {
	let longest = 0; counter = 0;
    for(let i = 0; i < nums.length; i++){
    	counter = 1;
    	for(let j = i; j < nums.length; j++){
    		if(nums[j] < nums[j+1]){
    			counter++;
    		} else {
    			j = nums.length;
    		}
            if(longest < counter){
                longest = counter;
            }
    	}
    }
    return longest;
};

const nums = [1,3,5,4,7];
const nums1 = [2,2,2,2,2];
const nums2 = [1,2,3,4];
const nums3 = [1,2];
console.log(findLengthOfLCIS(nums));
console.log(findLengthOfLCIS(nums1));
console.log(findLengthOfLCIS(nums2));
console.log(findLengthOfLCIS(nums3));

var divisorGame = function(n) {
	let turn = 0;
	while(n !== 1){
		turn++;
        n = n - 1;
	}
    return turn % 2 === 1;
};

console.log(divisorGame(2));

var checkRecord = function(s) {
    return numberOfAbsentDays(s) < 2 || hasNotConsecutiveLateThreeDays(s); 
};

function numberOfAbsentDays(s){
	return s.match(/A/gm) ? s.match(/A/gm).length : 0;
}

function hasNotConsecutiveLateThreeDays(s) {
	for(let i = 0; i < s.length; i++){
		if(s[i]==='L' && s[i + 1] === 'L' && s[i + 2] === 'L'){
			return false;
		}
	}
	return true;
}

const s1 = "PPALLP";
checkRecord(s1);

var rotateString = function(s, goal) {
    for(let i = 1; i < s.length; i++){
    	if(goal === s.slice(i) + s.slice(0, i)){
    		return true;
    	}
    }
    return false;
};

const s = "abcde";
const goal = "cdeab";

rotateString(s, goal);


var buddyStrings = function(s, goal) {
    if(s.length !== goal.length){
        return false;
    }
    if(s !== goal){
        let differenceCounter = 0, differences = [];
        for(let i = 0; i < s.length; i++){
            if(s[i] !== goal[i]){
                differenceCounter++;
                differences.push(s[i], goal[i]);
            }
        }
        if(differenceCounter === 2){
        	if(differences[0]===differences[3]&&differences[1]===differences[2]){
        		return true;
        	}
        	return false;
        }
        return false;
    }else{
    	const uniqueLetters = [...new Set(s)];
    	console.log(uniqueLetters)
    	return uniqueLetters.length !== s.length;
    }
};

const s = 'ab';
const goal = 'ab';
console.log(buddyStrings(s, goal));

var areAlmostEqual = function(s1, s2) {
	if(s1===s2){
		return true;
	}
	if(s1.length!==s2.length){
		return false;
	}
    let differenceCounter = 0, differences = [];
    for(let i = 0; i < s1.length; i++){
            if(s[i] !== goal[i]){
                differenceCounter++;
                differences.push(s1[i], s2[i]);
            }
        }
        if(differenceCounter === 2){
        	if(differences[0]===differences[3]&&differences[1]===differences[2]){
        		return true;
        	}
        	return false;
        }
        return false;
};


var lastStoneWeight = function (stones) {
  let sortedStones = stones.sort((a, b) => b - a),
    maxStone1,
    maxStone2;
  while (sortedStones.length > 1) {
    console.log(sortedStones);
    maxStone1 = sortedStones[0];
    maxStone2 = sortedStones[1];
    sortedStones = sortedStones.slice(2);
    if (maxStone1 > maxStone2) {
      sortedStones = [...sortedStones, maxStone1 - maxStone2].sort(
        (a, b) => b - a
      );
    }
  }
  return sortedStones.length > 0 ? sortedStones[0] : 0;
};


Minimum Number of Steps to Make Two Strings Anagram I
var minSteps = function(s, t) {
	let steps = 0;
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for(let char of s){
    	if(!frequencyCounter1.hasOwnProperty(char)){
    		frequencyCounter1[char] = 0;
    	}
    	frequencyCounter1[char]++;
    }

    for(let char of t){
    	if(!frequencyCounter2.hasOwnProperty(char)){
    		frequencyCounter2[char] = 0;
    	}
    	frequencyCounter2[char]++;
    }

    for(let key of Object.keys(frequencyCounter1)){
    	if(frequencyCounter2[key]<frequencyCounter1[key]){
    		steps += frequencyCounter1[key] - frequencyCounter2[key];
    	}else if(!frequencyCounter2[key]){
    		steps += frequencyCounter1[key];
    	}
    }
    return steps;
};

const s = "bab";
const t = "aba";

const s1 = "leetcode"
const t1 = "practice"

const s2 = 'anagram';
const t2 = 'mangaar';

minSteps(s, t);
minSteps(s1, t1);
minSteps(s2, t2);

Minimum Number of Steps to Make Two Strings Anagram II
var minSteps = function(s, t) {
	let stepsCounter = 0;
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for(let char of s){
    	if(!frequencyCounter1.hasOwnProperty(char)){
    		frequencyCounter1[char] = 0;
    	}
    	frequencyCounter1[char]++;
    }

    for(let char of t){
    	if(!frequencyCounter2.hasOwnProperty(char)){
    		frequencyCounter2[char] = 0;
    	}
    	frequencyCounter2[char]++;
    }

    for(let key of Object.keys(frequencyCounter1)){
    	if(!frequencyCounter2[key]){
    		stepsCounter += frequencyCounter1[key];
    	}
    	if(frequencyCounter2[key]<frequencyCounter1[key]){
    		stepsCounter += frequencyCounter1[key] - frequencyCounter2[key];
    	}
    }
    for(let key of Object.keys(frequencyCounter2)){
    	if(!frequencyCounter1[key]){
    		stepsCounter += frequencyCounter2[key];
    	}
    	if(frequencyCounter1[key]<frequencyCounter2[key]){
    		stepsCounter += frequencyCounter2[key] - frequencyCounter1[key];
    	}
    }
    console.log(stepsCounter);
    return stepsCounter;
};

const s = "leetcode";
const t = "coats";

const s1 = 'night';
const t1 = 'thing';

minSteps(s, t);
minSteps(s1, t1);

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

var decodeMessage = function (key, message) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz ";
  let substitution = "";
  let result = "";
  key = key.split(" ").join("");
  for (let letter of key) {
    if (!substitution.includes(letter)) {
      substitution += letter;
    }
  }
  for (let letter of message) {
    if (letter === " ") {
      result += " ";
    } else {
      result += alphabet[substitution.indexOf(letter)];
    }
  }
  return result;
};
const key1 = "the quick brown fox jumps over the lazy dog";
const message1 = "vkbs bs t suepuv";
decodeMessage(key1, message1);
1828. Queries on Number of Points Inside a Circle
var countPoints = function (points, queries) {
  const result = [];
  for (let query of queries) {
    let pointsCounter = 0;
    const queryX = query[0];
    const queryY = query[1];
    const queryR = query[2];
    for (let point of points) {
      const pointX = point[0];
      const pointY = point[1];
      if (
        Math.sqrt(
          Math.pow(queryX - pointX, 2) + Math.pow(queryY - pointY, 2)
        ) <= queryR
      ) {
        pointsCounter++;
      }
    }
    result.push(pointsCounter);
  }
  return result;
};
const points = [
  [1, 3],
  [3, 3],
  [5, 3],
  [2, 2],
];
const queries = [
  [2, 3, 1],
  [4, 3, 1],
  [1, 1, 2],
];
countPoints(points, queries);
2391. Minimum Amount of Time to Collect Garbage
var lastIndexOfGarbageType = function (garbage, type) {
  let lastIndex = 0;
  for (let i = garbage.length - 1; i >= 0; i--) {
    if (garbage[i].includes(type)) {
      lastIndex = i;
      break;
    }
  }
  return lastIndex;
};
var sumOfArray = function (array) {
  return array.reduce((a, b) => a + b, 0);
};
var garbageCollection = function (garbage, travel) {
  const metalLastIndex = lastIndexOfGarbageType(garbage, "M");
  const paperLastIndex = lastIndexOfGarbageType(garbage, "P");
  const glassLastIndex = lastIndexOfGarbageType(garbage, "G");
  const garbageCollectionTime = garbage.join("").length;
  const metalTravelTime = sumOfArray(travel.slice(0, metalLastIndex));
  const paperTravelTime = sumOfArray(travel.slice(0, paperLastIndex));
  const glassTravelTime = sumOfArray(travel.slice(0, glassLastIndex));
  return (
    garbageCollectionTime + metalTravelTime + paperTravelTime + glassTravelTime
  );
};
const garbage = ["MMM", "PGM", "GP"];
const travel = [3, 10];
const garbage1 = ["G", "P", "GP", "GG"];
const travel1 = [2, 4, 3];
// Sort People
var sortPeople = function (names, heights) {
  let namesAndHeights = [];
  for (let i = 0; i < names.length; i++) {
    namesAndHeights.push([names[i], heights[i]]);
  }
  const sortedNamesAndHeights = namesAndHeights.sort((a, b) => b[1] - a[1]);
  const sortedNames = sortedNamesAndHeights.map((arr) => arr[0]);
  return sortedNames;
};
const names = ["Mary", "John", "Emma"];
const heights = [180, 165, 170];
// 1323. Maximum 69 Number
var maximum69Number = function (num) {
  const arrayOfNums = String(num).split("");
  arrayOfNums.splice(arrayOfNums.indexOf("6"), 1, "9");
  return Number(arrayOfNums.join(""));
};
const num = 99999;
// 1324. Print Words Vertically
var printVertically = function (s) {
  let result = [];
  const arrayOfWords = s.split(" ");
  let longestWordLength = arrayOfWords.reduce((maxLength, word) => {
    if (maxLength < word.length) {
      maxLength = word.length;
    }
    return maxLength;
  }, 0);
  for (let i = 0; i < longestWordLength; i++) {
    let str = "";
    for (let word of arrayOfWords) {
      if (word[i]) {
        str += word[i];
      } else {
        str += " ";
      }
    }
    result.push(str);
  }
  return result.map((word) => word.replace(/~+$/, ""));
};
const s = "CONTEST IS COMING";
printVertically(s);
// 2367. Number of Arithmetic Triplets
var arithmeticTriplets = function (nums, diff) {
  let counter = 0;
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums.includes(nums[i] + diff) && nums.includes(nums[i] + 2 * diff)) {
      counter++;
    }
  }
  return counter;
};
const nums = [4, 5, 6, 7, 8, 9];
const diff = 2;
arithmeticTriplets(nums, diff);
// 2255. Count Prefixes of a Given String
var countPrefixes = function (words, s) {
  let counter = 0;
  for (let i = 0; i < words.length; i++) {
    const prefix = s.slice(0, words[i].length);
    if (words[i] === prefix) {
      counter++;
    }
  }
  return counter;
};
const words = ["a", "b", "c", "ab", "bc", "abc"];
const s = "abc";
countPrefixes(words, s);
2256. Minimum Average Difference
var minimumAverageDifference = function (nums) {
  if (nums.length === 1) {
    return 0;
  }
  var countSum = (arr) => arr.reduce((a, b) => a + b, 0);
  let index;
  let minAvgDiff = Infinity;
  let left = 0;
  let right = countSum(nums);
  let numsLength = nums.length;
  let avgDiff;
  for (let i = 0; i < nums.length - 1; i++) {
    left += nums[i];
    right -= nums[i];
    avgDiff = Math.abs(
      Math.floor(left / (i + 1)) - Math.floor(right / (numsLength - i - 1))
    );
    if (avgDiff < minAvgDiff) {
      minAvgDiff = avgDiff;
      index = i;
    }
  }
  if (Math.floor(countSum(nums) / nums.length) < minAvgDiff) {
    minAvgDiff = Math.floor(countSum(nums) / nums.length);
    index = nums.length - 1;
  }
  return index;
};
const nums = [0, 0, 0, 0, 0];
minimumAverageDifference(nums);
// 2079. Watering Plants
var wateringPlants = function (plants, capacity) {
  let steps = 0;
  let currentCapacity = capacity;
  for (let i = 0; i < plants.length; i++) {
    if (currentCapacity < plants[i]) {
      currentCapacity = capacity;
      steps += i * 2;
    }
    currentCapacity -= plants[i];
    steps++;
  }
  return steps;
};
const plants = [2, 2, 3, 3];
const capacity = 5;
const plants1 = [1, 1, 1, 4, 2, 3];
const capacity1 = 4;
const plants2 = [7,7,7,7,7,7,7];
const capacity2 = 8
wateringPlants(plants2, capacity2);
1991. Find the Middle Index in Array
var findMiddleIndex = function (nums) {
  let left = 0;
  right = nums.reduce((a, b) => a + b, 0);
  for (let i = 0; i < nums.length; i++) {
    left += nums[i - 1] || 0;
    right -= nums[i];
    if (left === right) {
      return i;
    }
  }
  return -1;
};
const nums = [2, 3, -1, 8, 4];
findMiddleIndex(nums);
// 1544. Make The String Great
var makeGood = function (s) {};
const s = "leEeetcode";
const s1 = "abBAcC";
const s2 = "MqWWvyRtzZTrYVwwQmUjQOoOoqJu";
const s3 = "mV";
makeGood(s2);
2053. Kth Distinct String in an Array
var kthDistinct = function (arr, k) {
  let distinctElements = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
      distinctElements.push(arr[i]);
    }
  }
  if (distinctElements[k]) {
    return distinctElements[k];
  }
  return "";
};
const arr1 = ["d", "b", "c", "b", "c", "a"];
const k1 = 2;
(kthDistinct(arr1, k1));
Unique Morse Code Words
var uniqueMorseRepresentations = function (words) {
  const letterToRepresentation = {
    a: ".-",
    b: "-...",
    c: "-.-.",
    d: "-..",
    e: ".",
    f: "..-.",
    g: "--.",
    h: "....",
    i: "..",
    j: ".---",
    k: "-.-",
    l: ".-..",
    m: "--",
    n: "-.",
    o: "---",
    p: ".--.",
    q: "--.-",
    r: ".-.",
    s: "...",
    t: "-",
    u: "..-",
    v: "...-",
    w: ".--",
    x: "-..-",
    y: "-.--",
    z: "--..",
  };
  let result = [];
  let representation;
  for (let word of words) {
    representation = "";
    for (let i of word) {
      representation += letterToRepresentation[i];
    }
    result.push(representation);
  }
  const uniqueRepresentation = [...new Set(result)];
  return uniqueRepresentation.length;
};
const words1 = ["gin", "zen", "gig", "msg"];
uniqueMorseRepresentations(words1);
2176. Count Equal and Divisible Pairs in an Array
var countPairs = function (nums, k) {
  let counterOfPairs = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        if ((i * j) % k === 0) {
          counterOfPairs++;
        }
      }
    }
  }
  return counterOfPairs;
};
const nums = [3, 1, 2, 2, 2, 1, 3];
const k = 2;
countPairs(nums, k);
374. Guess Number Higher or Lower
var guessNumber = function (n) {
  let start = 1;
  let end = n;
  let mid = 0;
  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    if (guess(mid) == 0) {
      return mid;
    } else if (guess(mid) == -1) {
      start = mid + 1;
    } else if (guess(mid) == 1) {
      end = mid - 1;
    }
  }
  return mid;
};
guessNumber(1);
binary search
function binarySearch(array, value) {
  let start = 0;
  let end = array.length;
  while (start > end) {
    middle = Math.floor((start + end) / 2);
    if (array[middle] === value) {
      return middle;
    } else if (array[middle] > value) {
      end = middle - 1;
    } else if (array[middle] < value) {
      start = middle + 1;
    }
  }
  return -1;
}
let array1 = [1, 2, 3, 4, 5, 6, 7];
let value1 = 8;
// ComputeArea
var computeArea = function(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {
    const areaRectangle1 = Math.abs((ax1 - ax2) * (ay1 - ay2));
    const areaRectangle2 = Math.abs((bx1 - bx2) * (by1 - by2));
    const sumOfTwoAreas = areaRectangle1 + areaRectangle2;
    let combinedArea = 0;
    var sumCombinedArea = function(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {
        const cx1 = ax1 > bx1 ? ax1 : bx1;
        const cy1 = ay1 > by1 ? ay1 : by1;
        const cx2 = ax2 > bx2 ? bx2 : ax2;
        const cy2 = ay2 > by2 ? by2 : ay2;
        return Math.abs((cx1 - cx2) * (cy1 - cy2));
    }
    if ((ax1 <= bx1 && ax2 >= bx1) || (ax1 <= bx2 && ax2 >= bx2)) {
        if ((ay1 <= by1 && ay2 >= by1) || (ay1 <= by2 && ay2 >= by2)) {
            combinedArea = sumCombinedArea(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2);
        } else if ((by1 <= ay1 && by2 >= ay1) || (by1 <= ay2 && by2 >= ay2)) {
            combinedArea = sumCombinedArea(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2);
        }
    } else if ((bx1 <= ax1 && bx2 >= ax1) || (bx1 <= ax2 && bx2 >= ax2)) {
        if ((ay1 <= by1 && ay2 >= by1) || (ay1 <= by2 && ay2 >= by2)) {
            combinedArea = sumCombinedArea(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2);
        } else if ((by1 <= ay1 && by2 >= ay1) || (by1 <= ay2 && by2 >= ay2)) {
            combinedArea = sumCombinedArea(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2);
        }
    }
    return sumOfTwoAreas - combinedArea;
};
const ax1 = -2;
const ay1 = -2;
const ax2 = 2;
const ay2 = 2;
const bx1 = 3;
const by1 = 3;
const bx2 = 4;
const by2 = 4;
// ugly number
var isUgly = function(n) {
    if (n === 0) {
        return false;
    }
    while (n % 2 === 0) {
        n /= 2
    }
    while (n % 3 === 0) {
        n /= 3;
    }
    while (n % 5 === 0) {
        n /= 5;
    }
    return n === 1;
};
// 1725. Number Of Rectangles That Can Form The Largest Square
var countGoodRectangles = function(rectangles) {
    const square = rectangles.map(r => r[0] > r[1] ? r[1] : r[0]);
    const sortedSquare = square.sort((a, b) => b - a);
    return sortedSquare.filter(l => l === sortedSquare[0]).length;
};
const rectangles = [
    [5, 8],
    [3, 9],
    [5, 12],
    [16, 5]
];
countGoodRectangles(rectangles);
1742. Maximum Number of Balls in a Box
var countBalls = function(lowLimit, highLimit) {
    var sumOfDigits = function(number) {
        let sum = 0;
        while (number > 0) {
            sum += number % 10;
            number = Math.floor(number / 10)
        }
        return sum;
    }
    let obj = {};
    for (let i = lowLimit; i <= highLimit; i++) {
        let key = sumOfDigits(i);
        if (obj.hasOwnProperty(key)) {
            obj[key]++;
        } else {
            obj[key] = 1;
        }
    }
    let balls = Object.values(obj).sort((a, b) => b - a);
    return balls[0]
};
countBalls(1, 10);
var firstPalindrome = function(words) {
    let palindrome = '';
    for (let word of words) {
        let reversed = word.split("").reverse().join("");
        if (word === reversed) {
            palindrome = word
            break;
        }
    }
    return palindrome;
};
const words = ["abc", "car", "ada", "racecar", "cool"];
firstPalindrome(words);
var addSpaces = function(s, spaces) {
    let result = '';
    let index = 0;
    for (let i = 0; i < s.length; i++) {
        if (i === spaces[index]) {
            result += " "
            index++;
        }
        result += s[i]
    }
    return result;
};
const s = "icodeinpython",
    spaces = [1, 5, 7, 9];
addSpaces(s, spaces);
// 2085. Count Common Words With One Occurrence
var countWords = function(words1, words2) {
    let commonUniqueWords = [];
    for (let word of words1) {
        if (words1.indexOf(word) === words1.lastIndexOf(word)) {
            if (words2.indexOf(word) >= 0 && words2.indexOf(word) === words2.lastIndexOf(word)) {
                commonUniqueWords.push(word);
            }
        }
    }
    return commonUniqueWords;
};
const words1 = ["leetcode", "is", "amazing", "as", "is"];
const words2 = ["amazing", "leetcode", "is"];
countWords(words1, words2);
// 1252. Cells with Odd Values in a Matrix
var oddCells = function(m, n, indices) {
    let counter = 0;
    let arr = [];
    for (let i = 0; i < m; i++) {
        const rows = new Array(n).fill(0);
        arr.push(rows);
    }
    for (let j = 0; j < indices.length; j++) {
        for (let i = 0; i < n; i++) {
            arr[indices[j][0]][i]++;
        }
        for (let i = 0; i < m; i++) {
            arr[i][indices[j][1]]++;
        }
    }
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] % 2 === 1) {
                counter++;
            }
        }
    }
    return counter;
};
const m = 2,
    n = 3,
    indices = [
        [0, 1],
        [1, 1]
    ];
oddCells(m, n, indices);
2154. Keep Multiplying Found Values by Two
var findFinalValue = function(nums, original) {
    while (nums.includes(original)) {
        original *= 2;
    }
    return original;
};
const nums = [5, 3, 6, 1, 12],
    original = 3;
findFinalValue(nums, original);
Sort by bits
var sortByBits = function(arr) {
    let pairs = [];
    for (let item of arr) {
        let numberOfBits = 0;
        if (item !== 0) {
            numberOfBits = item.toString(2).match(/1/gm).length;
        }
        pairs.push([item, numberOfBits]);
    }
    const sortedPairs = pairs.sort((a, b) => {
        if (a[1] !== b[1]) {
            return a[1] - b[1];
        } else {
            return a[0] - b[0]
        }
    })
    return sortedPairs.map(i => i[0]);
};
const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
sortByBits(arr);
// 2373. Largest Local Values in a Matrix
var largestLocal = function(grid) {
    let arr = [];
    let result = [];
    for (let j = 0; j < grid.length - 2; j++) {
        result.push([]);
        for (let i = 0; i < grid[j].length - 2; i++) {
            result[j][i] = Math.max(...grid[j].slice(i, i + 3).concat(grid[j + 1].slice(i, i + 3)).concat(grid[j + 2].slice(i, i + 3)))
        }
    }
    return result;
};
const grid = [
    [9, 9, 8, 1],
    [5, 6, 2, 6],
    [8, 2, 6, 4],
    [6, 2, 2, 2]
];
const grid1 = [[1,1,1,1,1],[1,1,1,1,1],[1,1,2,1,1],[1,1,1,1,1],[1,1,1,1,1]]
largestLocal(grid1);
922. Sort Array By Parity II
var sortArrayByParityII = function(nums) {
    const evenNums = nums.filter(num => num % 2 === 0);
    const oddNums = nums.filter(num => num % 2 === 1);
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        if (i % 2 === 0) {
            const evenNum = evenNums.pop();
            result.push(evenNum);
        } else {
            const oddNum = oddNums.pop();
            result.push(oddNum);
        }
    }
    console.log(result);
    return result;
};
const nums = [4, 2, 5, 7];
sortArrayByParityII(nums);
2225. Find Players With Zero or One Losses
var findWinners = function(matches) {
    const resultOfMatches = {};
    let answer = [];
    let winners = [];
    let losers = [];
    for (let match of matches) {
        if (resultOfMatches.hasOwnProperty(match[0])) {
            resultOfMatches[match[0]].wins = resultOfMatches[match[0]].wins + 1;
        } else {
            resultOfMatches[match[0]] = {
                wins: 1,
                lost: 0
            };
        }
        if (resultOfMatches.hasOwnProperty(match[1])) {
            resultOfMatches[match[1]].lost = resultOfMatches[match[1]].lost + 1;
        } else {
            resultOfMatches[match[1]] = {
                wins: 0,
                lost: 1
            }
        }
    }
    for (let [key, value] of Object.entries(resultOfMatches)) {
        if (value.lost === 0) {
            winners.push(key);
        } else if (value.lost === 1) {
            losers.push(key);
        }
    }
    winners = winners.map(Number);
    losers = losers.map(Number)
    return [winners, losers];
};
const matches = [
    [1, 3],
    [2, 3],
    [3, 6],
    [5, 6],
    [5, 7],
    [4, 5],
    [4, 8],
    [4, 9],
    [10, 4],
    [10, 9]
];
const matches1 = [
    [2, 3],
    [1, 3],
    [5, 4],
    [6, 4]
]
findWinners(matches1);
2341. Maximum Number of Pairs in Array
var numberOfPairs = function (nums) {
  let counter = 0;
  let leftoverCounter = 0;
  const uniques = [...new Set(nums)];
  for (let unique of uniques) {
    const arrOfNum = nums.filter((n) => n === unique);
    counter += Math.floor(arrOfNum.length / 2);
    if (arrOfNum.length % 2 === 1) {
      leftoverCounter++;
    }
  }
  return [counter, leftoverCounter];
};
const nums = [1, 3, 2, 1, 3, 2, 2];
numberOfPairs(nums);
// 1207. Unique Number of Occurrences
var uniqueOccurrences = function(arr) {
    let occurrenceCounter = {};
    for (let num of arr) {
        if (occurrenceCounter.hasOwnProperty(num)) {
            occurrenceCounter[num]++;
        } else {
            occurrenceCounter[num] = 1;
        }
    }
    const numberOfOccurrences = [...Object.values(occurrenceCounter)];
    return numberOfOccurrences.length === [...new Set(numberOfOccurrences)].length;
};
const arr = [1, 2, 2, 1, 1, 3];
uniqueOccurrences(arr);
// 1704. Determine if String Halves Are Alike
var halvesAreAlike = function (s) {
  let firstHalfVowels = s.slice(0, s.length / 2).match(/[aeiou]/gi) || [];
  let secondHalfVowels = s.slice(s.length / 2).match(/[aeiou]/gi) || [];
  return firstHalfVowels.length === secondHalfVowels.length;
};

const s = "bsok";
halvesAreAlike(s);

// 1657. Determine if Two Strings Are Close
var closeStrings = function (word1, word2) {
  if (word1.length !== word2.length) {
    return false;
  }
  for (let letter of word1) {
    if (!word2.includes(letter)) {
      return false;
    }
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let letter of word1) {
    if (frequencyCounter1.hasOwnProperty(letter)) {
      frequencyCounter1[letter]++;
    } else {
      frequencyCounter1[letter] = 1;
    }
  }
  for (let letter of word2) {
    if (frequencyCounter2.hasOwnProperty(letter)) {
      frequencyCounter2[letter]++;
    } else {
      frequencyCounter2[letter] = 1;
    }
  }
  const word1Frequencies = Object.values(frequencyCounter1).sort(
    (a, b) => a - b
  );
  const word2Frequencies = Object.values(frequencyCounter2).sort(
    (a, b) => a - b
  );
  for (let i = 0; i < word1Frequencies.length; i++) {
    if (word1Frequencies[i] !== word2Frequencies[i]) {
      return false;
    }
  }
  return true;
};

const word1 = "cabbba",
  word2 = "abbccc";
closeStrings(word1, word2);

// 451. Sort Characters By Frequency
var frequencySort = function (s) {
  let answer = "";
  var pairsIntoString = function (letter, frequency) {
    let answer = "";
    for (let i = 0; i < frequency; i++) {
      answer += letter;
    }
    return answer;
  };
  let frequencyCounter = {};
  for (let letter of s) {
    if (frequencyCounter.hasOwnProperty(letter)) {
      frequencyCounter[letter]++;
    } else {
      frequencyCounter[letter] = 1;
    }
  }
  const sortedObjectEntries = Object.entries(frequencyCounter).sort(
    (a, b) => b[1] - a[1]
  );
  for (let pair of sortedObjectEntries) {
    answer += pairsIntoString(...pair);
  }
  return answer;
};
frequencySort("tree");
// 2278. Percentage of Letter in String
var percentageLetter = function (s, letter) {
  const pattern = new RegExp(letter, "gm");
  let counter = (s.match(pattern) && s.match(pattern).length) || 0;
  return Math.floor((counter / s.length) * 100);
};
console.log(percentageLetter("foobar", "o"));
// 2404. Most Frequent Even Element
var mostFrequentEven = function (nums) {
  const evenNums = nums.filter((num) => num % 2 === 0);
  if (evenNums.length === 0) {
    return -1;
  }
  let frequencyCounter = {};
  evenNums.forEach((num) => {
    if (!frequencyCounter.hasOwnProperty(num)) {
      frequencyCounter[num] = 0;
    }
    frequencyCounter[num]++;
  });
  const sortedEvenNumsFrequency = Object.entries(frequencyCounter).sort(
    (a, b) => {
      if (a[1] === b[1]) {
        return a[0] - b[0];
      } else {
        return b[1] - a[1];
      }
    }
  );
  return sortedEvenNumsFrequency;
};
mostFrequentEven([0, 1, 2, 2, 4, 4, 1]);
// 229. Majority Element II
var majorityElement = function (nums) {
  const limit = Math.floor(nums.length / 3);
  let frequencyCounter = {};
  nums.forEach((num) => {
    if (frequencyCounter.hasOwnProperty(num)) {
      frequencyCounter[num]++;
    } else {
      frequencyCounter[num] = 1;
    }
  });
  const pairs = Object.entries(frequencyCounter).filter(
    (pair) => pair[1] > limit
  );
  return pairs.map((pair) => Number(pair[0]));
};
majorityElement([1, 2]);
// 1385. Find the Distance Value Between Two Arrays
var findTheDistanceValue = function (arr1, arr2, d) {
  let counter = 0;
  for (let num1 of arr1) {
    let isDistanceValue;
    for (let num2 of arr2) {
      if (Math.abs(num1 - num2) <= d) {
        isDistanceValue = false;
        break;
      } else {
        isDistanceValue = true;
      }
    }
    if (isDistanceValue) {
      counter++;
    }
  }
  return counter;
};
const arr1 = [4, 5, 8],
  arr2 = [10, 9, 1, 8],
  d = 2;
const arr11 = [2, 1, 100, 3],
  arr21 = [-5, -2, 10, -3, 7],
  d1 = 6;
findTheDistanceValue(arr1, arr2, d);
findTheDistanceValue(arr11, arr21, d1);
// 328. Odd Even Linked List
var oddEvenList = function (head) {
  if (!head || !head.next || !head.next.next) {
    return head;
  }
  let odds = [],
    evens = [],
    counter = 1;
  while (!!head) {
    if (counter % 2 === 1) {
      odds.push(head.val);
    } else {
      evens.push(head.val);
    }
    counter++;
    head = head.next;
  }
  const arr = [...odds, ...evens];
  let answer = null;
  for (let i = arr.length - 1; i >= 0; i--) {
    answer = {
      val: arr[i],
      next: answer,
    };
  }
  return answer;
};
console.log(
  oddEvenList({
    val: 0,
    next: {
      val: 1,
      next: {
        val: 2,
        next: null,
      },
    },
  })
);
// 725. Split Linked List in Parts
var splitListToParts = function (head, k) {
  let current = head;
  let arr = [];
  while (current) {
    arr.push(current.val);
    current = current.next;
  }
  const parts = new Array(k);
  parts.fill(Math.ceil(arr.length / k));
  if (arr.length % k !== 0) {
    let index = k - 1;
    for (let i = 0; i < k - (arr.length % k); i++) {
      parts[index]--;
      index--;
    }
  }
  let answer = [];
  let start = 0;
  for (let i = 0; i < parts.length; i++) {
    let sliceOfArray = arr.slice(start, start + parts[i]);
    let obj = null;
    for (let j = sliceOfArray.length - 1; j >= 0; j--) {
      obj = { val: sliceOfArray[j], next: obj };
    }
    answer.push(obj);
    start += parts[i];
  }
  return answer;
};
splitListToParts(
  {
    val: 1,
    next: {
      val: 2,
      next: {
        val: 3,
        next: {
          val: 4,
          next: {
            val: 5,
            next: null,
          },
        },
      },
    },
  },
  6
);
// 61. Rotate List
var rotateRight = function (head, k) {
  if (!head || !head.next) {
    return head;
  }
  let answer = null;
  let arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  k = k % arr.length;
  while (k > 0) {
    const char = arr.pop();
    arr.unshift(char);
    k--;
  }
  for (let i = arr.length - 1; i >= 0; i--) {
    answer = { val: arr[i], next: answer };
  }
  return answer;
};
const head = {
    val: 1,
    next: {
      val: 2,
      next: {
        val: 3,
        next: {
          val: 4,
          next: {
            val: 5,
            next: null,
          },
        },
      },
    },
  },
  k = 2;
rotateRight(head, k);
// 938. Range Sum of BST
var rangeSumBST = function (root, low, high) {
  let sum = 0;
  if (root === null) {
      return 0;
  }
  if (root.val >= low && root.val <= high) {
      sum += root.val;
  }
  return sum + rangeSumBST(root.left, low, high) + rangeSumBST(root.right, low, high);
};
const root = {
  val: 10,
  left: {
    val: 5,
    left: { val: 3, left: null, right: null },
    right: { val: 7, left: null, right: null },
  },
  right: { val: 15, right: { val: 18, right: null, left: null }, left: null },
};
rangeSumBST(root, 7, 15);
// 872. Leaf-Similar Trees
var leafSimilar = function (root1, root2) {
  var leafValueSequence = function (root) {
    let sequence = [];
    if (!root) {
      return [];
    }
    if (!root.left && !root.right) {
      return [root.val];
    }
    return sequence
      .concat(leafValueSequence(root.left))
      .concat(leafValueSequence(root.right));
  };
  const sequence1 = leafValueSequence(root1);
  const sequence2 = leafValueSequence(root2);
  if (sequence1.length !== sequence2.length) {
    return false;
  }
  return sequence1.every((num, i) => num === sequence2[i]);
};
// 23. Merge k Sorted Lists
var mergeKLists = function (lists) {
  if (lists.length === 0) {
    return null;
  }
  var listToArray = function (list) {
    if (!list) {
      return [];
    }
    return [list.val].concat(listToArray(list.next));
  };
  let arr = [];
  for (let list of lists) {
    arr.push(...listToArray(list));
  }
  arr = arr.sort((a, b) => b - a);
  let answer = null;
  for (let item of arr) {
    answer = { val: item, next: answer };
  }
  return answer;
};
var findMedianSortedArrays = function (nums1, nums2) {
  const array = [...nums1, ...nums2].sort((a, b) => a + b);
  const lengthOfArray = array.length;
  if (array.length % 2 === 0) {
    return (array[lengthOfArray / 2] + array[lengthOfArray / 2 - 1]) / 2;
  } else {
    return array[(lengthOfArray - 1) / 2];
  }
};
findMedianSortedArrays([1, 3], [2]);
// 70. Climbing Stairs
var climbStairs = function (n) {
  let nums = [0, 1, 2, 3];
  while (n > nums.length - 1) {
      const lengthOfNums = nums.length;
      nums.push(nums[lengthOfNums - 2] + nums[lengthOfNums - 1]);
  }
  return nums[n];
};
// 30. Substring with Concatenation of All Words
var findSubstring = function (s, words) {
  const str = words.join("");
  const lengthOfString = str.length;
  let answer = [];
  words = words.sort();
  var splitWordToSubstring = function (word, len) {
    let arr = [];
    for (let i = 0; i <= word.length - len; i += len) {
      arr.push(word.substring(i, i + len));
    }
    return arr;
  };
  var isConcatenation = function (substring, words) {
    const arrayOfSubstring = splitWordToSubstring(
      substring,
      words[0].length
    ).sort();
    return words.every((word, index) => word === arrayOfSubstring[index]);
  };
  for (let i = 0; i <= s.length - lengthOfString; i++) {
    const substring = s.substring(i, i + lengthOfString);
    if (isConcatenation(substring, words)) {
      answer.push(i);
    }
  }
  return answer;
};
findSubstring("barfoothefoobarman", ["foo", "bar"]);
// 198. House Robber
var rob = function (nums) {
  let rob1 = 0,
    rob2 = 0;
  for (let num of nums) {
    const temp = Math.max(num + rob1, rob2);
    rob1 = rob2;
    rob2 = temp;
  }
  return rob2;
};
rob([1, 2, 3, 1]);
// 1143. Longest Common Subsequence
var longestCommonSubsequence = function (text1, text2) {
  const table = Array.from({ length: text1.length + 1 }, () =>
    new Array(text2.length + 1).fill("")
  );
  for (let i = 1; i < table.length; i++) {
    for (let j = 1; j < table[i].length; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        table[i][j] = table[i - 1][j - 1] + text1[i - 1];
      } else {
        const aboveChar = table[i - 1][j];
        const leftChar = table[i][j - 1];
        table[i][j] = aboveChar.length > leftChar.length ? aboveChar : leftChar;
      }
    }
  }
  return table[table.length - 1][table[0].length - 1].length;
};
longestCommonSubsequence("abcba", "abcbcba");
// 206. Reverse Linked List
var reverseList = function (head) {
    let answer = null;
    while (head) {
        answer = { val: head.val, next: answer };
        head = head.next;
    }
    return answer;
};
// 739. Daily Temperatures
var dailyTemperatures = function (temperatures) {
  let answer = new Array(temperatures.length).fill(0);
  let stack = [];
  for (let i = 0; i < temperatures.length; i++) {
    if (stack.length > 0) {
      let lastItem = stack[stack.length - 1];
      while (lastItem && lastItem[0] < temperatures[i]) {
        answer[lastItem[1]] = i - lastItem[1];
        stack.pop();
        lastItem = stack[stack.length - 1];
      }
    }
    stack.push([temperatures[i], i]);
  }
  return answer;
};
dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]);
// 2500. Delete Greatest Value in Each Row
var deleteGreatestValue = function (grid) {
  let sum = 0;
  let nums = [];
  for (let row of grid) {
    const sortedRow = row.sort((a, b) => a - b);
    nums.push(sortedRow);
  }
  for (let i = 0; i < grid[0].length; i++) {
    let arr = [];
    for (let j = 0; j < grid.length; j++) {
      arr.push(nums[j][i]);
    }
    sum += Math.max(...arr);
  }
  return sum;
};
const grid = [
  [1, 2, 4],
  [3, 3, 1],
];
deleteGreatestValue(grid);
// 2501. Longest Square Streak in an Array
var longestSquareStreak = function (nums) {
  const sortedNums = nums.sort((a, b) => a - b);
  let squareStreak = [];
  let streaks = [];
  for (let num of nums) {
    let current = num;
    squareStreak.push(current);
    while (nums.includes(current * current)) {
      current = current * current;
      squareStreak.push(current);
    }
    console.log(squareStreak);
    if (squareStreak.length > 1) {
      streaks.push(squareStreak);
    }
    squareStreak = [];
  }
  if (streaks.length < 1) {
    return -1;
  }
  streaks = streaks.sort((a, b) => b.length - a.length);
  return streaks[0];
};
const nums = [4, 3, 6, 16, 8, 2];
longestSquareStreak(nums);
// 841. Keys and Rooms
var canVisitAllRooms = function (rooms) {
  let doors = new Array(rooms.length).fill(false);
  doors[0] = true;
  var open = function (keys) {
    for (let key of keys) {
      if (!doors[key]) {
        doors[key] = true;
        open(rooms[key]);
      }
    }
  };
  open(rooms[0]);
  return doors.every((door) => door);
};
canVisitAllRooms([[1], [2], [3], []]);
// 2389. Longest Subsequence With Limited Sum
var answerQueries = function (nums, queries) {
  const sortedNums = nums.sort((a, b) => a - b);
  let answer = [];
  for (let query of queries) {
    let sum = 0;
    let i = 0;
    while (sum <= query) {
      sum += sortedNums[i];
      i++;
    }
    answer.push(i - 1);
  }
  return answer;
};
answerQueries([2, 3, 4, 5], [1]);
// 2194. Cells in a Range on an Excel Sheet
var cellsInRange = function(s) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const startCol = alphabet.indexOf(s[0]);
    const startRow = s[1];
    const endCol = alphabet.indexOf(s[3]);
    const endRow = s[4];
    const answer = [];
    for(var i = startCol; i<=endCol; i++){
      for(var k = startRow; k<=endRow; k++){
        answer.push(i+k);
      }
    }
    return answer;
};
// cellsInRange('K1:L2');
// cellsInRange('A1:F1');
// 55. Jump Game
var canJump = function(nums) {
    if (nums.every(num => num >= 1)) {
        return true;
    }
    if (nums.length === 1 && nums[0] === 0) {
        return true;
    }
    if (nums.every(num => num === 0)) {
        return false;
    }
    let indexOfZeros = [];
    nums.forEach((num, index) => {
        if (num === 0) {
            indexOfZeros.push(index);
        }
    });
    for (let i = 0; i < indexOfZeros.length; i++) {
        let can = false;
        for (let j = 0; j < indexOfZeros[i]; j++) {
            if (nums[j] + j > indexOfZeros[i]) {
                can = true;
                break;
            }
        }
        if (indexOfZeros[i] === nums.length - 1) {
            can = true;
        }
        if (!can) {
            return false;
        }
    }
    return true;
}
const nums1 = [2, 3, 1, 1, 4];
const nums2 = [3, 2, 1, 0, 4];
canJump(nums2);
// 704. Binary Search
var search = function(nums, target) {
    let start = 0;
    end = nums.length, middle = Math.floor((start + end) / 2);
    console.log(start, end, middle);
    while (start <= end) {
        middle = Math.floor((start + end) / 2);
        console.log(middle);
        if (target === nums[middle]) {
            return middle;
        } else if (target > nums[middle]) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }
    return -1;
}
const nums = [-1, 0, 3, 5, 9, 12],
    target = -6;
search(nums, target);
// 2279. Maximum Bags With Full Capacity of Rocks
var maximumBags = function(capacity, rocks, additionalRocks) {
    let arr = [];
    for (let i = 0; i < capacity.length; i++) {
        arr.push(capacity[i] - rocks[i]);
    }
    const sortedArr = arr.sort((a, b) => a - b);
    for (let i = 0; i < sortedArr.length; i++) {
        if (additionalRocks >= sortedArr[i]) {
            additionalRocks -= sortedArr[i];
            sortedArr[i] = 0;
        }
    }
    return sortedArr.filter(n => n === 0).length;
};
const capacity = [2, 3, 4, 5],
    rocks = [1, 2, 4, 4],
    additionalRocks = 2;
maximumBags(capacity, rocks, additionalRocks);
// 2. Add Two Numbers
var addTwoNumbers = function (l1, l2) {
    var listToArray = function (l) {
        let arr = [];
        while (l) {
            arr.push(l.val);
            l = l.next;
        }
        return arr;
    }
    let arr1 = listToArray(l1).reverse();
    let arr2 = listToArray(l2).reverse();
    const sum = String(BigInt(arr1.join("")) + BigInt(arr2.join("")));
    let answer = null;
    for (let i = 0; i < sum.length; i++) {
        answer = { val: Number(sum[i]), next: answer };
    }
    return answer;
};
// 1800. Maximum Ascending Subarray Sum
var maxAscendingSum = function(nums) {
    let sum = nums[0];
    let maxSum = -Infinity;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] < nums[i]) {
            sum += nums[i];
        } else {
            if (maxSum < sum) {
                maxSum = sum;
            }
            sum = nums[i];
        }
    }
    if (sum > maxSum) {
        maxSum = sum;
    }
    return maxSum;
}
maxAscendingSum([10, 20, 30, 5, 10, 50]);
// 2485. Find the Pivot Integer
var pivotInteger = function(n) {
    let left = 1;
    let right = 0;
    for (let i = 1; i <= n; i++) {
        right += i;
    }
    let i = 1;
    while (right > 0) {
        if (left === right) {
            return i;
        }
        right -= i;
        i++;
        left += i;
    }
    return -1;
};
console.log(pivotInteger(1));
// 1002. Find Commmon Characters
var evaluateTree = function (root) {
    if (root.val === 0 || root.val === 1) {
        return root.val;
    } else if (root.val === 2) {
        return evaluateTree(root.left) || evaluateTree(root.right);
    } else if (root.val === 3) {
        return evaluateTree(root.left) && evaluateTree(root.right);
    }
};
const words = ["cool", "lock", "cook"];
commonChars(words);
// 290. Word Pattern 
var wordPattern = function(pattern, s) {
    const words = s.split(" ");
    if (words.length != pattern.split('').length) {
        return false;
    }
    let obj = {};
    for (let i = 0; i < pattern.length; i++) {
        if (obj.hasOwnProperty(pattern[i])) {
            if (obj[pattern[i]] != words[i]) {
                return false;
            }
        } else {
            obj[pattern[i]] = words[i];
        }
    }
    let obj1 = {};
    for (let i = 0; i < words.length; i++) {
        if (obj1.hasOwnProperty(words[i])) {
            if (obj1[words[i]] != pattern[i]) {
                return false;
            }
        } else {
            obj1[words[i]] = pattern[i];
        }
    }
    return true;
}
const pattern = "abba",
    s = "cat cat cat cat";
console.log(wordPattern(pattern, s));
// 1669. Merge In Between Linked Lists
var mergeInBetween = function (list1, a, b, list2) {
    var listToArray = function (list) {
        let arr = [];
        while (list) {
            arr.push(list.val);
            list = list.next;
        }
        return arr;
    }
    const array1 = listToArray(list1);
    const array2 = listToArray(list2);
    array1.splice(a, b - a + 1, ...array2);
    let answer = null;
    for (let i = array1.length - 1; i >= 0; i--) {
        answer = { val: array1[i], next: answer };
    }
    return answer;
};
// 92. Reverse Linked List II
var reverseBetween = function (head, left, right) {
    if (!head.next) {
        return head;
    }
    let array = [];
    while (head) {
        array.push(head.val);
        head = head.next;
    }
    const reversedSlice = array.slice(left - 1, right).reverse();
    array.splice(left - 1, right - left + 1, ...reversedSlice);
    let answer = null;
    for (let i = array.length - 1; i >= 0; i--) {
        answer = { val: array[i], next: answer };
    }
    return answer;
};
// 520. Detect Capital
var detectCapitalUse = function (word) {
    const onlyCapitalLetters = word.toUpperCase();
    const onlyLowerCaseLetters = word.toLowerCase();
    const onlyFirstLetterCapital = word[0].toUpperCase() + word.substring(1).toLowerCase();
    if (onlyCapitalLetters === word) {
        return true;
    } else if (onlyLowerCaseLetters === word) {
        return true;
    } else if (onlyFirstLetterCapital === word) {
        return true;
    } else {
        return false;
    }
};
// 1685. Sum of Absolute  Differencies in a Sorted Array
var getSumAbsoluteDifferences = function(nums) {
    let leftSide = nums[0];
    let rightSide = nums.reduce((a, b) => a + b, 0) - leftSide;
    let answer = [];
    let len = nums.length;
    answer.push(rightSide - nums[0] * (len - 1));
    let leftSum, rightSum;
    for (let i = 1; i < nums.length; i++) {
        leftSum = i * nums[i] - leftSide
        rightSum = rightSide - (len - i) * nums[i];
        answer.push(leftSum + rightSum);
        rightSide -= nums[i];
        leftSide += nums[i];
    }
    return answer;
};
const nums = [1, 4, 6, 8, 10];
getSumAbsoluteDifferences(nums);
// 944. Delete Columns to Make Sorted
var minDeletionSize = function(strs) {
    let counter = 0;
    for (let i = 0; i < strs[0].length; i++) {
        for (let j = 0; j < strs.length - 1; j++) {
            if (strs[j][i] > strs[j + 1][i]) {
                counter++;
                break;
            }
        }
    }
    return counter;
}
const strs = ["cba", "daf", "ghi"];
minDeletionSize(strs);
// 945. Minimum Increment to Make Array Unique
var minIncrementForUnique = function(nums) {
    let sortedNums = nums.sort((a, b) => a - b);
    let counter = 0;
    let increment;
    for (let i = 1; i < sortedNums.length; i++) {
        if (sortedNums[i - 1] >= sortedNums[i]) {
            increment = sortedNums[i - 1] - sortedNums[i] + 1
            sortedNums[i] += increment;
            counter += increment;
        }
    }
    return counter;
};
const nums = [3, 2, 1, 2, 1, 7];
const nums1 = [0, 2, 2, 2, 2];
// minIncrementForUnique(nums);
minIncrementForUnique(nums1);
// 2395. Find Subarrays With Equal Sum
var findSubarrays = function (nums) {
    let sums = [];
    for (let i = 1; i < nums.length; i++) {
        sums.push(nums[i - 1] + nums[i]);
    }
    const unique = [...new Set(sums)];
    return unique.length !== sums.length;
};
// 2244. Minimum Rounds to Complete All Tasks
var minimumRounds = function (tasks) {
    tasks = tasks.sort((a, b) => a - b);
    let obj = {};
    for (let task of tasks) {
        if (obj.hasOwnProperty(task)) {
            obj[task]++;
        } else {
            obj[task] = 1;
        }
    }
    let min = 0;
    for (let value of Object.values(obj)) {
        if (value === 1) {
            return -1;
        }
        min += Math.ceil(value / 3);
    }
    return min;
};
// 2315. Count Asterisks
var countAsterisks = function(s) {
    let inside = false;
    let count = 0;
    s = s.match(/[|*]/gi);
    if (!s) {
        return 0;
    }
    for (let char of s) {
        if (char === '|') {
            inside = !inside;
        }
        if (char === '*' && !inside) {
            count++;
        }
    }
    return count;
};
const s = "l|*e*et|c**o|*de|";
countAsterisks(s);
// 445. Add Two Numbers II
var addTwoNumbers = function (l1, l2) {
    if (l1.val === 0 && l2.val === 0) {
        return l1;
    }
    function listToArray(list) {
        let arr = [];
        while (list) {
            arr.push(list.val);
            list = list.next;
        }
        return arr;
    }
    const arr1 = listToArray(l1);
    const arr2 = listToArray(l2);
    let sum = BigInt(arr1.join("")) + BigInt(arr2.join(""));
    const sumArr = String(sum).split("").map(Number);
    let answer = null;
    for (let i = sumArr.length - 1; i >= 0; i--) {
        answer = { val: sumArr[i], next: answer };
    }
    return answer;
};
// 452. Minimum Number of Arrows to Burst Balloons
var findMinArrowShots = function (points) {
    points = points.sort((a, b) => a[0] - b[0]);
    let counter = 1;
    let start = points[0][0],
        end = points[0][1];
    for (let i = 1; i < points.length; i++) {
        start = points[i][0];
        if (end > points[i][1]) {
            end = points[i][1];
        }
        if (start > end) {
            counter++;
            end = points[i][1];
        }
    }
    return counter;
}
findMinArrowShots([
    [10, 16],
    [2, 8],
    [1, 6],
    [7, 12]
]);
findMinArrowShots([
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8]
]);
findMinArrowShots([
    [3, 9],
    [7, 12],
    [3, 8],
    [6, 8],
    [9, 10],
    [2, 9],
    [0, 9],
    [3, 9],
    [0, 6],
    [2, 8]
]);
// 134. Gas Station
var canCompleteCircuit = function (gas, cost) {
    const sumOfCost = cost.reduce((a, b) => a + b, 0);
    const sumOfGas = gas.reduce((a, b) => a + b, 0);
    if (sumOfCost > sumOfGas) {
        return -1;
    }
    let total = 0, answer = 0;
    for (let i = 0; i < gas.length; i++) {
        total += gas[i] - cost[i];
        if (total < 0) {
            total = 0;
            answer = i + 1;
        }
    }
    return answer;
};
canCompleteCircuit([5, 1, 2, 3, 4], [4, 4, 1, 5, 1
// 2363. Merge Similar Items
var mergeSimilarItems = function (items1, items2) {
    let obj1 = Object.fromEntries(items1);
    let obj2 = Object.fromEntries(items2);
    for (let [key, value] of Object.entries(obj2)) {
        if (obj1.hasOwnProperty(key)) {
            obj1[key] = obj1[key] + value;
        } else {
            obj1[key] = value;
        }
    }
    return Object.entries(obj1);
};
// 100. Same Tree
var isSameTree = function(p, q) {
    if (!p && !q) {
        return true;
    }
    if (!p || !q || p.val !== q.val) {
        return false;
    }
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}
// 101. Symmetric Tree
var isSymmetric = function (root) {
    var isSameTree = function (l, r) {
        if (!l && !r) {
            return true;
        }
        if (!l || !r || l.val !== r.val) {
            return false;
        }
        return isSameTree(l.left, r.right) && isSameTree(l.right, r.left);
    }
    return isSameTree(root.left, root.right);
};
// 2022. Convert 1D Array Into 2D Array
var construct2DArray = function(original, m, n) {
    if (original.length !== m * n) {
        return [];
    }
    let array = [];
    for (let i = 0; i < original.length; i += n) {
        array.push(original.slice(i, i+n));
    }
    return array;
}
const original = [1, 2, 3, 4],
    m = 2,
    n = 2;
construct2DArray(original, m, n);
// 2023. Number of Pairs of Strings With Concatenation Equal to Target
var numOfPairs = function(nums, target) {
    let counter = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                counter++;
            }
            if (nums[j] + nums[i] == target) {
                counter++;
            }
        }
    }
    return counter;
};
numOfPairs(['123', '4', '12', '34'], '1234');
// 724. Find Pivot Index
var pivotIndex = function(nums) {
    let left = 0,
        middle = nums[0],
        index = 0,
        right = nums.slice(1).reduce((a, b) => a + b);
    console.log(left, middle, right);
    while (index < nums.length) {
        console.log(left, right);
        if (left === right) {
            console.log(index);
        }
        left += nums[index];
        index++;
        right -= nums[index];
    }
    return -1;
}
pivotIndex([1, 7, 3, 6, 5, 6]);
// 1909. Remove One Element to Make the Array Strictly Increasing
var canBeIncreasing = function(nums) {
    if (nums.length < 3) {
        return false;
    }
    if (nums.every(num => num === nums[0])) {
        return false;
    }
    let arr = [...nums].sort((a, b) => a - b);
    console.log(nums, arr);
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === arr[i] || nums[i] === arr[i + 1]) {} else {
            return false;
        }
    }
    return true;
};
console.log(canBeIncreasing([1,2,10,5,7]));
