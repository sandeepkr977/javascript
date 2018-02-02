// 1st promise
var vote = function(age) {
    return new Promise(function(resolve, reject) {
        if (age <= 18) {
            reject("you are below 18");
        } else {
            resolve();
        }
    })
}

// 2nd promise
var voteFor = function(party) {
    return new Promise(function(resolve, reject) {
        switch (party) {
            case "BJP":
                resolve("You have successfully voted for BJP.");
                break;
            case "AAP":
                resolve("You have successfully voted for AAP.");
                break;
            case "CONGRESS":
                resolve("You have successfully voted for CONGRESS.");
                break;
            default:
                reject("Sorry, this party is not available !");
        }
    })
}

/* 
1). Nesting of multiple promises which are interdependent to each other.
2). In this example, "voteFor" promise is dependent on the "vote". If 'Vote' promise executes successfully then it proceed for next promise.
    otherwise it breaks the execution and will give us an exception. The exception will caught by catch block.
*/
vote(19)
    .then(function(result) {
        return voteFor("KAMAL");
    })
    .then(function(result) {
        document.getElementsByClassName("promiseExample")[0].innerHTML = result;
    })
    .catch(function(error) {
        document.getElementsByClassName("promiseExample")[0].innerHTML = error;
    });