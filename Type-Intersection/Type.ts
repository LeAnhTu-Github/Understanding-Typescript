type ADMIN ={
    name: string,
    privileges: string[]
}

type Employee = {
    name: string,
    startDate: Date
}

type ElevateEmployee = ADMIN & Employee;
// <=> interface ElevateEmployee extend ADMIN, Employee;
const e1: ElevateEmployee = {
    name: 'Max',
    privileges: ['create-server'],
    startDate: new Date()
}
console.log(e1);

type Combinable = string |number;
type Numberic = number | boolean;
type Universal = Combinable & Numberic;

// Have  3 key to check type of Type, class, interface (More on Type Guards) => typeof, in, instanceof

// 1. Typeof:
// OverLoad function:
function addValue(a: number, b:number):number;
function addValue(a: string, b:string):string;
function addValue(a: number, b:string):string;
function addValue(a: string, b:number):string;
function addValue(a: Combinable, b: Combinable){
    if(typeof a === 'string' || typeof b === 'string'){
        return a.toString() + b.toString()
    }
    return a + b;
}
const result = addValue(5, 'Max');
result.split(' ');
// 2. In:
type UnknowEmployee = ADMIN | Employee;
function checkEmployee(emp: UnknowEmployee){
    if('privileges' in emp){
        console.log('Privileges: '+emp.privileges);  
    }
    if('startDate' in emp){
        console.log('Start Date: '+emp.startDate);
    }
}

// 3. Instanceof:
class Car{
    driver(){
        console.log('Driving...');
    }
}
class Truck{
    driver(){
        console.log('Driving of Truck');
    }
    LoadCargo(amount: number){
        console.log('Loading Cargo...'+ amount);
        
    }
}

type Verhicle = Car | Truck;
const car1 = new Car();
const car2 = new Truck();

const checkCar = (verhicle: Verhicle) =>{
    verhicle.driver();
    if(verhicle instanceof Truck){
        verhicle.LoadCargo(1000);
    }
}
checkCar(car1);
checkCar(car2);

// Discriminated Union: With Interface if We have many subject not use instanceof to check method of all interface
// => create 1 type on Interface and use switch case to check it:
interface Bird {
    type: 'bird',
    flyingSpeed: number
}
interface Horse{
    type: 'horse',
    runningSpeed: number
}
type Animal = Bird | Horse;

function moveAnimal( animal:Animal){
    let speed;
    switch(animal.type){
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed
            break;
    }
    console.log('Speed of animal: '+speed);
}
const b1:Bird = {
    type: 'bird',
    flyingSpeed: 1000
}
moveAnimal(b1)

// Type casting:
// C1:
// const userInputElement = <HTMLInputElement>document.getElementById('input-Element')!

// C2:
// const userInputElement = document.getElementById('input-Element');
// (userInputElement as HTMLInputElement).value = 'Hi, Im here'

// C3:
const userInputElement = document.getElementById('input-Element')! as HTMLInputElement;
userInputElement.value = 'Hi, Im here'

// Index Properties:
interface ErrorContainer { // unlimited and no need to know the exact attribute
    [props: string]: string
}

const errorBag: ErrorContainer = {
    email: 'Not a valid email',
    username: 'Must start with a capical character!'
}