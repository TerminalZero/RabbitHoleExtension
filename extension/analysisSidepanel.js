// const tabTitle = document.getElementById('tab-title');
console.log('analysisSidepanel.js loaded');


chrome.tabs.onActivated.addListener(async (activeInfo) => {
    const tabTitleElement = document.getElementById('tab-title');
    const tab = await chrome.tabs.get(activeInfo.tabId);
    console.log(tabTitleElement);
    console.log(tab);
    console.log(tab.title);
    tabTitleElement.textContent = tab.title;
});