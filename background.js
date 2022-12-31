    const button = document.getElementById('rank')
    const ranking = document.getElementById('result')
    const loader = document.getElementById('loader')
    const globalRanking = document.getElementById('global_ranking')
    button.addEventListener('click', async () => {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            loader.style.display = 'block';
            const activeTab = tabs[0];
            const domain = activeTab.url.match(/\/\/.*?(?=\/)/)[0].replace('//', '')
            fetch(`https://openpagerank.com/api/v1.0/getPageRank?domains%5B%5D=${domain}`, { method: 'GET', headers: { 'Content-Type': 'application/json', 'API-OPR': 'gkcsw8kws84wogoow4go0gwss0ckwkwsk8swwsk8' }
        }
            ).then(response => response.json() )
            .then(result => 
                setTimeout(() => {displayResult(result.response[0])}, 1900)
            );
        });
    });

    function displayResult(globalRank) {
        setColor(globalRank),
        loader.style.display = 'none',
        ranking.innerHTML = `${globalRank.page_rank_decimal}<small>/10</small>`,
        globalRanking.innerHTML = `<strong>Global ranking:</strong> #${globalRank.rank}`
    }

    function setColor(globalRank) {
        if (globalRank.page_rank_decimal < 2) {
            ranking.style.color = "#f25555";
        } else if (globalRank.page_rank_decimal > 2 && globalRank.page_rank_decimal < 5) {
            ranking.style.color = "#e1800b";
        } else {
            ranking.style.color = "#4caf50";
        }
    }