automate-chrome
===============
you need to run this first:
chrome.exe --remote-debugging-port=9222 --user-data-dir=remote-profile

to get session:
http://localhost:9222/json

connect ws:
ws://127.0.0.1:9222/devtools/page/d3c836fc-40c4-479b-b625-a86f4dcbae1f

navigate:
{"method":"Runtime.evaluate","params":{"expression":"document.location='http://www.google.com'","objectGroup":"console","includeCommandLineAPI":true,"doNotPauseOnExceptions":false,"returnByValue":false},"id":1}

eval javascript:
{"method":"Runtime.evaluate","params":{"expression":"document.getElementById('lst-ib').value='Hello World'","objectGroup":"console","includeCommandLineAPI":true,"doNotPauseOnExceptions":false,"returnByValue":false},"id":1}

Example of Chrome automation

The Chrome automation using Chrome Remote Debugging.
See http://markcz.wordpress.com/2012/02/18/automating-chrome-browser-from-csharp/ For more details.
