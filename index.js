// 1.calculate 10% tax

function calculateTax (amount) {
    return amount * 0.10;

}


// 2.convert to uppercase 

function convertToUppercase (text) {
    return text.toUppercase();

}
//  3.find Maximum number

function findMaximum(num1, num2){
    if(num1 > num2){
        return num1;
    }else{
        return num2;
    }
}

// 4.function to check if a str is palindrome 

function isPalindrome(str){
    return str === str.split("").reverse().join("");
}
// console.log(isPalindrome("ekitike"));

// 5. function to calculate discount price

function calculateDiscountedPrice(originalPrice, discountPercentage){
    return originalPrice - (originalPrice * discountPercentage / 100);

}

// This is required for the test to function properly  
// module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };