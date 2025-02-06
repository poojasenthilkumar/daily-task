//TASK - 1

// COUNTER WITH CLOSURES

// example 1 - without using named function ie: here at first it returns the inner function (anonymous) to the increment variable 
// so that whenever we calls increment it moves to the inner function.

// closures - the function defined inside the outer function. 
// the outer function variable can also be accessed inside the inner function

function counter() {
    let count = 0;

    return function() {
        count++;
        console.log(count);
    };
}

const increment = counter();
increment(); // 1
increment(); // 2
increment(); // 3


// example 2
// by using the named function 

function count()
{
    let count = 0;

    function increment()
    {
        count++;
        console.log(count)
    }
    return increment
}

const counter = count()

counter() // 1 
counter() // 2



