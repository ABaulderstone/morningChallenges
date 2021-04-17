//Day 3 compare x and os challenge
const exesAndOhs = (string) => {
  let x = 0;
  let o = 0;
  let stringAsArray = string.split('');
  /* Splits per character of the string and then passes
  the splitted string as an array */
  console.log(stringAsArray);
  for (let i of stringAsArray) {
	  if (i.toLowerCase() === 'x') {x++;}
      console.log("Current x counter: "+x);
	  if (i.toLowerCase() === 'o') {o++;}
      console.log("Current o counter: "+o);
  }
  return x === o;
}
console.log(exesAndOhs("ooXX"))
