const arr = [1,2,3,20,25,89,120]

// reduce 

Array.prototype.CustomReducer = function(callbackFn){
    let initialValue = 0;
    for(let i = 0 ; this.length; i++){
        callbackFn(initialValue += this[i])
    }   
    console.log(result)
}

const newSum = arr.reduce((prevValue, currValue)=>{
    return prevValue + currValue
})
console.log(newSum)

// Filter 

Array.prototype.CustomFilter = function (callback){
    let newArr = [];
    for(let i = 0; i < this.length; i++){
        if(callback(this[i])){
            newArr.push(this[i])
        }
    }
    return newArr;
}

const UpdatedArr = arr.CustomFilter((item)=>{
    return item % 2 === 0;
})

console.log(UpdatedArr)


// Some 

Array.prototype.CustomeSome = function (callback) {
    for(let i = 0; i < this.length; i++){
        if(callback(this[i])){
            return true
        }else return false
    }
}

const bool = arr.CustomeSome((item)=>{
    return item > 2;
})

console.log(bool)

