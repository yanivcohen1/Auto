import { Component, OnInit } from '@angular/core';
import { TreeDragDropService } from 'primeng/components/common/api';
// import {NodeService} from 'primeng/service/nodeservice';
import { Message, MenuItem, TreeNode } from 'primeng/components/common/api';
import { Tree } from 'primeng/components/tree/tree';
import { SharedModule } from 'primeng/components/common/shared';
import { PrimeTemplate } from 'primeng/components/common/shared';
import { CsvService, MessageSevirtyEnum, ModalService } from '../shared';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { PrimeService } from './prime.service';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';

@Component({
    selector: 'jhi-prime',
    templateUrl: './prime.component.html',
    styles: [],
    providers: [TreeDragDropService]
})
export class PrimeComponent implements OnInit {

    search: string;
    msgs: Message[];
    glowMsgs: Message[];
    value: Date;
    selectedFile: TreeNode;
    expanded: boolean;
    TreeSource: TreeNode[] = [];
    TreeDestanation: TreeNode[] = [];
    TreeSourceCopy: TreeNode[] = [];
    TreeDestanationCopy: TreeNode[] = [];
    envirment = {
        name: 'live'
    };
    content: any;
    Process = false;
    email = 'a';
    closable = true;
    modalId = 'hoplaModal';

    constructor(private csvService: CsvService,
                private http: HttpClient,
                public modalService: ModalService,
                private primeService: PrimeService,
                private slimLoadingBarService: SlimLoadingBarService) { }

    ngOnInit() {

        this.getFiles();

        /* this.TreeDestanation = [
            {
                label: 'Backup',
                data: 'Backup Folder',
                expandedIcon: 'fa-folder-open',
                collapsedIcon: 'fa-folder'
            }
        ];
        this.TreeSource = [
            {
                label: 'Documents',
                data: 'Documents Folder',
                expandedIcon: 'fa-folder-open',
                collapsedIcon: 'fa-folder',
                children: [
                    { label: 'barcelona1.jpg', data: 'Barcelona Photo' },
                    { label: 'logo1.jpg', data: 'PrimeFaces Logo' },
                    { label: 'primeui1.png', data: 'PrimeUI Logo' }]
            },
            {
                label: 'Pictures',
                data: 'Pictures Folder',
                expandedIcon: 'fa-folder-open',
                collapsedIcon: 'fa-folder',
                children: [
                    { label: 'barcelona.jpg', data: 'Barcelona Photo' },
                    { label: 'logo.jpg', data: 'PrimeFaces Logo' },
                    { label: 'primeui.png', data: 'PrimeUI Logo' }]
            }
        ] */

    }

    exportTests() {
        const name = 'TestsList.csv';
        const jsonData = this.TreeDestanation;
        const csv = this.csvService.downloadCsv(name, jsonData);
    }

    getFiles() {
        return this.primeService.get_tests()
        .subscribe(
          // Successful responses call the first callback.
          (data) => {this.TreeSource =  data },
          // Errors will call this callback instead:
          (err) => {
            console.log('Something went wrong!');
          }
        );
    // .toPromise()
    // .then(res => this.TreeDestanation = <TreeNode[]> res);
    }

    runTest() {
        this.Process = true;
        // this.sendMsg('run tests waitting server');
        this.modalService.open(this.modalId);
        this.primeService.run_tests(this.TreeDestanation, this.envirment, this.email)
        .subscribe(
            (data) => {
                this.Process = false;
                console.log(data);
                this.modalService.close(this.modalId);
                this.sendGlowMsg('tests now running: ' + data, MessageSevirtyEnum.info);
                window.open(data);
                // Read the result field from the JSON response.
                // this.results = data['results'];
            },
            (err) => {
                console.log('Something went wrong!');
                this.Process = false;
                this.modalService.close(this.modalId);
                this.sendGlowMsg('jenkins server error', MessageSevirtyEnum.error);
            }
        );

        /* $http({
            method:'POST',
            url: runTestsTests_url, // 'api/run_tests/';
            params: {envirment: $scope.envirment.name, email: $scope.email},
            data: $scope.tree2
        })//resorce.save(test).$promise
        .then(function(res){
            $scope.Process = false;
            $window.open(res.data);
            $window.alert("Runnig Tests");
        }); */

        /* this.http.get('/api/items').subscribe(data => {
            // Read the result field from the JSON response.
            this.results = data['results'];
          }); */

         /*  const req = new HttpRequest('POST', '/upload/file', file, {
            reportProgress: true,
          }); */
    }

    sendMsg(msg: string) {
        this.msgs = [];
        this.msgs.push({ severity: 'warn', summary: msg, detail: '' });
    }

    closeMsg() {
        this.msgs = [];
    }

    sendGlowMsg(msg: string, _severity: MessageSevirtyEnum) {
        this.glowMsgs = [];
        this.glowMsgs.push({severity: _severity.toString(), summary: msg, detail: '' });
    }

    showContent(event) {
        // this.content = event.target.value;
        const input = event.target;
        let text
        for (let index1 = 0; index1 < input.files.length; index1++) {
            const reader = new FileReader();
            reader.onload = () => {
                // this 'text' is the content of the file
                text = reader.result;
                const json = JSON.parse(text);
                this.TreeDestanation = json;
                this.TreeDestanationCopy = this.arrayCopy(this.TreeDestanation);
            }
            reader.readAsText(input.files[index1]);
        }
        /* var contentJson2 = ParseCSV.CSV2JSON(this.content);
        //contentJson2 = contentJson2.replace(/"/g, '');
        contentJson = JSON.parse(contentJson2);
        //$scope.fileJson = JSON.parse(ParseCSV.CSV2JSON($scope.content));
        $scope.tree2 = [];
        filterData = [];
        for (var i = 0; i < contentJson.length-1; i++) {
            var element = contentJson[i];
            $scope.tree2.push({
                id: contentJson[i].id ,
                title: contentJson[i].title,
                nodes: []
              });
            //$scope.tree2.push(contentJson[i]);
        }
        filterData.push($scope.tree2);
        //$scope.tree2 = $scope.fileJson; */
    }

    modelChange(event: string) {
        let expend: [boolean];
        let filesTemp = [];
        expend = [false];
        for (let index = 0; index < this.TreeSource.length; index++) {
            expend[index] = this.TreeSource[index].expanded;
        }
        if (event.length === 1 && this.TreeSourceCopy.length === 0) {
            this.TreeSourceCopy = this.deepArrayCopy(this.TreeSource);
        }
        filesTemp = this.deepArrayCopy(this.TreeSourceCopy);
        for (let i = filesTemp.length - 1; i >= 0; i--) {
            if (filesTemp[i].children.length !== 0) {
                for (let i2 = filesTemp[i].children.length - 1; i2 >= 0; i2--) {
                    if (filesTemp[i].children[i2].label.toLowerCase().includes(event)) {
                    } else {
                        filesTemp[i].children.splice(i2, 1);
                    }
                }
            }
        }
        this.TreeSource = this.deepArrayCopy(filesTemp);
        if (event.length === 0) {
            this.TreeSource = this.deepArrayCopy(this.TreeSourceCopy);
        }
        for (let index = 0; index < this.TreeSource.length; index++) {
            this.TreeSource[index].expanded = expend[index];
        }
    }

    private deepArrayCopy(arr: TreeNode[]): TreeNode[] {
        const results: TreeNode[] = [];
        if (!arr) {
            return results;
        }
        for (let i = 0; i <= arr.length - 1; i++) {
            const result: TreeNode[] = [];
            const items = arr[i].children as TreeNode[];
            for (let i2 = 0; i2 <= items.length - 1; i2++) {
                const item = items[i2];
                if (item) {
                    result.push({
                        label: item.label, data: item.data, expandedIcon: item.expandedIcon,
                        collapsedIcon: item.collapsedIcon
                    });
                }
            }
            results.push({
                label: arr[i].label, data: arr[i].data, expandedIcon: arr[i].expandedIcon,
                collapsedIcon: arr[i].collapsedIcon, children: result
            });
        }
        return results;
    }

    private arrayCopy(arr: TreeNode[]): TreeNode[] {
        const results: TreeNode[] = [];
        if (!arr) {
            return results;
        }
        for (let i = 0; i <= arr.length - 1; i++) {
            const result: TreeNode[] = [];
            const items = arr[i].children as TreeNode[];
            results.push({
                label: arr[i].label, data: arr[i].data, expandedIcon: arr[i].expandedIcon,
                collapsedIcon: arr[i].collapsedIcon, children: []
            });
        }
        return results;
    }
    /* filter(itemList: TreeNode[]): TreeNode[] {
      let result: TreeNode[] = [];
      //your filter logic here
      for (let i = itemList.length - 1; i >= 0; i--) {
          if (itemList[i].label.toLowerCase().includes(this.search)) {
          }else {
              result.push(itemList[i]);
          }
      }
      return result;
    } */

    removeNode(label: String) {
        for (let i = this.TreeDestanation.length - 1; i >= 0; i--) {
            if (this.TreeDestanation[i].label === label) {
                this.TreeDestanation.splice(i, 1);
            }
        }
        this.TreeDestanationCopy = this.arrayCopy(this.TreeDestanation);
        /* this.TreeDestanation.forEach((childNode) => {
            //this.expandRecursive(childNode, isExpand);
        } ); */
    }

    addNodeData(newNode: TreeNode) {
        const node: TreeNode[] = [];
        node.push(newNode);
        this.TreeDestanation.push(this.arrayCopy(node)[0]);
        this.TreeDestanationCopy = this.arrayCopy(this.TreeDestanation);
    }

    addNode(event) {
        if (event.node.children.length === 0) {
            this.addNodeData(event.node);
        }
    }

    nodeSelect(event) {
        if (event.node.children.length === 0) {
            this.addNodeData(event.node);
        }
    }

    nodeDestSelect(event) {
        this.TreeDestanationCopy = this.arrayCopy(this.TreeDestanation);
    }

    isDivVisible(node: TreeNode) {
        if (node === undefined) {
            return true;
        } else if (node.children.length === 0) {
            return (node.label.toLowerCase().includes(this.search) ? true : false);
        } else {
            return true;
        }
    }

    nodeDrop(event) {
        if (event.dropNode.children.length === 0) {
            this.TreeDestanationCopy = this.arrayCopy(this.TreeDestanation);
        } else {
            if (this.TreeDestanationCopy.length !== 0) {
                this.TreeDestanation = this.arrayCopy(this.TreeDestanationCopy);
            }
            // this.addNodeData);
            // return false;
            // throw new RangeError();
        }
    }

    nodeUnselect(event) {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Node Unselected', detail: event.node.label });
    }

    nodeExpandMessage(event) {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Node Expanded', detail: event.node.label });
    }

    nodeExpand(event) {
        if (event.node) {
            // this.expanded=true;
            // in a real application, make a call to a remote url to load children of the current node and add the new nodes as children
            // this.nodeService.getLazyFiles().then(nodes => event.node.children = nodes);
        }
    }

    viewFile(file: TreeNode) {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Node Selected with Right Click', detail: file.label });
    }

    unselectFile() {
        // this.selectedFile2 = null;
    }

    expandAll() {
        // this.filesTree6.forEach( node => {
        //     this.expandRecursive(node, true);
        // } );
    }

    collapseAll() {
        // this.filesTree6.forEach( node => {
        //     this.expandRecursive(node, false);
        //  } );
    }

    private expandRecursive(node: TreeNode, isExpand: boolean) {
        node.expanded = isExpand;
        if (node.children) {
            node.children.forEach((childNode) => {
                this.expandRecursive(childNode, isExpand);
            });
        }
    }

}
