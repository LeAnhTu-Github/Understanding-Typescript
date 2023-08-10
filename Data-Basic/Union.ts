function Combine(input1 : number |string, input2 : number | string){
    let result
    if(typeof input1 === 'number' && typeof input2 === 'number'){
        result = input1+input2;
    }else{
        result = input1.toString() + input2.toString();
    }
    return result
}

const Unions = Combine(30,20);
const Unions1 = Combine('Anh', 'Tu')
console.log(Unions);
console.log(Unions1);

