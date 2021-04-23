function doors(pass) {
    let open = false
    console.log(open);
    while (!open && pass.length > 0) {
        enter = pass.pop()
        console.log(enter);
        if (enter.name == 'Simon' && enter.hasCoffee == true)
            open = true
    }
    return open
}
let myarr = [{name:'Simon', hasCoffee:true}];
console.log(doors(myarr));