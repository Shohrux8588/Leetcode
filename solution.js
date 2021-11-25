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
