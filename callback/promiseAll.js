// 1st promise
var readMagzine = function(name) {
    return new Promise(function(resolve, reject) {
        resolve("Magzine Reading Completed");
    });
};

// 2nd promise
var readBook = function(name) {
    return new Promise(function(resolve, reject) {
        resolve("Book Reading Completed");
    });
};



/*  
    1). If all the promises executes successfully then it will give the array of results.
    2). If at any point of promise failed then it will not proceed for next promise. It will give an exception to us. That exception will caught by catch block.

*/
Promise.all([
    readMagzine("playboy"),
    readBook("machine Learning")
]).then(function(resultArray) {
    document.getElementsByClassName("promiseAllExample")[0].innerHTML = resultArray;
}).catch(function(err) {
    document.getElementsByClassName("promiseAllExample")[0].innerHTML = err;
});