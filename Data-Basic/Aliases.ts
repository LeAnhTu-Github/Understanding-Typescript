type Combineble = number |string;
type ConvertionDescriptor = 'as-number' | 'as-text'


function CombineAlias(
    input1 : Combineble,
    input2 : Combineble,
    resultConvert: ConvertionDescriptor
){
    let result
    if(typeof input1 === 'number' && typeof input2 === 'number' || resultConvert === 'as-number'){
        result = +input1+ +input2;
    }else{
        result = input1.toString() + input2.toString();
    }
    return result
}

const Aliases = CombineLiteral('30', '20', 'as-number')
console.log(Literal); // => 50 type number
