// Type Unknown:

let userInput: unknown;
let userName: string;

userInput = 50;
userInput = 'Max'

if(typeof userInput === 'string'){
    userName = userInput
}

// Type Never:

function generateError (message: string, code: number): never{
    throw {message:message, ErrorCode: code}
}

generateError('An Error currended!', 500)