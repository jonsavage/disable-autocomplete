
disableAutocompleteIfSet();

function disableAutocompleteIfSet() {
  if(localStorage.status == 1) {
    console.log("disabling autocomplete");
    chrome.runtime.sendMessage({ "newIconPath" : "icon_blue.png" });
    // chrome.browserAction.setIcon({path: "icon_blue.png"});
    $("input").attr("autocomplete", "off");
  }
  else {
    console.log("NOT disabling autocomplete");
    // chrome.browserAction.setIcon({path: "icon_red.png"});
    chrome.runtime.sendMessage({ "newIconPath" : "icon_red.png" });
  }
}
