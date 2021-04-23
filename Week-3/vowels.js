function vowels(string) {
  return string.match(/[aeiouAEIOU]/g);
}
console.log(vowels("hello"));
