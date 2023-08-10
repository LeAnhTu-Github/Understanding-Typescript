function CombineLiteral(
    input1 : number |string, 
    input2 : number | string,
    resultConvert: 'as-number' | 'as-text'
){
    let result
    if(typeof input1 === 'number' && typeof input2 === 'number' || resultConvert === 'as-number'){
        result = +input1+ +input2;
    }else{
        result = input1.toString() + input2.toString();
    }
    return result
}

const Literal = CombineLiteral('30', '20', 'as-number')
console.log(Literal); // => 50 type number
