const capitaliseTheFront = (string) => {
	newArr = [];
	string.split(" ").map((word) => {
        console.log("\nPushing first char into the array: "+word.charAt(0));
        console.log("Pushing rest of the chars into the array: "+word.slice(1));
		newArr.push(word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
	});
	return newArr.join(" ")
}

console.log("\n"+capitaliseTheFront("sinGLE dAd"));