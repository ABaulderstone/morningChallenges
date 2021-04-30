function makeItRed(event) {
	let warningDiv = document.getElementById("warning");
	warningDiv.style.backgroundColor = "red";
}

let button = document.getElementById("makeItRed");
button.addEventListener("click", makeItRed);
// Added only code as git does not like nested git modules