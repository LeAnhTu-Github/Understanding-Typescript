// const names: Array<string> = []; // <=> string[]
// names[0].split(' ') // => work

// const promise: Promise<String> = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('This is data...');
//     }, 2000);

// });

// promise.then(data =>{
//     data.split('')
// })

// Generic function:
function merge<T extends {}, U>(objA: T, objB: U){
    return Object.assign(objA, objB)
}
const mergeObj = merge({name: 'Max', hobbies: ['Sport', 'Game']}, {age: 30})
console.log(mergeObj);

// Another generic function:
interface lengthy{
    length: number
}

function countAndDescribe<T extends lengthy>(element: T): [T, string]{
    let descriptionText = 'Got no value. ';
    if(element.length === 1){
        descriptionText = 'Got 1 value. ';
    }else if(element.length > 1){
        descriptionText = `Got ${element.length} value. `;
    }
    return [element, descriptionText]
}

console.log(countAndDescribe('Hi, am here'))

// Keyof in generic:
function extracAndConvert<T extends object, U extends keyof T>(obj: T, key: U){
    return 'Value: '+obj[key];
}

console.log(extracAndConvert({name: 'Max'}, 'name'));

// Class Generic:
class DataStorage<T> {
    private data: T[] = [];
    addItem(item: T){
        this.data.push(item);
    }
    removeItem(item: T){
        if(this.data.indexOf(item) === -1){
            return
        }
        this.data.splice(this.data.indexOf(item), 1);
    }
    getData(){
        return [...this.data]
    }
}
const nameStorage = new DataStorage<string>();
nameStorage.addItem('Max');
nameStorage.addItem('Manu');
nameStorage.addItem('Pobby');
nameStorage.removeItem('Aphe')
console.log(nameStorage.getData());

// Generic Utility Type:
// 1. Partial<Type>
interface CourseGoal{
    title: string,
    description: string,
    completeUntil: Date
}
function createCourseGoal(title: string, description: string, date: Date):CourseGoal{
    let courseGoal: Partial<CourseGoal> = {}
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal as CourseGoal;
}
// 2. Readonly<Type>
const names: Readonly<string[]> = ['Pobby', 'Tristana', 'Kennen'];
// names.push('Temmo') => Property 'push' does not exist on type 'readonly string[]'.
// ... read more: https://www.typescriptlang.org/docs/handbook/utility-types.html
