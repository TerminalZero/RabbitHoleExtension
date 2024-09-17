cachedAnalysis = {};

chrome.tabs.onActivated.addListener(async (activeInfo) => {
    let tab = await chrome.tabs.get(activeInfo.tabId);

    if (cachedAnalysis[activeInfo.tabId]) {
        console.log('Using cached analysis for tab:', activeInfo.tabId);

        // Send the cached result back
        updateWordCountP(Object.entries(cachedAnalysis[activeInfo.tabId]));
        return;
    }

    if (tab.url.startsWith('http') || tab.url.startsWith('https') || tab.url.startsWith('file')) {
        try {
            await chrome.scripting.executeScript({
                target: { tabId: tab.id },
                files: ['tallying.js']
            });
        } catch (error) {
            console.error('Error executing script:', error);
        }
    } else {
        console.warn('The URL is not accessible for content script injection:', tab.url);
    }
});

const updateWordCountP = async (wordEntries) => {
    const tElement = document.getElementById('topic');
    const pElements = document.querySelectorAll('#recurringWords p');

    // Set the topic text content to first word
    if (wordEntries.length > 0) {
        var titleText = wordEntries[0][0];
        // make first char uppercase
        titleText = titleText.charAt(0).toUpperCase() + titleText.slice(1);
        tElement.textContent = titleText;
    } else {
        tElement.textContent = '';
    }

    // Iterate over the <p> elements and set their text content
    pElements.forEach((p, index) => {
        if (index < wordEntries.length) {
            let [word, count] = wordEntries[index];
            p.textContent = `${word}: ${count}`;
        } else {
            p.textContent = ''; // Clear content if there are more <p> elements than words
        }
    });
};

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'sendResults') {
        const top8Words = message.data;
        console.log('Received data from content script:', top8Words);

        // Cache the analysis result
        cachedAnalysis[sender.tab.id] = top8Words;

        const wordEntries = Object.entries(top8Words);

        updateWordCountP(wordEntries);
    }
});