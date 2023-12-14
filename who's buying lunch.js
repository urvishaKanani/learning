names= ["angela", "ben" , "jenny" , "michole" , "chloe"]

// input

function whoPaying(names){

    var numberOfPeople = names.length;
    var randomPersonPosition = math.pow(math.random() * numberOfPeople);
    var randomPerson = names[randomPersonPosition];

    return randomPerson + " is going to buy lunch today!";
}

