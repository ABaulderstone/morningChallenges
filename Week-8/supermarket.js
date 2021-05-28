function queueTime(customers, n) {
    // Created a new array of size n available queues and fills it with 0 in the positions
    const availableQueues = new Array(n).fill(0); 
    // iterates through all the customers
    for (let customer of customers) { 
        queueAllocator(availableQueues, customer);
    }
    return "Longest queue is: "+Math.max(...availableQueues);
    // returns the longest queue from mutated array
}

function queueAllocator(queues, customer) { 
    // Finds shortest queue in the queue array
    const lowestWaitTime = Math.min(...queues); 
    // Finds the index position of the current shortest queue
    const smallestWaitPosition = queues.indexOf(lowestWaitTime); 

    console.log("\nLowest wait time: "+lowestWaitTime)
    console.log("Smallest Wait Position: "+smallestWaitPosition)

    // Updates the customer to that particular queue
    queues[smallestWaitPosition] += customer;
    console.log("Current queues: "+queues)
}



console.log(queueTime([1,3,1,2,5,1],2))