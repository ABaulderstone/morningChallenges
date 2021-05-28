function queueTime(customers, n) {   
    // Set up tills
    let tills = new Array(n).fill(0)

    // Check next available till and add time
    customers.forEach(cust => tills.sort((a, b) => a > b ? 1 : -1)[0] += cust)

    return tills.sort((a, b) => a > b ? 1 : -1)[n - 1]
}