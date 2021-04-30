const findLastIndex = (array, needle) => {
    const key = Object.keys(needle)[0];
    //Assigning value of the needle object 'name' to key

    const value = needle[key];
    //Assigning value of key to value

    console.log(`Items stored in value: ${value}`);
    //Assigning the actual value of the needle object 'Kanye' to val

    for (let i = array.length - 1; i >= 0; i--) {
        // console.log("\n"+Object.keys(array[i]))
        // console.log(array[i][key])
      if (Object.keys(array[i]).includes(key) && array[i][key] === value)
      /* Comparison to check if the array has 'name', if yes
         is it's stored value equal to that of the value present in 'val'
      */
        // console.log(array[i][key])
        return i;
    }
    return -1;
  }
  const users = [
      {'id': 1, 'name': 'Bob', 'last': 'Brown'},
      {'id': 2, 'name': 'Ted', 'last': 'White'},
      {'id': 3, 'name': 'Matthew', 'last': 'McConaughey'},
      {'id': 4, 'name': 'Kanye', 'last': 'West'}
  ];
  
  //console.log(users[3]);
  console.log(findLastIndex(users, {name: 'adi'}));
 

  