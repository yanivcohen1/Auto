'use strict';

angular.module('testmanagerApp')
    .service('ParseCSV', function () {
        this.CSV2JSON = function(csv){
    	  var lines=csv.split("\n");
    	  var result = [];
    	  var headers=lines[0].trim().split(",");
    	  for(var i=1;i<lines.length;i++){
    		  var obj = {};
    		  var currentline=lines[i].trim().split(",");
    		  for(var j=0;j<headers.length;j++){
    			  obj[headers[j]] = currentline[j];
    		  }
    		  result.push(obj);
    	  }
    	  //return result; //JavaScript object
    	  return JSON.stringify(result); //JSON
    	}
        
        this.JSON2CSV = function(objArray) {
            var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;

            var str = '';
            var line = '';

            if (true) {//Include labels in first row 
                var head = array[0];
                if (true) {//Wrap values in double quotes
                    for (var index in array[0]) {
                        var value = index + "";
                        line += '"' + value.replace(/"/g, '""') + '",';
                    }
                } else {
                    for (var index in array[0]) {
                        line += index + ',';
                    }
                }

                line = line.slice(0, -1);
                str += line + '\r\n';
            }

            for (var i = 0; i < array.length; i++) {
                var line = '';

                if (true) {//Wrap values in double quotes
                    for (var index in array[i]) {
                        var value = array[i][index] + "";
                        line += '"' + value.replace(/"/g, '""') + '",';
                    }
                } else {
                    for (var index in array[i]) {
                        line += array[i][index] + ',';
                    }
                }

                line = line.slice(0, -1);
                str += line + '\r\n';
            }
            return str;     
        }
        
        this.JSON2CSV2 = function(objArray) {
            var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;

            var str = '';
            var line = '';

            if (true) {//Include labels in first row 
                var head = array[0];
                if (true) {//Wrap values in double quotes
                    for (var index in array[0]) {
                        var value = index + "";
                        line += '' + value.replace(/"/g, '""') + ',';
                    }
                } else {
                    for (var index in array[0]) {
                        line += index + ',';
                    }
                }

                line = line.slice(0, -1);
                str += line + '\r\n';
            }

            for (var i = 0; i < array.length; i++) {
                var line = '';

                if (true) {//Wrap values in double quotes
                    for (var index in array[i]) {
                        var value = array[i][index] + "";
                        line += '' + value.replace(/"/g, '""') + ',';
                    }
                } else {
                    for (var index in array[i]) {
                        line += array[i][index] + ',';
                    }
                }

                line = line.slice(0, -1);
                str += line + '\r\n';
            }
            return str;     
        }
        
        this.downloadCsv = function(name , jsonData) {
        	//JSONToCSVConvertor(resCopy, "Report", true);
            //var json = $.parseJSON($("#json").val());
            var csv = this.JSON2CSV2(jsonData);
            //window.open("data:text/csv;charset=utf-8," + escape(csv));
            var link = document.createElement('a');
            link.href = 'data:text/csv;charset=utf-8,' + escape(csv);
            link.target = '_blank';
            link.download = name;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
        
    });
