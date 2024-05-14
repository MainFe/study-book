chrome.runtime.sendMessage({todo: "showPageAction"});

window.addEventListener('load', function (e) {
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = '#';
  document.head.appendChild(link);
}, false);


window.addEventListener('load', function (e) {
  var queryElement = document.querySelector('.nofonts');
  if (queryElement) {
      queryElement.style.background = "#000";
  } else {
      console.error("Element with class 'nofonts' not found.");
  }
}, false);