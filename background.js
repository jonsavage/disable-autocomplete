// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript({
    code: 'localStorage["status"] = localStorage["status"] == 1 ? 0 : 1; location.reload();'
  });
});

//http://stackoverflow.com/questions/16921685/change-the-chrome-extension-icon
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        chrome.browserAction.setIcon({
            path: request.newIconPath,
            tabId: sender.tab.id
        });
    });
