function addStash(event) {
	let stashy = document.getElementById("stash-pic");
	let X = event.pageX;
	let Y = event.pageY;
	stashy.style.top = `${Y - 10}px`;
	stashy.style.left = `${X - 90}px`;
}

let catty = document.getElementById("cat-pic");
catty.addEventListener("click",addStash);

// Added only code as git does not like nested git modules