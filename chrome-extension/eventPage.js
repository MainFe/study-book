let contextMenuItem = {
  "id": "spendMoney",
  "title": "SpendMoney",
  "contexts": ["selection"]
}
chrome.contextMenus.create(contextMenuItem)

// chrome.contextMenus.onClicked.addListener(function(clickData){
//   if(clickData.menuItemId == "spendMoney" && clickData.selectionText){
//     if(isInt(clickData.selectionText)){
//       chrome.storage.sync.get(['total', 'limit'], function(request) {
//         let newTotal = 0;
//         if(request.total){
//           newTotal += parseInt()
//         }
//       })
//     }
//   }
// })

chrome.storage.onChanged.addListener(function(changes, storageName) {
  chrome.action.setBadgeText({"text": changes.total.newValue.toString()});
})

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
  if(request.todo == "showPageAction") {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
      chrome.tabs.update(tabs[0].id, {active: false});
    })
    console.log(1);
  }
});