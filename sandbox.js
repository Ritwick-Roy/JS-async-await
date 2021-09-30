const getTodos=(resource,callback)=>{
    return new Promise((resolve,reject)=>{
        const request=new XMLHttpRequest();

        request.addEventListener('readystatechange',()=>{
            //console.log(request,request.readyState);
            if(request.readyState === 4 && request.status === 200)
            {
                const data=JSON.parse(request.responseText)
                resolve(data);
            }
            else if(request.readyState === 4)
            reject('Could not fetch data!');
        });

        //request.open('GET','https://jsonplaceholder.typicode.com/todos/');  
        request.open('GET',resource);  
        //we're telling it what req type is and where to get it from but are yet to send it
        request.send();
    })
};

console.log(1);
console.log(2);
    // this mess is called callback hell
// getTodos('todos/luigi.json',(err,data)=>{ 
//     console.log(err??data);
//     getTodos('todos/mario.json',(err,data)=>{
//         console.log(err??data);
//         getTodos('todos/peach.json',(err,data)=>{
//             console.log(err??data);
//         });
//     });
//});

getTodos('todos/luigi.json').then(data=>{
    console.log('Promise 1 resolved: ',data);
    return getTodos('todos/mario.json');
}).then(data=>{
    console.log('Promise 2 resolved: ',data);
    return getTodos('todos/peach.json');
}).then(data=>{
    console.log('Promise 3 resolved: ',data);
}).catch(err=>{
    console.log('Promise rejected!',err);
})

console.log(3);
console.log(4);