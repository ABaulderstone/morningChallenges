//Day challenge 2
function multiplyValue(value, times){
    let result = value * times;

    if (Object.is(result, NaN)) {
        // Goes into this loop because Object.is comparison returns true
    
        console.log("this result is of type: "+result); 
				// Prints this is NaN because hi*4 is NaN, string * number is of NaN type

				console.log(isNaN(result));
				// Prints boolean true as result is a NaN
                
        console.log(typeof result);
        console.log(typeof NaN); // same as above 
        result = null;
				// allocation of null to satisfy the parameters of this challenge
       
        if (typeof value === "string" && typeof times === "number") {
          console.log('im here');
            result = "";
						// needed for concatenation, otherwise it will print null, string together

            for (let i = 1; i <= times; i++) // multiplication for the times value
            {
                result += value;
                // Adds value of each iteration to result
            }
        }
    }
    return result;
}

let d ;
// Uncomment and run these to understand better
 console.log(multiplyValue("hi",4));
// console.log(multiplyValue(4,4));
// console.log(multiplyValue("hi","hi"));
// console.log(multiplyValue(4,"hi"));
// console.log(multiplyValue(d,"hi"));
