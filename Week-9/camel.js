function toCamelCase(string){
    // implicit return
    let camel =  string.split(/-|_/).map((element, index) => (
        /* Must use the | operand if not using [] brackets in regex, 
        pattern will not be picked up otherwise*/
        index === 0 ? element : element[0].toUpperCase() + element.substring(1)
    )).join("");

    return camel
   }

console.log(toCamelCase("Hello-there_bye"))
console.log(toCamelCase("foo_bar")) 