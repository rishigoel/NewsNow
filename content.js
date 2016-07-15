document.documentElement.style.height = '100%';
document.body.style.height = '100%';
document.documentElement.style.width = '105%';
document.body.style.width = '105%';

var iframe = document.createElement('IFRAME');
document.body.appendChild(iframe);
iframe.id = 'webview';

iframe.style.position = 'fixed';
iframe.style.top = '5%';
iframe.style.right = '0%';
iframe.style.width = '25%';   
iframe.style.height = '100%';
iframe.src = chrome.runtime.getURL("index.html");

