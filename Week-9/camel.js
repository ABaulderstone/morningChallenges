function toCamelCase(string){
    // implicit return
    let camel =  string.split(/-|_/).map((element, index) => (
        index === 0 ? element : element[0].toUpperCase() + element.substring(1)
    )).join("");

    return camel
   }

console.log(toCamelCase("Hello-there_bye"))
console.log(toCamelCase("foo_bar")) 