//Day 4 capitalise challenge
const capitaliseTheFront = (string) => {
	newArr = [];
	string.split(" ").map((word) => {
        console.log("\nPushing first char into the array: "+word.charAt(0));
        console.log("Pushing rest of the chars into the array: "+word.slice(1));
		newArr.push(word.charAt(0).toUpperCase() + word.substring(1).toLowerCase());
	});
	console.log(newArr)
	return newArr.join(" ")
}

console.log("\n"+capitaliseTheFront("sinGLE dAd"));
