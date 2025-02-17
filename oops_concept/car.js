//modules example

class car {
    drive()
    {
        console.log("driving")
    }
}

function fillGas()
{
    console.log('filling Gas')
}

function repair() 
{
    console.log('repairing')
}


// if we have to use this class in main class then we have to use the keyword export 

export default car // exporting the class
export {fillGas,repair}  // exporting the functions

//after exporting import this wherever we need by using the import keyword.

