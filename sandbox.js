//async and await
const getTodos = async () => {
    const response = await fetch('todos/luigi.json');
    if(response.status!==200)
    {
        throw new Error('Could not fetch the data!');
    }
    const data = await response.json();
    return data;
};

// const test = getTodos();
// console.log(test);

console.log(1);
console.log(2);
getTodos()
    .then( dat => console.log('Resolved: ',dat))
    .catch(err=>console.log('Error: ',err.message));

console.log(3);
console.log(4);