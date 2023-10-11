console.log('starting the application');

const axios = require('axios');

// Calling json placeholder sample data api from https://jsonplaceholder.typicode.com/users

axios.get('https://jsonplaceholder.typicode.com/users').then((res)=>{
    console.log(res.data);
}).catch((Err)=>{
    console.log(Err);
}).finally(()=>{
    console.log('This block will run all d time.');
});

console.log('application ran successfully');
