const Person1: {
    name: string;
    age:number;
    hobbits: string[];
    role: [number, string];
} = {
    name: 'Anh Tu',
    age: 20,
    hobbits: ['Sports', 'Game', 'Cooking'],
    role: [2, 'admin']
}
// Access With:
Person1.role.push('author');
// Faild With add length:
// Person1.role = [1, 'user', 'author'] => Error

console.log(Person1);