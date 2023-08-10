// function Logger(constructor: Function){
//     console.log('Logging....');  
//     console.log(constructor);
// }
// Decorator Factories:
// function Logger(logString: string){
//     return function(constructor: Function){
//         console.log(logString);  
//         console.log(constructor);
//     }
// }

// function WithTemplate(template: string, hookId: string){
//     return function(constructor: any){
//         const hookElement = document.getElementById(hookId)
//         const p = new constructor()
//         if(hookElement){
//             hookElement.innerHTML = template
//             hookElement.querySelector('h1')!.textContent = p.name
//         }
//     }
// }
// // @Logger('LOGGING-PERSON')
// @WithTemplate('<h1>This is my Person</h1>', 'app')
// class Persona {
//     name = 'Max'
//     constructor(){
//         console.log('Create Persona object');      
//     }
// }
// const per = new Persona()
// console.log(per);

// ----------------------------------
// 2. Property Decorator:
function Log(target: any, propertyKey: string | symbol){
    console.log('This is property decorator');
    console.log(target);
}
class Product{
    @Log
    title: string
    _price: number
    set price(val: number){
        if(val > 0){
            this._price = val
        }else{
            throw new Error('Invalid Price!!')
        }
    }
    constructor(t: string, p: number){
        this.title = t;
        this._price = p;
    }
    getPriceWithTax(tax: number){
        return this._price + (1+tax);
    }
}
