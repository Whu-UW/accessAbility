let color = '#ffffff'
// high contrast - black background, white text 
chrome.runtime.onInstalled.addListener(() => { 
    chrome.storage.sync.set({color})
    // use the accessibilityFeatures extension here
    chrome.accesssibilityFeatures.highContrast.set(true); 

}); 