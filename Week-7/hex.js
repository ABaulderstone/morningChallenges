// Hex to ASCII
// Author: Rhys
function hexStringToAscii(hexString) {
    // Split input string on spaces 
    const splitOnSpaces = hexString.split(" ")

    // Iterate over each character code and map to ascii 
    const mapped = splitOnSpaces.map(charCode => {
    /* We use the static method on the String class fromCharCode on each charCode to convert to ascii value - 
    we need this to be a Number first, it is a string currently parseInt takes the string and converts it to a number, 
    the second parameter allows us to state what base the number currently is - 16 for hexadecimal parseInt returns a decimal 
    conversion of the passed hexadecimal number - this is then passed to String.fromCharCode */
    console.log(parseInt(charCode, 16))
    // console.log(String.fromCharCode(parseInt(charCode, 16)))

       return String.fromCharCode(parseInt(charCode, 16))
    });

    // Join the array and return
    return mapped.join("")
}

console.log(hexStringToAscii("68 65 6c 6c 6f 20 77 6f 72 6c 64"));    // hello world