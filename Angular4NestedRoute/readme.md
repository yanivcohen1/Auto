tsc -p .
webdriver-manager start/update
.\node_modules\.bin\protractor tests/conf.js
.\node_modules\.bin\protractor protractor.conf.js