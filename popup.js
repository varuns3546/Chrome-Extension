let scraperButton = document.getElementById('scraper-button')
let newStoreButton = document.getElementById('new-store-button')
let container = document.querySelector('.container');

scraperButton.addEventListener("click", async () => {

    // Get current active tab 
    let [tab] = await chrome.tabs.query(
        {active: true, currentWindow: true})

    //Execute script to parse data
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        func: scrapeData,
        args: [tab.url]
    })
})


newStoreButton.addEventListener("click", async () =>{

})
//Function to scrape data
function scrapeData(url){
    alert(document.title)
    alert(url)
}