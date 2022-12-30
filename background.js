    console.log('clicked')
    const button = document.getElementById('rank')
    const ranking = document.getElementById('result')
    const loader = document.getElementById('loader')
    const globalRanking = document.getElementById('global_ranking')
    button.addEventListener('click', async () => {
        console.log("clicking")
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            loader.style.display = 'block';
            const activeTab = tabs[0];
            console.log(activeTab.url)
            const domain = activeTab.url.match(/\/\/.*?(?=\/)/)[0].replace('//', '')
            console.log(domain)
            fetch(`https://openpagerank.com/api/v1.0/getPageRank?domains%5B%5D=${domain}`, { method: 'GET', headers: { 'Content-Type': 'application/json', 'API-OPR': 'gkcsw8kws84wogoow4go0gwss0ckwkwsk8swwsk8' }
        }
            ).then(response => response.json() )
            .then(result => 
                setTimeout(() => {
                    loader.style.display = 'none',
                    ranking.innerHTML = result.response[0].page_rank_decimal,
                    globalRanking.innerHTML = `<strong>Global ranking:</strong> #${result.response[0].rank}`
                }, 1900),
              
            );
        });
    });