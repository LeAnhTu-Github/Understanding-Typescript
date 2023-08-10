// Any Javascript array, type can be flexible or strict(regarding the element types)

const People = {
    name: 'Anh Tu',
    age: 20,
    hobbits: ['Game', 'Sport', 'Cooking']
}

let favoriteActivity: string[];
favoriteActivity = ['Sports']

for(const hobbit of People.hobbits ){
    console.log(hobbit.toUpperCase());
}
// GAME
// SPORT
// COOKING