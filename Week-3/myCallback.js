function remove(items, callback) {
	let result = [];
	for(let i=items.length-1; i>=0; i--) {
		console.log("\nCurrent counter value is: "+i);
		let item = items[i];
		console.log("value of item in index is: "+item);
		
		if(callback(item)) {
			
			console.log("\nWe have entered the if condition");
			//console.log(items.splice(i,1));
			items.splice(i,1);
			// Splice to remove the value from the initial array
			result.push(item);
			// Adding the removed item to the result array
			
		}
	}
	return result;
}

function removerFunction(item) {
	// Should return true if item begins with 't' and false otherwise
	console.log("Index value for this item in remover function is: "+item[0]);
	return item.toLowerCase()[0] === 't';
}

let people = ["tanya", "sue", "john", "garret"];
let removed = remove(people, removerFunction) ; // should remove "tanya" from people and return it in an array
console.log(people);  // should log: ["sue", "john", "garret"]
console.log(removed); // should log: ["tanya"]

