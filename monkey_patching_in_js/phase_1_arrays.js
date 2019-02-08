Array.prototype.uniq = function() {
    let uniqArray = [];

    for (let i = 0; i < this.length; i++) {
        if (uniqArray.indexOf(this[i])=== -1) {
            uniqArray.push(this[i]);
        };
    };
    return uniqArray;
}

// test = [1,1,2,2,3,3,4,4,5,5]
// console.log(test.uniq());


Array.prototype.twoSum = function() {
    let array = [];

    for (let i = 0; i < this.length - 1; i++) {
        for (let j = i + 1; j < this.length; j++) {
            if (this[i] + this[j] === 0) {
                array.push([i,j]);
            }; 
        };
    };
    return array;
}
// test = [1,0,-1,5,-5];
// console.log(test.twoSum()); // [[0,2],[3,4]]

Array.prototype.transpose = function () {
let transposedArr = []

for (let i = 0; i < this.length; i++ ){
    let temp = []
  for (let j = 0; j < this[i].length; j++) {
    temp.push(this[j][i])

  };
  transposedArr.push(temp)
};
return transposedArr
};

testTranspose = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];
console.log(testTranspose.transpose());
console.log(testTranspose);

