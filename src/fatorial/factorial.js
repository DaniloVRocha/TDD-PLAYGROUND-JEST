const getFactorial = number => {
    if(typeof number !== 'number' ){
        throw new TypeError("getFactorial precisa receber um parametro do tipo NUMBER");
    }
    if(number===1 || number === 0){
        return 1
    }
    if(number < 0 || number > 20){
        throw new RangeError("getFactorial precisa receber um numero entre 0 e 20");
    }
    return number * getFactorial(number-1)
}

export default getFactorial