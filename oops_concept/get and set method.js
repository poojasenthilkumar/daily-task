//get method and set method -- > is used to access and update the private variables

class Temperature { 
    constructor(temp)
    {
        this._temp = temp 
    }

    get temp()
    {
        return `${this._temp} deg celsius`
    }

    set temp(temp)
    {
        if(temp>100)
            temp = 100
        this._temp = temp 
    }
}

let temp1 = new Temperature(25)
temp1.temp = 150 
console.log(temp1.temp)
