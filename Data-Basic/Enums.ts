enum Role {
    ADMIN,
    AUTHOR,
    READ_ONLY,
    USER,   
}

const Person2 = {
    name: 'Anh Tu',
    age: 20,
    hobbits: ['Sports', 'Game', 'Cooking'],
    role: Role.ADMIN
}

if(Person2.role === Role.ADMIN){
    console.log('This is Admin');
}else{
    console.log('Not Roll Checked!');
    
}