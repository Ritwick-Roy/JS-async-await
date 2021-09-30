//fetch api

fetch('todos/luigi.json').then(response=>{
    // const luigi=JSON.parse(data);
    console.log(response);
    return response.json();  //response.json returns a promise
}).then(data=>{
    console.log(data);
}).catch(err=>{
    console.log('Error occured: ',err);
})