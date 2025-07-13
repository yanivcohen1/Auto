to start webserver
right click on  "front-panel-controls" and select start

get -> http://127.0.0.1:8001/front-panel-controls/slide/get_json?test1=11&test2=22
the get respose header include test1=11 and test2=22
the get respose: {"result":[{"Key":["tes1"],"Value":["1"]},{"Key":["test2"],"Value":["2"]}]}

post -> http://127.0.0.1:8001/front-panel-controls/slide/post_json?test1=11&test2=22
the post respose header include test1=11 and test2=22
the post request body to send : {"result":[{"Key":["tes1"],"Value":["1"]},{"Key":["test2"],"Value":["2"]}]}

get -> http://127.0.0.1:8001/front-panel-controls/slide/update?slide=2
for update global var slide to 2

get -> http://127.0.0.1:8001/front-panel-controls/slide/read
to read global variable