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
