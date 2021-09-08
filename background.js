let color = '#ffffff'
// high contrast - black background, white text 
// mouse bigger 
// sticky keys 
// reduce distractions
chrome.runtime.onInstalled.addListener(() => { 
    chrome.storage.sync.set({color}) 
    var popupbutton = document.getElementById("popupbutton"); 
    popupbutton.addEventListener("button")
}); 

function popup() { 
    var popwindow = document.getElementById('checkBundle'); 
    if (popwindow.style.display === "none") { 
        popwindow.style.display = "block"; 
    } else { 
        popwindow.style.display = "none"; 
    }
}; 

function checkClicked() { 
    var contrast = document.getElementById("contrast"); 
    var fontsize = document.getElementById("font");
    var highlight = document.getElementById("highlight");
    var voice = document.getElementById("voice");
    var reader = document.getElementById("reader");

    if (contrast.checked === true) { 
        chrome.accesssibilityFeatures.highContrast.set(true); 
    } 
    if (fontsize.checked === true) { 
        chrome.accesssibilityFeatures.screenMagnifier.set(true); 
    }
    if (highlight.checked === true) { 
        chrome.accesssibilityFeatures.focusHighlight.set(true); 
    }
    if (voice.checked === true) { 
        chrome.accesssibilityFeatures.selectToSpeak.set(true); 
    }
    if (reader.checked === true) { 
        chrome.accesssibilityFeatures.dictation.set(true); 
    }
}
