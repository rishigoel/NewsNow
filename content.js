document.documentElement.style.height = '100%';
document.body.style.height = '100%';
document.documentElement.style.width = '100%';
document.body.style.width = '100%';

var iframe = document.createElement('IFRAME');
document.body.appendChild(iframe);

iframe.style.position = 'fixed';
iframe.style.top = '7%';
iframe.style.right = '0%';
iframe.style.width = '20%';   
iframe.style.height = '25%';	
iframe.style.border = '0px';
iframe.src = chrome.runtime.getURL("index.html");


