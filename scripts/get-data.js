import fetch from "node-fetch";

function getDomain () {
    const domain = 'window.location.hostname'
    console.log(domain)
    return fetch('https://openpagerank.com/api/v1.0/getPageRank?domains%5B%5D=${domain}',
    {   method: 'GET',  
        headers: { 
            'Content-Type': 'application/json', 
            'API-OPR': 'gkcsw8kws84wogoow4go0gwss0ckwkwsk8swwsk8' 
        } 
    }
        ).then(response => response.json())
}

getDomain().then(data => console.log(data))