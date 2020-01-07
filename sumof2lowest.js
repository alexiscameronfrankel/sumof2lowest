function sumTwoSmallestNumbers(numbers) {   
  smallNum=numbers.sort((a, b) => a - b )
    return (smallNum[0]+smallNum[1])
};


// I can't figure out how to do this without https://www.w3schools.com/js/js_array_sort.asp