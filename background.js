    console.log('clicked')
    const button = document.getElementById('rank')
    const ranking = document.getElementById('result')
    button.addEventListener('click', async () => {
        console.log("clicking")
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            const activeTab = tabs[0];
            const domain = activeTab.url.replace(/^(http|https):\/\//, '').replace(/\/$/, '')
            console.log(domain)
            fetch(`https://openpagerank.com/api/v1.0/getPageRank?domains%5B%5D=${domain}`, { method: 'GET', headers: { 'Content-Type': 'application/json', 'API-OPR': 'gkcsw8kws84wogoow4go0gwss0ckwkwsk8swwsk8' }
        }
            ).then(response => response.json() )
            .then(result => 
                ranking.innerHTML = result.response[0].page_rank_decimal
            );
        });
    });