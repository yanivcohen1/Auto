import { Injectable } from '@angular/core';

@Injectable()
export class CsvService {

    loc = 0;

    constructor() { }

    setloc() {
        this.loc = this.loc + 1;
    }

    getLoc() {
        return this.loc;
    }

    json2csv(objArray): string {
        const array = typeof objArray !== 'object' ? JSON.parse(objArray) : objArray;

        let str = '';
        let line = '';

        // if (true) {// Include labels in first row
        const head = array[0];
        // if (true) {// Wrap values in double quotes
        for (const index in array[0]) {
            if (array[0].hasOwnProperty(index)) {
                const value = index + '';
                line += '' + value.replace(/"/g, '""') + ',';
            }
        }
        // }

        line = line.slice(0, -1);
        str += line + '\r\n';
        // }

        for (let i = 0; i < array.length; i++) {
            line = '';

            // if (true) {// Wrap values in double quotes
            for (const index in array[i]) {
                if (array[i].hasOwnProperty(index)) {
                    const value = array[i][index] + '';
                    line += '' + value.replace(/"/g, '""') + ',';
                }
            }
            // } else {
            // for (let index in array[i]) {
            //    line += array[i][index] + ',';
            // }
            // }

            line = line.slice(0, -1);
            str += line + '\r\n';
        }
        return str;
    }

    csv2json(csv): any {
        const lines = csv.split('\n');
        const result = [];
        const headers = lines[0].trim().split(',');
        for (let i = 1; i < lines.length - 1; i++) {
            const obj = {};
            const currentline = lines[i].trim().split(',');
            for (let j = 0; j < headers.length; j++) {
                obj[headers[j]] = currentline[j];
            }
            result.push(obj);
        }
        return result; // JavaScript object
        // return JSON.stringify(result); // JSON
    }

    downloadCsv(name: string, jsonData: any) {
        // const name = 'TestsList.csv';
        // const jsonData = this.TreeDestanation;
        // JSONToCSVConvertor(resCopy, 'Report', true);
        // let json = $.parseJSON($("#json").val());
        const csv = JSON.stringify(jsonData);
        // const csv = this.csvService.JSON2CSV2(jsonData);
        // window.open("data:text/csv;charset=utf-8," + escape(csv));
        const link = document.createElement('a');
        link.href = 'data:text/csv;charset=utf-8,' + csv;
        link.target = '_blank';
        link.download = name;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

}
