run
node_modules\.bin\nightwatch --tag google -e chrome

node_modules\.bin\nightwatch --tag google --debug-brk=5858

node node_modules\nightwatch\bin\runner.js --tag allRegistrations --envr=live

envirments:
dev
stg
admin
live

report
node report.js