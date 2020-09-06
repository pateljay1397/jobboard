var fetch = require('node-fetch');
const { job } = require('cron');
const redis = require("redis");
const client = redis.createClient();
const { promisify } = require("util");
//const getAsync = promisify(client.get).bind(client);
const setAsync = promisify(client.set).bind(client);

const baseURL = 'https://jobs.github.com/positions.json'

async function fetchGithub(){
    let resultCount = 1, onpage = 0 ;
    const alljobs = [];
    
    while(resultCount > 0){
        const res = await fetch(`${baseURL}?page=${onpage}`);
        const jobs =await res.json();
        alljobs.push(...jobs);
        resultCount = jobs.length;
        console.log('got', resultCount , 'jobs');
        onpage ++;
    }

    console.log('got', alljobs.length, 'jobs total')
    const success = await setAsync('github', JSON.stringify(alljobs));
    console.log({success});

}

fetchGithub();

module.exports = fetchGithub;