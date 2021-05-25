function getSeason(latitude, date) {
    let seasons;
    if (latitude <=0) {
        seasons = { summer: [1,2,12], autumn: [3,4,5], winter:[6,7,8], spring: [9,10,11] }
    } else {
        seasons = {winter: [1,2,12], spring: [3,4,5], summer:[6,7,8], autumn: [9,10,11]}
    
    }
    const whichMonth = date.getMonth() + 1;
    console.log(whichMonth)
    for (let season in seasons) {
        if (seasons[season].includes(whichMonth)) {
            return season
        }      
    }
}


console.log(getSeason(35.4567, new Date('2020-09-20'))) // Northern Hemisphere
console.log(getSeason(-35.4567, new Date('2020-06-20'))) // Southern Hemisphere
