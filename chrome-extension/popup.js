let totalText = document.getElementById('totalText');
let numberBtn = document.getElementById('numberBtn');


let newTotalNum = 0;
chrome.storage.sync.get(['total'], function(request){
  if(request.total) {
    newTotalNum = parseInt(request.total);
  }
  totalText.innerHTML = `Total: ${newTotalNum}`
})

function setTotal() {
  newTotalNum++;
  chrome.storage.sync.set({'total': newTotalNum});
}

numberBtn.addEventListener('click', () => {
  if(newTotalNum >= 20) {
    let notifiOptions = {
      type: 'basic',
      iconUrl: 'icon48.png',
      title: 'Limit reached!',
      message: 'Uh oh! Looks like you 퍼킹 맨~'
    }
    chrome.notifications.create('limitNotif', notifiOptions)
  }
  setTotal();
  totalText.innerHTML = `Total: ${newTotalNum}`
});