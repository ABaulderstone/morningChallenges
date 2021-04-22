const commonCharacters = (string1, string2) => {
    let result = "";
    let string1lower = string1.toLowerCase()
    let string2lower = string2.toLowerCase()
    for (let char of string1lower.replace(/ /g, "")) {
		/* regex / /g means global and causes the replace call to 
        replace all space matches not just the first one. */
        console.log(char)
        if (string2lower.includes(char) && !result.includes(char)) {
            result += char;
        }
    }
    return "\nThe common chars are:" +result;

}

console.log(commonCharacters("HELLO I am kanye", "yellow"))