// JSLab 2 - Paula Akemi Hara

// Exercise 1
// rotateLeft3([1, 2, 3]) → [2, 3, 1]
// rotateLeft3([5, 11, 9]) → [11, 9, 5]
// rotateLeft3([7, 0, 0]) → [0, 0, 7]
function rotateLeft3(nums){
    let firstNum = nums[0];
    let numbers = nums.splice(1,2);
    numbers.push(firstNum);
    
    return numbers;
}

// Exercise 2
// reverse3([1, 2, 3]) → [3, 2, 1]
// reverse3([5, 11, 9]) → [9, 11, 5]
// reverse3([7, 0, 0]) → [0, 0, 7]
function reverse3(nums){
    let numbers = [];
    
    for(let index = 0, ind = 2; index < 3; index++, ind--){
        numbers[index] = nums[ind];
    }
    
    return numbers;
}

// Exercise 3
// has23([2, 5]) → true
// has23([4, 3]) → true
// has23([4, 5]) → false
function has23(nums){
    if(nums[0] == 2 || nums[1] == 2 || nums[0] == 3 || nums[1] == 3){
        return true;
    }
    return false;
}

// Exercise 4
// fix23([1, 2, 3]) → [1, 2, 0]
// fix23([2, 3, 5]) → [2, 0, 5]
// fix23([1, 2, 1]) → [1, 2, 1]
function fix23(nums){
    let hasTwo = false;
    
    for(let index = 0; index < 3; index++){
        if(nums[index] == 3 && hasTwo){
            nums[index] = 0;
        }
        
        if(nums[index] == 2){
            hasTwo = true;
        }else{
            hasTwo = false;
        }
    }
}

// Exercise 5
// maxTriple([1, 2, 3]) → 3
// maxTriple([1, 5, 3]) → 5
// maxTriple([5, 2, 3]) → 5
function maxTriple(nums){
    let largest = nums[0];
    let size = nums.length;
    let middle = Math.trunc(size/2);
    
    if(nums[middle] > largest){
        largest = nums[middle];
    }
    
    if(nums[size-1] > largest){
        largest = nums[size-1];
    }
    
    return largest;
}

// Exercise 6
// swapEnds([1, 2, 3, 4]) → [4, 2, 3, 1]
// swapEnds([1, 2, 3]) → [3, 2, 1]
// swapEnds([8, 6, 7, 9, 5]) → [5, 6, 7, 9, 8]
function swapEnds(nums){
    let size = nums.length;
    let firstNum = nums[0];
    let lastNum = nums[size-1];
    
    nums[0] = lastNum;
    let numbers = nums.splice(0,size-1);
    numbers.push(firstNum);
  
    return numbers;
}

// Exercise 7
// unlucky1([1, 3, 4, 5]) → true
// unlucky1([2, 1, 3, 4, 5]) → true
// unlucky1([1, 1, 1]) → false
function unlucky1(nums){
    let size = nums.length;
    
    if(nums.length > 1){
        if((nums[0] == 1 && nums[1] == 3) || nums[1] == 1 && nums[2] == 3 || (nums[size-2] == 1 && nums[size-1] == 3)){
            return true;
        }
    }
    
    return false;
}

// Exercise 8
// front11([1, 2, 3], [7, 9, 8]) → [1, 7]
// front11([1], [2]) → [1, 2]
// front11([1, 7], []) → [1]
function front11(a, b) {
    let numbers = [];
    
    if(a.length > 0){
        numbers.push(a[0]);
    }
    if(b.length > 0){
        numbers.push(b[0]);
    }
    
    return numbers;
}

// Exercise 9
// isEverywhere([1, 2, 1, 3], 1) → true
// isEverywhere([1, 2, 1, 3], 2) → false
// isEverywhere([1, 2, 1, 3, 4], 1) → false
function isEverywhere(nums, num){
    let prev = nums[0];
    
    if(nums.length > 1){
        for(let index = 1; index < nums.length; index++){
            if(prev != num && nums[index] != num){
                return false;
            }
            prev = nums[index];
        }
    }else if(prev != num){
        return false;
    }
    
    return true;
}

// Exercise 10
// tenRun([2, 10, 3, 4, 20, 5]) → [2, 10, 10, 10, 20, 20]
// tenRun([10, 1, 20, 2]) → [10, 10, 20, 20]
// tenRun([10, 1, 9, 20]) → [10, 10, 10, 20]
function tenRun(nums){
    let multipleTen = 0;
    
    for(let index = 0; index < nums.length; index++){
        if(multipleTen != 0){
            if(nums[index] != 0 && nums[index] % 10 != 0){
                nums[index] = multipleTen;
            }
        }
        
        if(nums[index] != 0 && nums[index] % 10 == 0){
            multipleTen = nums[index];
        }
    }
    
    return nums;
}

// Exercise 11
// twoTwo([4, 2, 2, 3]) → true
// twoTwo([2, 2, 4]) → true
// twoTwo([2, 2, 4, 2]) → false
function twoTwo(nums){
    let prevIsTwo = false;
    
    for(let index = 0; index < nums.length; index++){
        if(prevIsTwo){
            if(nums[index] != 2){
                return false;
            }else{
                prevIsTwo = false;
                index++;
            }
        }
        
        if(nums[index] == 2){
            if(index == nums.length-1){
                return false;
            }
            prevIsTwo = true;
        }
    }
    return true;
}

// Exercise 12
// shiftLeft([6, 2, 5, 3]) → [2, 5, 3, 6]
// shiftLeft([1, 2]) → [2, 1]
// shiftLeft([1]) → [1]
function shiftLeft(nums){
    let firstNum = nums[0];
    let numbers = [];
    
    if(nums.length > 1){
        numbers = nums.splice(1, nums.length-1);
    }
    
    numbers.push(firstNum);
    
    return numbers;
}

// Exercise 13
// evenOdd([1, 0, 1, 0, 0, 1, 1]) → [0, 0, 0, 1, 1, 1, 1]
// evenOdd([3, 3, 2]) → [2, 3, 3]
// evenOdd([2, 2, 2]) → [2, 2, 2]
function evenOdd(nums){
    let justEven = [];
    let justOdd = [];
    let evenOddArray = [];
    
    for(let index = 0; index < nums.length; index++){
        if(nums[index] % 2 == 0){
            justEven.push(nums[index]);
        }else{
            justOdd.push(nums[index]);
        }
    }
  
    evenOddArray = justEven.concat(justOdd);
  
    return evenOddArray;
}

// Exercise 14
// fizzBuzz(1, 6) → ["1", "2", "Fizz", "4", "Buzz"]
// fizzBuzz(1, 8) → ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7"]
// fizzBuzz(1, 11) → ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz"]
function fizzBuzz(start, end){
    let fizzBuzzArray = [];
    let fizzBuzz = "";
    
    for(let num = start; num < end; num++){
        if(num % 3 == 0){
            fizzBuzz = "Fizz";
        }if(num % 5 == 0){
            fizzBuzz += "Buzz";
        }
        
        if(fizzBuzz != ""){
            fizzBuzzArray.push(fizzBuzz);
        }else{
            fizzBuzzArray.push(""+num);
        }
      
        fizzBuzz = "";
    }
    
    return fizzBuzzArray;
}

// Exercise 15
// countClumps([1, 2, 2, 3, 4, 4]) → 2
// countClumps([1, 1, 2, 1, 1]) → 2
// countClumps([1, 1, 1, 1, 1]) → 1
function countClumps(nums){
    let prevNumber = nums[0];
    let sameNumbers = false;
    let count = 0;
    
    for(let index = 1; index < nums.length; index++){
        if(prevNumber == nums[index]){
            sameNumbers = true;
        }
        
        if(sameNumbers){
            if(prevNumber != nums[index] || index == nums.length-1){
                count++;
                sameNumbers = false;
            }
        }
        
        prevNumber = nums[index];
    }
    
    return count;
}