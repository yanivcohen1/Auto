import { Component, OnInit } from '@angular/core';
import {TreeDragDropService} from 'primeng/components/common/api';
// import {NodeService} from 'primeng/service/nodeservice';
import {Message, MenuItem, TreeNode} from 'primeng/components/common/api';
import {Tree} from 'primeng/components/tree/tree';
import {FilterPipe, SortByPipe} from './prime.filter';
import {SharedModule} from 'primeng/components//common/shared';
import {PrimeTemplate} from 'primeng/components//common/shared';

@Component({
  selector: 'jhi-prime',
  templateUrl: './prime.component.html',
  styles: [],
  providers: [TreeDragDropService]
})
export class PrimeComponent implements OnInit {

  search: string;
  msgs: Message[];
  msgs2: Message[];
  value: Date;
  selectedFile: TreeNode;
  expanded: boolean;
  TreeSource: TreeNode[];
  TreeDestanation: TreeNode[];
  TreeSourceCopy: TreeNode[] = [];
  TreeDestanationCopy: TreeNode[] = [];

  constructor() {}

  ngOnInit() {
    this.TreeDestanation = [
      /* {
          label: 'Backup',
          data: 'Backup Folder',
          expandedIcon: 'fa-folder-open',
          collapsedIcon: 'fa-folder'
      } */
    ];
    this.TreeSource = [
            {
                label: 'Documents',
                data: 'Documents Folder',
                expandedIcon: 'fa-folder-open',
                collapsedIcon: 'fa-folder',
                children: [
                    {label: 'barcelona1.jpg', data: 'Barcelona Photo'},
                    {label: 'logo1.jpg', data: 'PrimeFaces Logo'},
                    {label: 'primeui1.png', data: 'PrimeUI Logo'}]
            },
            {
                label: 'Pictures',
                data: 'Pictures Folder',
                expandedIcon: 'fa-folder-open',
                collapsedIcon: 'fa-folder',
                children: [
                    {label: 'barcelona.jpg', data: 'Barcelona Photo'},
                    {label: 'logo.jpg', data: 'PrimeFaces Logo'},
                    {label: 'primeui.png', data: 'PrimeUI Logo'}]
            },
            {
                label: 'Movies',
                data: 'Movies Folder',
                expandedIcon: 'fa-folder-open',
                collapsedIcon: 'fa-folder',
                children: [{
                        label: 'Al Pacino',
                        data: 'Pacino Movies',
                        // children: [{label: 'Scarface', icon: 'fa-file-video-o', data: 'Scarface Movie'},
                        // {label: 'Serpico', icon: 'fa-file-video-o', data: 'Serpico Movie'}]
                    },
                    {
                        label: 'Robert De Niro',
                        data: 'De Niro Movies',
                        // children: [{label: 'Goodfellas', icon: 'fa-file-video-o', data: 'Goodfellas Movie'},
                        // {label: 'Untouchables', icon: 'fa-file-video-o', data: 'Untouchables Movie'}]
                    }]
            }
        ]

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
    filesTemp =  this.deepArrayCopy(this.TreeSourceCopy);
    for (let i = filesTemp.length - 1; i >= 0; i--) {
        if (filesTemp[i].children !== undefined) {
            for (let i2 = filesTemp[i].children.length - 1; i2 >= 0; i2--) {
                if (filesTemp[i].children[i2].label.toLowerCase().includes(event)) {
                }else {
                    filesTemp[i].children.splice(i2, 1);
                }
            }
        }
    }
    this.TreeSource = this.deepArrayCopy(filesTemp);
    if (event.length === 0) {
        this.TreeSource =  this.deepArrayCopy(this.TreeSourceCopy);
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
                result.push({ label: item.label, data: item.data, expandedIcon: item.expandedIcon,
                    collapsedIcon: item.collapsedIcon});
            }
        }
        results.push({ label: arr[i].label, data: arr[i].data, expandedIcon: arr[i].expandedIcon,
            collapsedIcon: arr[i].collapsedIcon, children: result});
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
        results.push({ label: arr[i].label, data: arr[i].data, expandedIcon: arr[i].expandedIcon,
            collapsedIcon: arr[i].collapsedIcon, children: undefined });
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

onclick() {
  this.msgs = [];
  this.msgs.push(this.msgs2[0]);
  // this.TreeDestanation = this.filesTree9;
}

onclick2() {
  // const tmp = this.msgs2;
  // this.msgs = [];
  // tmp[0].detail = 'You click on:' + tmp[0].detail;
  // this.msgs.push(tmp[0]);
  const tmp = this.msgs2;
  const node: TreeNode[] = [];
  node.push(tmp[0].id);
  this.TreeDestanation.push(this.arrayCopy(node)[0]);
  this.TreeDestanationCopy = this.arrayCopy(this.TreeDestanation);
}

addNode(event) {
    this.msgs2 = [];
    this.msgs2.push({severity: 'info', summary: 'Node Selected', detail: event.node.label, id: event.node});
    if (event.node.children === undefined) {
      this.onclick2();
    }
}

nodeSelect(event) {
    this.msgs2 = [];
    this.msgs2.push({severity: 'info', summary: 'Node Selected', detail: event.node.label, id: event.node});
    if (event.node.children === undefined) {
      this.onclick2();
    }
}

nodeDestSelect(event) {
    this.TreeDestanationCopy = this.arrayCopy(this.TreeDestanation);
}

isDivVisible(node: TreeNode) {
    if (node === undefined) {
        return true;
    }else if (node.children === undefined) {
        return (node.label.toLowerCase().includes(this.search) ? true : false);
    } else {
        return true;
    }
}

nodeDrop(event) {
  if (event.dropNode.children === undefined) {
    this.TreeDestanationCopy = this.arrayCopy(this.TreeDestanation);
  } else {
    if (this.TreeDestanationCopy.length !== 0) {
        this.TreeDestanation = this.arrayCopy(this.TreeDestanationCopy);
    }
  // this.onclick();
  // return false;
  // throw new RangeError();
 }
}

nodeUnselect(event) {
    this.msgs = [];
    this.msgs.push({severity: 'info', summary: 'Node Unselected', detail: event.node.label});
}

nodeExpandMessage(event) {
    this.msgs = [];
    this.msgs.push({severity: 'info', summary: 'Node Expanded', detail: event.node.label});
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
    this.msgs.push({severity: 'info', summary: 'Node Selected with Right Click', detail: file.label});
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
        } );
    }
}

}
