function nextId(data) {
  let ids = [];
  /* for each loop to iterate through each element
  and push it into the ids array*/
  data.forEach((element) => {
    ids.push(element.id);
  });
  
  // reverses the array
  let newerIds = ids.reverse();

  return newerIds.length > 0 ? newerIds[0] + 1 : 1;
}

let data = [
  {
    id: 1,
    label: "Rose",
  },
  {
    id: 3,
    label: "Tiger",
  },
  {
    id: 10,
    label: "Tree",
  },
];

console.log(nextId(data));
